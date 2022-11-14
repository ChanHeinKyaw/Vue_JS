<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
    <button @click="changeName">Change</button>
    <ModalVue></ModalVue>
  </div>
</template>

<script>
import ModalVue from "./components/ModalVue.vue"
  export default{
    data(){
      return {
        title: "Hello",
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

<style>

</style>