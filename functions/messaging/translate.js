var LanguageTranslatorV3 = require("watson-developer-cloud/language-translator/v3");

var translator = new LanguageTranslatorV3({
  version: "2018-05-01",
  headers: {
    "X-Watson-Technology-Preview": "2018-05-01",
    "X-Watson-Learning-Opt-Out": true
  }
});

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
  callback(null, "you want to translate");
};
