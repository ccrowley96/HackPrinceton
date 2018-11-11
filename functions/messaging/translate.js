const { Translate } = require("@google-cloud/translate");
const axios = require("axios");

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
  let res = "";
  console.log(body);
  axios
    .post(`https://687e8f4c.ngrok.io/translate`, { text: body })
    .then(function(response) {
      console.log(response.data.result);
      res = response.data.result;
    })
    .then(() => {
      callback(null, res);
    })
    .catch(function(error) {
      console.log(error);
    });
};
