const parseCookies = (req, res, next) => {
  let result = {};
  console.log('this is req------------------------------',req.headers);
  // return req.headers.cookies;
  // split string by ;
  // split each array index by '='
  // put together as object
  console.log(typeof req.headers.cookies);
  
};

module.exports = parseCookies;