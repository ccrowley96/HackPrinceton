module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
    callback(
      null,
      [
        `--- TextNet Help ---`,
        '\n1. "textnet" - returns lists of available functions',
        '\n\n2. "direction" - format: "direction [walk | drive | transit | bike] from [source] to [destination]"',
        '\n\n3. "translate" - format: "translate [string to translate] to [target language]"',
        '\n\n4. "recommend" - format: "recommend [business] near [location]"\
                \nBusiness - for example "food" or "restaurants". The term may also be business names, such as "Starbucks\
                \nLocation, for example "New York City", "NYC", "350 5th Ave,"',
        '\n\n6. "query" - format: "query [any question]',                
        '\n\n6. *image upload* - upload any image for information about the image contents'
      ].join("\n")
    );
  };