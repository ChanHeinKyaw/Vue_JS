<template>
  <form>
    <label for="">Email</label>
    <input type="email" required v-model="email">

    <label for="">Password</label>
    <input type="password" required v-model="password">

    <label for="">Roles</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
  </form>
  <p>email - {{ email }}</p>
  <p>password - {{ password }}</p>
  <p>role - {{ role }}</p>
</template>

<script>
export default {
  data(){
    return {
      email: "",
      password: "",
      role: "",
    }
  }
}
</script>

<style>
form{
   max-width: 420px;
   margin: 30px auto;
   background: white;
   text-align: left;
   padding: 40px;
   border-radius: 10px; 
}

label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
</style>