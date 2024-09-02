import axios from 'axios'

class WeatherService {
    // Fetch weather data by city name
    async getWeather(cityName) {
        const url = `/api/weather?city=${cityName}`;
        try {
            const { data } = await axios.get(url)
            return data
        } catch(err) {
            console.log(err.error);
            return err.error;
        }
    }

    // Fetch weather data by latitude and longitude
    async getWeatherByCoordinates(lat, lon) {
        const url = `/api/weather/by-location?lat=${lat}&lon=${lon}`;
        try {
            const { data } = await axios.get(url);
            return {
                weatherData: data.weatherData,
                forecastData: data.forecastData,
                currentLocation: data.location
            };
        } catch (err) {
            console.error('Error fetching weather by coordinates:', err);
            throw err;
        }
    }
}

export default new WeatherService()