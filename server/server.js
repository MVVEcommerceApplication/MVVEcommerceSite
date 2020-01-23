const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

const userControllers = require('./controllers/userControllers');
const productsControllers = require('./controllers/productsControllers');
const cookieControllers = require('./controllers/cookieControllers');
const sessionControllers = require('./controllers/sessionControllers');

app.use(bodyParser.json());
app.use(cookieParser());

// root, send index.html
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.post('/signup', userControllers.createUser, (req, res, next) => {
  // after successful signup will redirect to main page or to login
  res.status(200).json('signup successful');
});

app.post('/login', userControllers.verifyUser, cookieControllers.setSSIDCookie,  (req, res, next) => {
  res.status(200).json(res.locals.verified);
    //after successful signup will redirect to main page or to login
});

app.post('/checkout/information', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ 'THE EMAIL YOU SENT ME WAS': email });
});

app.post('/checkout/shipping', (req, res) => {
  const {
    firstName,
    lastName,
    address,
    apartment,
    city,
    state,
    country,
    zip,
    phone,
  } = req.body;
  console.log(firstName, lastName, address, apartment, city, state, country, zip, phone);
  res.status(200).json({
    'THE FIRST NAME YOU SENT ME WAS:': firstName,
    'THE LAST NAME YOU SENT ME WAS:': lastName,
    'THE ADDRESS YOU SENT ME WAS:': address,
    'THE APARTMENT YOU SENT ME WAS:': apartment,
    'THE CITY YOU SENT ME WAS:': city,
    'THE STATE YOU SENT ME WAS': state,
    'THE COUNTRY YOU SENT ME WAS:': country,
    'THE ZIP YOU SENT ME WAS:': zip,
    'THE PHONE YOU SENT ME WAS:': phone,
  });
});

// read products from database endpoints
app.get('/products', productsControllers.readProducts, (req, res) => {
  res.status(200).json(res.locals.products);
});


// fixes react router re-render issues
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// global catch-all error handler for middleware 
app.use('/', (err, req, res, next) => {
  const defaultErrObj = {
    log: 'Unknown server error',
    status: 500,
    message: 'Unknown error - see server logs for details',
  };

  const newErrObj = Object.assign({}, defaultErrObj, err);
  res.status(newErrObj.status).send(newErrObj.message);
})

app.listen(port, () => console.log(`This app listening on port ${port}!`));
