const axios = require("axios");
const FormData = require("form-data");

module.exports = (tel = "", url = "", from = {}, to = {}, callback) => {
  axios
    .post(`https://6c0be464.ngrok.io/image`, { url })
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
