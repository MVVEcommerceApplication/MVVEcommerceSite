// const sessionControllers = {};

// NOT CONFIGURED TO BE USED YET

// sessionControllers.startSession = (req, res, next) => {
//   const { email } = req.body;
//   const findUserQuery = `SELECT * FROM "customer" WHERE email = '${email}'`;

//   db.query(findUserQuery, (err, result) => {
//     if(err){
//       return next({ log: err.stack, message: 'Error executing the query in setSSIDCookie'});
//     }
//     // * if no err, set the cookie
//     //console.log('ssid cookie res', result);
//     // * if result exists, generate random num in the session table
//     //console.log('**** user found from setSSID:');
//     db.query(findUserQuery)
//     return next();
//   }
// )}


// module.exports = sessionControllers;