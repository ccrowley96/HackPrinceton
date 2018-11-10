module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
    callback(
      null,
      [
        `--- TextNet Help ---`,
        '\n1. "textnet" - returns lists of available functions',
        '\n2. "direction" - format: "direction [walk | drive | transit | bike] from [source] to [destination]"',
        '\n3. "translate" - format: "translate [string to translate] to [target language]"'
        
      ].join("\n")
    );
  };