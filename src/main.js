import { createApp } from 'vue'
import App from './App.vue'

// In your main.js file
import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  // your-config
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')

