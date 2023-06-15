<template>
    <div>
    <h2>Login</h2>
    <form v-on:submit="handleLogin">
      <label>Email:</label>
      <input v-model="email" type="email" required>
      <label>Password:</label>
      <input v-model="password" type="password" required>
      <button type="submit">Login</button>
    </form>
    </div>
    </template>
    
    <script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    
    export default {
      name: 'Login_firebase',
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        async handleLogin() {
          const auth = getAuth();
          try {
            await signInWithEmailAndPassword(auth, this.email, this.password)
          } catch (error) {
            console.log(error.message)
          }
        }
      }
    }
    </script>
    
    <style scoped></style>
    