const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const userControllers = require('./controllers/userControllers');
const productsController = require('./controllers/productsControllers');

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.post('/signup', userControllers.createUser, (req, res, next) => {
  // after successful signup will redirect to main page or to login
  res.status(200).json('signup successful');
});


app.post('/login', userControllers.verifyUser, (req, res, next) => {
  res.status(200).json(res.locals.verified);
    //after successful signup will redirect to main page or to login
})

app.post('/checkout/information', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ 'THE EMAIL YOU SENT ME WAS': email });
});

app.post('/checkout/shipping', userControllers.saveShippingInfo, (req, res) => {
  res.status(200).send(res.locals.create);
});

// read products from database endpoints
app.get('/products', productsController.readProducts, (req, res) => {
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
