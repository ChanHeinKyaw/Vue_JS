<template>
  <div class="container welcome">
    <div v-if="showLoginForm">
        <Login @enterChatroom="enterChatroom"></Login>
        <p>not a member? <span @click="showLoginForm=!showLoginForm">create account?</span></p>
    </div>
    <div v-else>
        <Signup @enterChatroom="enterChatroom"></Signup>
        <p>Already member? <span @click="showLoginForm=!showLoginForm">Login Account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'
export default {
  components: { Login, Signup },
    setup(){
        let showLoginForm = ref(true);
        let router = useRouter();
        let enterChatroom = () => {
            router.push({name: 'Chatroom'});
        }
        return {
            showLoginForm,
            enterChatroom
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