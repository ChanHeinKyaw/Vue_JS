<template>
  <div class="container welcome">
    <div v-if="showLoginForm">
        <Login></Login>
        <p>not a member? <span @click="showLoginForm=!showLoginForm">create account?</span></p>
    </div>
    <div v-else>
        <Signup></Signup>
        <p>Already member? <span @click="showLoginForm=!showLoginForm">Login Account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: { Login, Signup },
    setup(){
        let showLoginForm = ref(true);
        return {
            showLoginForm
        }
    }
}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
</style>