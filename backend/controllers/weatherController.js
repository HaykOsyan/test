const weather = require('openweather-apis')

weather.setLang(process.env.WEATHER_LANG);
weather.setCity(process.env.WEATHER_CITY);
weather.setUnits(process.env.WEATHER_UNITS);
weather.setAPPID(process.env.WEATHER_APPID);

class WeatherController {
    get (req, res) {
        
        weather.getSmartJSON(function(err, smart){
            if(err) console.log(err);

            return res.json({smart})
        });
    }
}

module.exports = new WeatherController()