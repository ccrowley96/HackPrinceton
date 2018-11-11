const send = require("../helpers/send.js");

/**
 * Begins a conversation with a specified telephone number
 * @param {string} tel The telephone number to initiate messaging with
 * @returns {object}
 */
module.exports = (tel, context, callback) => {
  send(
    tel,
    [
      `Welcome to TextNet on StdLib!`,
      "",
      `To get started, try sending "textnet" to learn about the functionality` +      
      "To prevent future messages, please respond STOP at any time."
    ].join("\n"),
    null,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, { status: "sent", tel: tel });
    }
  );
};
