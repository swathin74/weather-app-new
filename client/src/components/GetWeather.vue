<template>
  <div class="form-wrapper">

    <p v-if="!showContent && !errorMessage">Displaying weather information of the user current location <strong>{{ userLocation }}</strong>. Enter a city name and click on <strong>Get Weather Details</strong> to get data of any other location</p>
    
    <form @submit.prevent="handleSubmit" class="weather-form">
      <!-- Input Field -->
      <input
        v-model="cityName"
        type="text"
        name="City Name"
        placeholder="Enter a city name"
        required
        class="input-field"
      />
      <!-- Button -->
      <button type="submit" class="submit-button" @click="getLocation">Get Weather Details</button>
    </form>
  
    <p v-if="showContent">Displaying weather information of: <strong>{{ inputLocation }}</strong>. Enter a city name and click on <strong>Get Weather Details</strong> to get data of any other location</p>
    <p v-if="errorMessage && !showContent">{{ errorMessage }} Enter a city name and click on <strong>Get Weather Details</strong> to get data of any other location</p>
    
    <!-- Displaying the weather information -->
    <div class="wrapper">
      <WeatherDetails v-if="weatherData" :weatherData="weatherData"/>
      <ForecastData v-if="forecastData" :forecastData="forecastData"/>
    </div>
  </div>
</template>

<script lang="js">
import { ref, onMounted } from 'vue';
import WeatherService from '@/weatherService';
import WeatherDetails from './WeatherDetails';
import ForecastData from './ForecastData';

export default {
  name: 'GetWeather',
  components: {
    WeatherDetails,
    ForecastData
  },

  setup() {
    const cityName = ref('');
    const showContent = ref(false);
    const weatherData = ref(null);
    const forecastData = ref([]);
    const userLocation = ref('');
    const inputLocation = ref('');
    const errorMessage = ref('');

    const getWeatherByLocation = async (latitude, longitude) => {
      try {
        const res = await WeatherService.getWeatherByCoordinates(latitude, longitude);
        weatherData.value = res.weatherData;
        forecastData.value = res.forecastData; 
        userLocation.value = res.currentLocation;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        errorMessage.value = 'Unable to fetch weather data for your location.';
      }
    };

    // Get user's current location on page load
    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getWeatherByLocation(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            errorMessage.value = 'Location access denied. Please enter your city manually.';
          }
        );
      } else {
        errorMessage.value = 'Geolocation is not supported by this browser.';
      }
    });

    const handleSubmit = async () => {
      try {
        const res = await WeatherService.getWeather(cityName.value);
        if(res.weatherData) {
          weatherData.value = res.weatherData;
          forecastData.value = res.forecastData;
          cityName.value = ''; 
          errorMessage.value = '';
          inputLocation.value = res.location;
        } else if(res && res.status === 400) {
          errorMessage.value = 'Please enter a valid location parameter value. ';
        }
        
      } catch (error) {
        console.error('invalid', error);
        errorMessage.value = 'Please enter a valid location parameter value. ';
      }
    };

    const getLocation = () => {
      showContent.value = true;
    }

    return {
      cityName,
      weatherData,
      forecastData,
      showContent,
      userLocation,
      inputLocation,
      getLocation,
      errorMessage,
      handleSubmit
    };
    
  }
};
</script>

<style scoped>

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f4f8;
}

.weather-form {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.input-field {
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #AEC6CF;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #87CEEB;
}

.weather-details, .forecast-data {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}

@media (min-width: 600px) {
  .form-wrapper {
    padding: 40px;
  }
  .weather-form {
    max-width: 500px;
  }
}

.wrapper {
  display: flex;
  align-items: start;
}
</style>