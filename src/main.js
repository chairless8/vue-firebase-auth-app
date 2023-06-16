import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import router from './router'
const firebaseConfig = {
  apiKey: "AIzaSyBPiguxyo_Z3OBWK3PymwMv-kPWSWbhCVg",
  authDomain: "gpt-usuario.firebaseapp.com",
  projectId: "gpt-usuario",
  storageBucket: "gpt-usuario.appspot.com",
  messagingSenderId: "4858042794",
  appId: "1:4858042794:web:d40ddeff10949bcc6533d3",
  measurementId: "G-GSM9RKZ385"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

createApp(App).use(auth).use(router).mount('#app')
