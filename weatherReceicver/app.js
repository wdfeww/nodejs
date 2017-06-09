const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().argv;

var callbackWeather = (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
    var temperature = ((result.temperature-32)/1.8).toFixed(2);
    var humidity = result.humidity * 100;

    console.log(`Temperature:`,temperature,'°C');
    console.log(`Humidity:`,humidity,'%');}
}

var callbackGeocode = (errorMessage, result) => {

    //ak je errorMessage nastaveny cize nieje udefined tak...
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        weather.getWeather(result.latitude, result.longitude, callbackWeather)
         console.log(`Address: ${result.address}`);
        // console.log(`Latitude: ${result.latitude}`);
        // console.log(`Longitude: ${result.longitude}`);
    }
}


geocode.geocodeAddress(argv.a, callbackGeocode);


//demand povinny
//alias moze byt aj v takom tvare
//describe ak uzivatel nevie spustit tak sa mu zobrazi tento describe ak da --help
//ak chcem pre help alias h tak urobim help().alias('help','h').
