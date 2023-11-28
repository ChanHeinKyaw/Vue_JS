<template>
  <div class="home">
    <h1>Person One</h1>
    <p>{{ personOne.name }}-{{ personOne.age }}</p>
    <button @click="changeOne">Change One</button>

    <h1>Person Two</h1>
    <p>{{ personTwo.name }}-{{ personTwo.age }}</p>
    <button @click="changeTwo">Change Two</button>

    <h1>User One</h1>
    <p>{{ userOne }}</p>
    <button @click="changeUserOne">Change User One</button>

    <h1>User Two</h1>
    <p>{{ userTwo }}</p>
    <button @click="changeUserTwo">Change User Two</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup(){
    let personOne = ref({name: "Kyaw Kyaw", age: 30});
    let changeOne = () => {
      personOne.value.name = "Change Mg Mg";
    }

    let personTwo = reactive({name: "Mg Mg", age: 23});
    let changeTwo = () => {
      personTwo.name = "Change Kyaw Kyaw";
    }

    let userOne = ref("Chan Hein Kyaw");
    let userTwo = reactive("Mg Mg");

    let changeUserOne = () => {
      userOne.value = "CHK";
    }

    let changeUserTwo = () => {
      userTwo = "mgmg";
    }

    return {
      personOne,
      personTwo,
      userOne,
      userTwo,
      changeOne,
      changeTwo,
      changeUserOne,
      changeUserTwo
    }
  }
}
</script>
