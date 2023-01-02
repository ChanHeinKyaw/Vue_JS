<template>
  <p>Result is {{ score }}ms</p>
  <div v-if="score < 250">
    <p>you are too fase</p>
  </div>
  <div v-else-if="score > 250 && score < 500">
    <p>you are normal</p>
  </div>
  <div v-else>
    <p>you are too slow! try again</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
};
</script>
