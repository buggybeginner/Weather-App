## Intiution Buildiing


### Real life user
* user -> url -> they see a webpage
* First file that you get -> HTML file
* HTML file is parsed and converted into humam understandable UI-> Browser 
**Parsing** : to read a file and convert it into a certain format
HTML , CSS -> Browser
jpg-> imageviewer -> image
mp4-> vlc media -> 

### Weather App
* need a `data` -> from an `api` ->`server url -> data`
* that should also provide in `particular format`

## Data representation formats
1. Format: spreadsheet format 
   Parser : excel, google sheets
2. XML-> extensible markup language -> you represent data with help of 
     Parser : XML parser
3. JSON : `Javascript object notation`
JS language has inbuilt capabilities to read json data

## HTTP packet
* Header -> metadata
* Body: actual data


```json
{
    "location": {
        "name": "Kolkata",
        "region": "West Bengal",
        "country": "India",
        "lat": 22.5697,
        "lon": 88.3697,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1731001325,
        "localtime": "2024-11-07 23:12"
    },
    "current": {
        "last_updated_epoch": 1731000600,
        "last_updated": "2024-11-07 23:00",
        "temp_c": 26.2,
        "temp_f": 79.2,
        "is_day": 0,
        "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
            "code": 1030
        },
        "wind_mph": 2.7,
        "wind_kph": 4.3,
        "wind_degree": 47,
        "wind_dir": "NE",
        "pressure_mb": 1014.0,
        "pressure_in": 29.94,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 79,
        "cloud": 50,
        "feelslike_c": 28.0,
        "feelslike_f": 82.4,
        "windchill_c": 25.5,
        "windchill_f": 78.0,
        "heatindex_c": 27.2,
        "heatindex_f": 80.9,
        "dewpoint_c": 19.5,
        "dewpoint_f": 67.1,
        "vis_km": 3.0,
        "vis_miles": 1.0,
        "uv": 1.0,
        "gust_mph": 4.8,
        "gust_kph": 7.8,
        "air_quality": {
            "co": 3106.15,
            "no2": 62.345,
            "o3": 86.0,
            "so2": 47.175,
            "pm2_5": 101.935,
            "pm10": 147.815,
            "us-epa-index": 4,
            "gb-defra-index": 10
        }
    }
}
```

## Weather APP
### Dependencies
* Data source->http://api.weatherapi.com/v1/current.json?key=0327aa4ae00f4a8ca0a173651240711&q=London&aqi=yes
* Flow
    * DUMMY UI [*]
        simple sa UI
        functionality
    * Need Data -> How to make a request API request [*]
        * make request 
        * get response 
        * data -> parse
    extract your required fields
    * data -> document -> data update [*]

## Browser vs JS
Browser : features -> Browser
* setTimeout->browser
* addEventListener -> browser
* URL -> browser
**Logic** -> JS

## Resume
Weather APP Githublink Deployedlink
* Built a weather application using HTML ,CSS and JS -> what tech you have used
* It takes location from the users and show the current weather details
* I have used fetch and document API to build it