const axios = require('axios');
const striptags = require('striptags');
let directionList = [];

// Takes direction request and returns google directions API list of directions
// Format: direction [walk | drive] from [source] to [destination]
module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
    let res = '';

    let origin_addr = encodeURIComponent(body.substring(body.indexOf("from") + 5, body.lastIndexOf(" to ")).trim());
    let dest_addr = encodeURIComponent(body.substring(body.lastIndexOf(" to ") + 4, body.length).trim());

    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin_addr}&destination=${dest_addr}&key=${process.env.MAPS_API_KEY}`)
    .then(function (response) {
        //Parse Directions
        response.data.routes[0].legs[0].steps.forEach(element => {
            let curr_step = element.html_instructions +" ("+ element.distance.text+")";
            let regex = /(&nbsp;|<([^>]+)>)/ig;
            directionList.push(striptags(curr_step,["div"]).replace(regex, " "));
            res = directionList.join('\n\n');
         });
    }).then(() =>{
        if(res.length > 1500){
            callback(null, "Directions limited to 1500 chars...\n" + res.substr(0,1500) + "\n.....");
        }else{
            callback(null, res);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
  };