const db = require('../dbConnection');

const productsController = {};


productsController.readProducts = (req, res, next) => {
  console.log('products controller middleware is HOT!!!!');

  const productQuerty = 'SELECT * FROM "product" ';

  db.query(productQuerty, (err, products) => {
    if (err) {
      return next({ log: err.stack, message: 'Error executing query in createUser' });
    }
    res.locals.products = products.rows;

    console.log('PRODUCTS PULL FORM DB MIDDLEWARE: ', res.locals.products);
    return next();
  });
};

module.exports = productsController;
