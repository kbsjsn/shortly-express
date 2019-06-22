const parseCookies = (req, res, next) => {
  let result = {};

  var cookieObj = req.headers.cookie;
  if(cookieObj != undefined) {
    var cookieBySemi = cookieObj.split('; ');
    for(var entry of cookieBySemi) {
      var cookie = entry.split('=');
      result[cookie[0]] = cookie[1];
    }
  }
  req.cookies = result;
  next();

};

module.exports = parseCookies;