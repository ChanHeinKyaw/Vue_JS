<template>
  <h1>This is and Job Detail Page {{ id }}</h1>
  {{ $route.params.id }}
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },

  props: ["id"],
};
</script>

<style></style>
