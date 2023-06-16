<template>
    <div class="container">
      <!-- Top Bar -->
      <div class="top-bar">
        <!-- Top bar content goes here -->
      </div>
  
      <!-- Main Content -->
      <div class="main-content">
        <DinnerComponent />
        <FridgeComponent />
        <LastMealComponent />
      </div>
  
      <!-- Bottom Bar -->
      <div class="bottom-bar">
        <!-- Bottom bar content goes here -->
      </div>
    </div>
  </template>
  
  <script>
  import DinnerComponent from './DinnerComponent.vue';
  import FridgeComponent from './FridgeComponent.vue';
  import LastMealComponent from './LastMealComponent.vue';
  
  export default {
    name: 'MainView',
    components: {
      DinnerComponent,
      FridgeComponent,
      LastMealComponent
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .top-bar, .bottom-bar {
    height: 10vh; /* adjust as needed */
    background-color: #f8f9fa;
  }
  
  .main-content {
    flex-grow: 1;
    overflow: auto;
  }
  </style>
  