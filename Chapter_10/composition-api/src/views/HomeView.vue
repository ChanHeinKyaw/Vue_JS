<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{ name }}.i am {{ age }} years old</p>
    <input type="text" v-model="name">
    <button @click="handleClick">Click</button>
    <button @click="increaseAge">Increase</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    let name = ref("Chan Hein Kyaw");
    let age = ref(23);
    let handleClick = () => {
      name.value = "Kyaw Kyaw"
    }

    let increaseAge = () => {
      age.value++;
    }

    return {
      name,
      age,
      handleClick,
      increaseAge
    }
  }
}
</script>
