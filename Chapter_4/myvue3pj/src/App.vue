<template>
  <div>
    <div>
      <p>{{ title }}</p>
      <input type="text" ref="name">
      <button @click="changeName">Change</button>
    </div>
    <div v-if="showModal">
      <ModalVue header="Login Success" content="welcome to chan hein kyaw" theme="success" @close="showModal=false">
        <h1>Login Success</h1>
        <p>welcome user chan hein kyaw</p>
        <template v-slot:links>
          <a href="">Sing In</a>
          <a href="">Sing Up</a>
        </template>
      </ModalVue>
    </div>
    
    <button @click="showModal=true">Open Modal</button>
    <!-- <ModalVue header="are you sure you delete?" content="This is content" theme="danger"/> -->
  </div>

</template>

<script>
import ModalVue from "./components/ModalVue.vue"
  export default{
    data(){
      return {
        title: "Hello",
        showModal: false,
      }
    },
    components : {
      ModalVue
    },
    methods:{
      changeName(){
        this.title = this.$refs.name.value;
        this.$refs.name.value = "";
      }
    }
  }
</script>

<style scoped>
  p{
    color:blue;
  }
</style>