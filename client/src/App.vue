<template>
  <div id="app">
    <NavBar />
    <main>
      <GetWeather msg="Get weather information"/>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import GetWeather from './components/GetWeather.vue';


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
