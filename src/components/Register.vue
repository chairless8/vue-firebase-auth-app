<template>
  <div>
  <h2>Register</h2>
  <form v-on:submit="handleRegister">
    <label>Email:</label>
    <input v-model="email" type="email" required>
    <label>Password:</label>
    <input v-model="password" type="password" required>
    <button type="submit">Register</button>
  </form>
  </div>
  </template>
  
  <script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  export default {
    name: 'Register_firebase',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async handleRegister() {
        try {
          await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        } catch (error) {
          console.log(error.message)
        }
      }
    }
  }
  </script>
  
  <style scoped></style>
  