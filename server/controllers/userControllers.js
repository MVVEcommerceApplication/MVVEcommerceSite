const bcrypt = require('bcrypt');
const db = require('../dbConnection');
const userControllers = {};

/** 
 * @summary Middleware that queries database and creates new user.
 * 
 * @description Upon user hitting SIGN UP button, req.body is populated with query and passed to the middleware.
 * 
 * @param {Object} req Request body
 * @param {Object} res Response body
 * @param {Function} next Invokes next piece of middleware 
 */

// PRIOR CREATING THE NEW USER -- MUST CHECK IF THE USER EXISTS IN DB (CHECK BY UNIQUE EMAIL)
userControllers.createUser = (req, res, next) => {
    //extracting user input details from req.body
    let { firstname, lastname, password, email } = req.body

    // console.log("from userController.createUser req.body: ", req.body);

    //hasshing password prior sending the db query
    hashPassword(password)
        .then((hashPassword) => {
            delete password
            password_hashed = hashPassword
        })
        .then(() => {

            // console.log('hashedpassword from create user: ', password_hashed)

            //add new user to our database
            const createUserQuery = `INSERT INTO customer (first_name, last_name, password, email) VALUES ('${firstname}', '${lastname}', '${password_hashed}','${email}') RETURNING *;`

            //     db.query(createUserQuery)
            //         .then(res => {
            //             //***CHECK WHY RES.ROWS IS EMPTY ARRAY

            //             console.log("res", res)

            //             // console.log("res", res)


            //             next()
            //         })
            //         .catch(err => res.status(500).json({ error: err.mesage }))
            // })


            db.query(createUserQuery, (err, result) => {
                if (err) {
                    return next({ log: err.stack, message: 'Error executing query in createUser' });
                }
                res.locals.create = result.rows;
                //console.log('result.rows[0]', result.rows[0]);
                return next();
            });

        db.query(createUserQuery)
            .then(result => {
              res.locals.create = result.rows[0];
              next();
            })
            .catch(err => {
              console.log(err);
              return next({ log: err.stack, message: 'Error executing query in createUser' });
            })
        })
}

userControllers.verifyUser = (req, res, next) => {
    const { email, password } = req.body;
    const findUserQuery = `SELECT * FROM "customer" WHERE email = '${email}' AND password = '${password}'`;


    db.query(findUserQuery, (err, result) => {
        if(err){
            return next({ log: err.stack, message: 'Error executing the query in verifyUser'});
        }

        res.locals.verified = result.rows[0];
        console.log('result.rows[0]', result.rows[0]);
        return next();
    });
}

userControllers.saveShippingInfo = (req, res, next) => {
    //extracting user input details from req.body
    const { firstName, lastName, address, apartment, city, stateInUnitedStates, country, zip, phone } = req.body;
    
    const saveShippingInfoQuery = `INSERT INTO shipments (first_name, last_name, address, apartment, city, state, country, zip, phone) VALUES ('${firstName}', '${lastName}', '${address}', '${apartment}', '${city}', '${stateInUnitedStates}', '${country}', '${zip}', '${phone}') RETURNING *;`

    db.query(saveShippingInfoQuery, (err, result) => {
        if (err) {
            return next({ log: err.stack, message: 'Error executing query in saveShippingInfo' });
        }
        res.locals.create = result.rows;
        return next();
    });

}



/**
 * @summary Helper function for Hashing Password with bcrypt before saving to the Database
 * 
 * @param {Object} password User input
 
 */
function hashPassword(password) {
    return new Promise((resolve, reject) =>
        bcrypt.hash(password, 10, (err, hash) => {
            err ? reject(err) : resolve(hash)
        })
    )
}

/**
 * @summary Helper function for verifying the Hashed Password
 * 
 * @param {Object} password User input
 * @param {Object} password_hashed Hashed password that is saved in the Database
 */
function checkPassword(password, password_hashed) {
    return new Promise((resolve, reject) =>
        bcrypt.compare(password, password_hashed, (err, res) => {
            if (err) {
                reject(err)
            }
            else if (res) {
                resolve(res)
            } else {
                reject(new Error('Passwords do not match.'))
            }
        })
    )
}


module.exports = userControllers;