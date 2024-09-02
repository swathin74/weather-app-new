<template>
    <nav class="navbar">
      <div class="navbar-content">
        <span class="app-name">Weather checker</span>
        <button class="info-button" @click="toggleInfo"><i class="fas fa-info-circle"></i>Info</button>
      </div>
      <div v-if="showInfo" class="info-content">
        <p>The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
            Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavours.</p>
        <p>Developed by Swathi Nayudu.</p>
      </div>
    </nav>
  </template>

<script lang="js">
import { ref } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const showInfo = ref(false);

    const toggleInfo = () => {
      showInfo.value = !showInfo.value;
    };

    return {
      showInfo,
      toggleInfo
    };
  }
};
</script>

<style>
.navbar {
background-color: #AEC6CF;
color: black;
padding: 10px 20px;
}

.navbar-content {
display: flex;
justify-content: space-between;
align-items: center;
}

.app-name {
font-size: 18px;
font-weight: bold;
}

.info-button {
background: none;
border: none;
color: black;
font-size: 18px;
font-weight: bold;
cursor: pointer;
}
</style>
  
  
  