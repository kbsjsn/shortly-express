const models = require('../models');
const Promise = require('bluebird');

const parseCookies = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  // do something
  models.Sessions.create();
  // .then to assign parsed cookies to req
    // do everything below
    // check if cookie is valid
      // if not throw
      // if yes ----- NOT SURE YET

  console.log(req);
  // look up user data related to session
  // assigns object to session property on req
  // contains user information
    // userId
    // hash - unique hash of session

  // .catch the invalid cookie
    // send them to the login page
};

// MORE EXTRA CREDIT: do inner join of users & session to collect user specific info
// EXTRA CREDIT: MOUNT THIS FUNCTION TO APP.JS

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

