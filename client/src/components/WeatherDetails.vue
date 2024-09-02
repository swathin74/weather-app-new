<template>
  <div class="weather-wrapper">
    <div v-if="weatherData" class="weather-card">
      <h3>Details</h3>
      <p><strong><font-awesome-icon class="fa-icon" :icon="faCloud" />Description:</strong> {{ weatherData.conditions }}</p>
      <p><strong><font-awesome-icon class="fa-icon" :icon="faThermometerHalf" />Temperature:</strong> {{ weatherData.temp }}F</p>
      <p><strong><font-awesome-icon class="fa-icon" :icon="faTint" />Humidity:</strong> {{ weatherData.humidity }}%</p>
      <p><strong><font-awesome-icon class="fa-icon" :icon="['fas', 'sun']" />Sunrise:</strong> {{ weatherData.sunrise }}</p>
      <p><strong><font-awesome-icon class="fa-icon" :icon="['fas', 'moon']" />Sunset:</strong> {{ weatherData.sunset }}</p>
    </div>
  </div>
</template>

<script lang="js">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCloud, faSun, faMoon, faThermometerHalf, faTint, faClock } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'WeatherDetails',
  components: {
    FontAwesomeIcon
  },
  props: {
    weatherData: {
      type: Object,
      required: true,
    }
  },
  setup() {
    return {
      faCloud,
      faSun,
      faMoon,
      faThermometerHalf,
      faTint,
      faClock
    };
  }
};
</script>

<style scoped>
.weather-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
}

.weather-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  text-align: left;
}

.weather-card h2 {
  margin-bottom: 10px;
  color: #333;
}

.weather-card p {
  margin: 27px 0;
  color: #555;
}

.weather-card p strong {
  color: #000;
}

.weather-card .fa-icon {
  margin-right: 10px;
}
</style>