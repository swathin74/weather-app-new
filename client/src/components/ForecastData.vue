<template>
    <div class="forecast-wrapper">
        <div v-if="forecastData.length" class="forecast-card">
        <h3>7-Day Weather Forecast</h3>
        <table class="forecast-table">
            <thead>
                <tr>
                <th>Date</th>
                <th v-for="day in forecastData" :key="day.date">
                    {{ day.datetime }}
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Max Temp (in Celcius)</td>
                <td v-for="day in forecastData" :key="day.date">
                    {{ day.tempmax }}
                </td>
                </tr>
                <tr>
                <td>Min Temp (in Celcius)</td>
                <td v-for="day in forecastData" :key="day.date">
                    {{ day.tempmin }}
                </td>
                </tr>
                <tr>
                <td>Humidity</td>
                <td v-for="day in forecastData" :key="day.date">
                    {{ day.humidity }}
                </td>
                </tr>
                <tr>
                <td>Windspeed</td>
                <td v-for="day in forecastData" :key="day.date">
                    {{ day.windspeed }}
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang="js">
export default {
  name: 'WeatherDetails',
  props: {
    forecastData: {
      type: Array,
      required: false
    }
  },
};
</script>

<style scoped>
.forecast-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
}

.forecast-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left;
}

.forecast-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.forecast-card p {
  margin: 5px 0;
  color: #555;
}

.forecast-card p strong {
  color: #000;
}

.forecast-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.forecast-table th, .forecast-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.forecast-table th {
  background-color: #AEC6CF;
  color: black;
}

.forecast-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.forecast-table tr:hover {
  background-color: #ddd;
}
</style>