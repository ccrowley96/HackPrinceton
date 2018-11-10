const axios = require('axios');

module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {

    let res = '';
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=${process.env.MAPS_API_KEY}`)
    .then(function (response) {
        //Parse Directions
        response.data.routes[0].legs[0].steps.forEach(element => {
            console.log(element.html_instructions);
            res += element.html_instructions + element.distance.text + "\n";
         })
    }).then(() =>{
        callback(null, res);
    })
    .catch(function (error) {
        console.log(error);
    });
  };