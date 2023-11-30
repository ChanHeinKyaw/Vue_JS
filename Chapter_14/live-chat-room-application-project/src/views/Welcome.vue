<template>
  <div class="container welcome">
    <Signup></Signup>
    <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: { Login, Signup },

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
</style>