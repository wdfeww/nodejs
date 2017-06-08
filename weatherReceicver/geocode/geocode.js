/**
 * Created by Client on 8.6.2017.
 */
const request = require('request');//inicializacia modulu reqest

var geocodeAddress = (address, callback) => {
var encodedAddress = encodeURIComponent(address);// osetruje string ak obsahuje medzery a nepovolene znaky tak sa prepisu do kodov napr medzera %20
    request({
        //ak vkladam premennu musim pouzit ``
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    },(error,response,body)=>{
       if(error){
           console.log("unable to connect to google server");
       }
       else if(body.status === 'ZERO_RESULTS'){
           console.log("invalid address");
       }
       else{
           console.log(body.results[0].formatted_address);
           console.log(body.results[0].geometry.location.lat);
           console.log(body.results[0].geometry.location.lng);
       }
    })

};

// module.exports.geocodeAddress = geocodeAddress;

module.exports = {
    geocodeAddress
};
