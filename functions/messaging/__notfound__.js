const LIKE_REGEX = /^\s*i\s*like\s*([^\s]*)\s*.*$/gi;

/**
 * Not found handler - handles all SMS / MMS that don't match a command
 * 	(i.e. "more" = functions/messaging/more.js)
 * @param {string} tel The incoming telephone number
 * @param {string} body The (text) body of the message
 * @param {buffer} media The media content of the message, if any
 * @param {object} from Information about the incoming message: number, zip, city, state, country
 * @param {object} to Information about the receiver (your Twilio number): number, zip, city, state, country
 * @returns {string}
 */
module.exports = (
  tel = "",
  body = "",
  media = null,
  from = {},
  to = {},
  callback
) => {
  if (media) {
    // We got an image!
    console.log(media);
    return callback(null, `Yep, looks like a picture to me.`);
  } else if (body.match(LIKE_REGEX)) {
    // We matched some regex
    let matches = new RegExp(LIKE_REGEX).exec(body);
    let item = matches[1].toLowerCase();
    if (item === "cookies") {
      return callback(
        null,
        "I like cookies, too. Chocolate chip are my favorite."
      );
    } else {
      return callback(null, `I told you to say cookies, not ${item}!`);
    }
  } else {
    // We didn't find a command or match anything
    return callback(
      null,
      `Sorry, we can't help you with that!  Type "textnet" for a list of available functions.  Please check your formatting carefully.`
    );
  }
};
