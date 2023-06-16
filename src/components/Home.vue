<template>
    <div>
    <h2>Home</h2>
    <p>Welcome, {{ user?.email }}</p>
    </div>
</template>
    
<script>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'Home_firebase',
    setup() {
    const user = ref(null);
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
    });
    return { user };
    }
}
</script>
    