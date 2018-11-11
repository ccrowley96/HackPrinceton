const axios = require('axios');

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
  let input_term = encodeURIComponent(body.substring(body.indexOf("recommend") + 10, body.lastIndexOf(" near ")).trim());
  let input_location = encodeURIComponent(body.substring(body.lastIndexOf(" near ") + 6, body.length).trim());

  let yelp_req = `https://api.yelp.com/v3/businesses/search?term=${input_term}&location=${input_location}&limit=5&open_now=true`;

  let res_arr = [];
  let result = '';
  axios.get(yelp_req,
  {
      headers: {"Authorization" : `Bearer ${process.env.YELP_API_KEY}`}
  })
  .then((response) => {
      let count = 1;
      response.data.businesses.forEach(el => {
          let biz = {
              name: el.name,
              rating: el.rating,
              distance: `${Math.round(el.distance)} meters`,
              display_phone: el.display_phone,
              address: `${el.location.address1}, ${el.location.city} ${el.location.state}`
          };
          res_arr.push(biz);
          result += 
          `${count}: Name: ${biz.name} 
          Rating: ${biz.rating} / 5
          Distance: ${biz.distance}
          Phone: ${biz.display_phone}
          Address: ${biz.address}\n\n`;
          count++;
      });
  })
  .then(() => callback(null, result))
  .catch(function (error) {
      console.log('error :(');
  });   
};
  