const sessionControllers = {};

sessionControllers.startSession = (req, res, next) => {
  const cookie = 
  console.log('***in session controller:', req.cookies.ssid);
  return next();
}

module.exports = sessionControllers;