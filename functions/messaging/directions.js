const axios = require('axios');
const striptags = require('striptags');
let directionList = [];

// Takes direction request and returns google directions API list of directions
// Format: direction [walk | drive] from [source] to [destination]
module.exports = (tel = "", body = "", from = {}, to = {}, callback) => {
    let res = '';

    let origin_addr = encodeURIComponent(body.substring(body.indexOf("from") + 5, body.lastIndexOf(" to ")).trim());
    let dest_addr = encodeURIComponent(body.substring(body.lastIndexOf(" to ") + 4, body.length).trim());

    let tranportation_mode = 'driving';

    let transport_mode = body.split(" ")[1];

    if(transport_mode == ("walk") || transport_mode == ("walking")){
        tranportation_mode = 'walking';
    } else if(transport_mode == ("bike") || transport_mode == ("biking")){
        tranportation_mode = 'bicycling';
    } else if(transport_mode == ("transit") || transport_mode == ("bus")){
        tranportation_mode = 'transit';
    } else{
        tranportation_mode = 'driving';
    }
    
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin_addr}&destination=${dest_addr}&mode=${tranportation_mode}&key=${process.env.MAPS_API_KEY}`)
    .then(function (response) {
        //Parse Directions
        response.data.routes[0].legs[0].steps.forEach(element => {
            let curr_step = element.html_instructions +" ("+ element.distance.text+")";
            let regex = /(&nbsp;|<([^>]+)>)/ig;
            directionList.push(striptags(curr_step,["div"]).replace(regex, " "));
            res = directionList.join('\n\n');
         });
    }).then(() =>{
        let trans_mode = tranportation_mode + " directions ";
        if(res.length > 1500){
            callback(null, trans_mode + "limited to 1500 chars...\n" + res.substr(0,1500) + "\n.....");
        }else{
            callback(null, trans_mode + "\n" + res);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
  };