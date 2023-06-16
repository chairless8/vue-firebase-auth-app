<template>
  <div class="container">
      <!-- Navigation Bar -->
      <nav>
      <h2>My App</h2>
      <p v-if="user">Welcome, {{ user.email }}</p>
      <button v-if="user" v-on:click="handleLogout">Logout</button>
      <router-link v-else to="/login">Login</router-link>
      </nav>
      
    <!-- Content -->
    <main>
      <h2>Home</h2>
      <p>This is the main content of the page.</p>
      <GridNavigation />
    </main>

    <!-- Footer -->
    <footer>
      <p>© 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import GridNavigation from './MainGrid.vue'

export default {
name: 'Home_firebsae',
components: {
  GridNavigation
},
setup() {
  const user = ref(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  }

  return { user, handleLogout };
}
}
</script>

<style scoped>
.container {
display: flex;
flex-direction: column;
min-height: 100vh;
}

nav {
position: sticky;
top: 0;
background-color: #f8f9fa;
padding: 10px;
}

main {
flex: 1;
padding: 20px;
}

footer {
position: sticky;
bottom: 0;
background-color: #f8f9fa;
padding: 10px;
text-align: center;
}
</style>
