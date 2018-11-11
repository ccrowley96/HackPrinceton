module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
    callback(
      null,
      [
        `--- TextNet Help ---`,
        '\n1. "textnet" - returns lists of available functions',
        '\n\n2. "direction" - format: "direction [walk | drive | transit | bike] from [source] to [destination]"',
        '\n\n3. "translate" - format: "translate [string to translate] to [target language]"',
        '\n\n4. "recommend" - format: "Search term, for example "food" or "restaurants". The term may also be business names, such as "Starbucks\
                \nLocation, for example "New York City", "NYC", "350 5th Ave,"\
                \nExample: recommend coffee shop near Times Square New York City'
      ].join("\n")
    );
  };