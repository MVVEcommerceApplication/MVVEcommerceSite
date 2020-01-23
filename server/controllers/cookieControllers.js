
const db = require('../dbConnection');
const cookieControllers = {};

// * middleware funcs to set cookie, start session, isLoggedIn

// cookieControllers.setCookie = (req, res, next) => {
//   res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
//   return next();
// }

cookieControllers.setSSIDCookie = (req, res, next) => {
  const { email } = req.body;
  const findUserQuery = `SELECT * FROM "customer" WHERE email = '${email}'`;

  db.query(findUserQuery, (err, result) => {
    if(err){
      return next({ log: err.stack, message: 'Error executing the query in setSSIDCookie'});
    }
    // * if no err, set the cookie
    //console.log('ssid cookie res', result);
    // * if resuot exists, generate random num in the session table
    console.log('**** user found from setSSID:');
    res.cookie('ssid', result.rows[0].session_id, { expires: new Date(Date.now() + 900000),httpOnly: true });
    return next();
  }
)}

module.exports = cookieControllers;