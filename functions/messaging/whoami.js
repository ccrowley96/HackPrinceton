module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
  callback(
    null,
    [
      `You are messaging from ${from.number} in ${from.city}, ${from.state} ${
        from.zip
      }, ${from.country}.`,
      "",
      "By default, Twilio provides information about incoming SMS and MMS " +
        "messages and you can use them via StdLib"
    ].join("\n")
  );
};
