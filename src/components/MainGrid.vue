<template>
    <div class="grid">
        asdasdas
      <router-link to="/view1">View 1</router-link>
      <router-link to="/view2">View 2</router-link>
      <router-link to="/view3">View 3</router-link>
      <!-- Add more links as needed -->
    </div>
  
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'GridNavigation'
  }
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Adjust as needed */
    gap: 10px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>