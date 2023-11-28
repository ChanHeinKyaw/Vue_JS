<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{ name }}.i am {{ age }} years old</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  setup(){
    let name = "Chan Hein Kyaw";
    let age = 23;
    let handleClick = () => {
      console.log("u clicked me");
    }

    return {
      name,
      age,
      handleClick
    }
  }
}
</script>
