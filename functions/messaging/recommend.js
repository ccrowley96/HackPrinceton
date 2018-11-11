const yelp = require('yelp-fusion');
const apiKey = process.env.YELP_API_KEY;

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {

    // recommend [coffee shop] near [location]
    let input_term = encodeURIComponent(body.substring(body.indexOf("recommend") + 10, body.lastIndexOf(" near ")).trim());
    let input_location = encodeURIComponent(body.substring(body.lastIndexOf(" near ") + 6, body.length).trim());

    const searchRequest = {
      term: input_term,
      location: input_location
    };

    const client = yelp.client(apiKey);
    
    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      callback(null,prettyJson);
    }).catch(e => {
      console.log(e);
    });
  };
  