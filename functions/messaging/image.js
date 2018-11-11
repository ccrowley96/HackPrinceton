const axios = require("axios");
const FormData = require("form-data");

module.exports = (tel = "", url = "", from = {}, to = {}, callback) => {
  axios
    .post(`https://687e8f4c.ngrok.io/image`, { url })
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
