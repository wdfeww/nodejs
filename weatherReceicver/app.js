const geocode = require('./geocode/geocode.js');
const yargs = require('yargs');
const argv = yargs.
            options({
            a:{
                demand:true,
                alias:'address',
                describe:'Address to fetch weather for',
                string:true
            }
}).help().argv;

var callback = (errorMessage, result)=>{

}

geocode.geocodeAddress(argv.a, callback );



//demand povinny
//alias moze byt aj v takom tvare
//describe ak uzivatel nevie spustit tak sa mu zobrazi tento describe ak da --help
//ak chcem pre help alias h tak urobim help().alias('help','h').
