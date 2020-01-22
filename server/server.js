const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const userControllers = require('./controllers/userControllers');

app.post('/signup', userControllers.createUser, (req, res, next) => {
  // after successful signup will redirect to main page or to login
  res.status(200).send('signup successful');
});

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

// fixes react router re-render issues
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`This app listening on port ${port}!`));
