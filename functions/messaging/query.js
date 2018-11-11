const axios = require("axios");

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
  let res = "";
  let query = body
    .substring(body.lastIndexOf("query ") + 6, body.lastIndexOf(""))
    .trim()
    .replace(" ", "+");

  axios
    .get(
      `http://api.wolframalpha.com/v1/result?appid=WLAQQ9-YP923PK67P&i=${query}`
    )
    .then(function(response) {
      console.log(response.data);
      res = response.data;
    })
    .then(() => {
      callback(null, res);
    })
    .catch(function(error) {
      console.log(error);
    });
};
