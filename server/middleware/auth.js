const models = require('../models');
const Promise = require('bluebird');

const parseCookies = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  if (!req.session) {
    req.session = {};
  }
  var session = req.session;
  // console.log('this is the res', res);
  // do something
  models.Sessions.create()
    .then((sqlResponse) => {
      console.log('111111111111111111');
      models.Sessions.get({ id: sqlResponse.insertId })
        .then((newSession) => {
          console.log('222222222222222222222222');
          session.hash = newSession.hash;
          res.cookie('shortlyid', newSession.hash);
          console.log('3333333333333333333333333333333333', newSession);
          // models.Sessions.isLoggedIn(newSession) 
          //   .then((isLoggedIn) => {
          //     // models.Users.get({ id: newSession.userId })
          //     // .then((user) => {
          //     // })
          //     if(isLoggedIn)  {
          //       console.log('this is user', user);
          //       session.username = user.username;
          //     }
          //   })
          // if(newSession.userId) {
          // get request to the user table
          // }
          res.status(200).send(session);
          next();
        })
        .catch((err) => { console.error('Session could not be created'); });
    });
  // .then to assign parsed cookies to req
  // do everything below
  // check if cookie is valid
  // if not throw
  // if yes ----- NOT SURE YET

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

