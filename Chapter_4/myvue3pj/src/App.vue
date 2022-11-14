<template>
  <div>
    <p>{{ title }}</p>
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

<style scoped>
  p{
    color:blue;
  }
</style>