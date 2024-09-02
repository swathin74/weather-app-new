const express = require('express')
const router = express.Router()
const axios = require('axios');

//  GET request to fetch weather data by city name
router.get('/', async (req, res) => {
    const API_KEY = "CB2GB98PFZ9HB2GDZRUER5LDB";
    const location = req.query.city;
    const url =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
    console.log(location)
    if (!location || typeof location !== 'string') {
        return res.status(400).json({ error: 'Invalid location parameter value' });
      }
    try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherData = data.currentConditions;
        const forecastData = data.days.slice(0, 7);
        const location = data.address;
        res.status(200).json({
            weatherData,
            forecastData,
            location
        });

    } catch (error) {
        console.error(error);
        if(error.status === 400) {
            return res.status(400).json({ error: 'Invalid location parameter value' });
        }
        res.status(500).send('Error, please try again!');
    }
})

// GET request to fetch weather data by latitude and longitude
router.get('/by-location', async (req, res) => {
    const API_KEY = "CB2GB98PFZ9HB2GDZRUER5LDB";
    const { lat, lon } = req.query;

    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
        return res.status(400).json({ error: 'Invalid latitude or longitude parameter' });
    }

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherData = data.currentConditions;
        const forecastData = data.days.slice(0, 7);
        const timezoneString = data.timezone;
        const currentLocation = timezoneString.split('/'); 
        const location = currentLocation[currentLocation.length - 1];
        res.status(200).json({
            weatherData,
            forecastData,
            location
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error, please try again!');
    }
});

module.exports = router;