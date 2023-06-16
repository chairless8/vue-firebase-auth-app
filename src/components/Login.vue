<template>
    <div>
      <h2>Login</h2>
      <button v-on:click="handleGoogleLogin">Login with Google</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
  import { useUserStore } from '../stores/user';
  
  export default {
    name: 'Login_firebase',
    setup() {
      const router = useRouter();
      const user = ref(null);
      const userStore = useUserStore();
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
  
      const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          user.value = result.user;
          userStore.setUser(result.user);
          if (result.user) {
            router.push('/');
          }
        } catch (error) {
          console.log(error.message);
        }
      }
  
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
        userStore.setUser(currentUser);
        if (currentUser) {
          router.push('/');
        }
      });
  
      return {
        handleGoogleLogin
      }
    }
  }
  </script>
  