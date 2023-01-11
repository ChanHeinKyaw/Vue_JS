<template>
  <div v-if="job">
    <h1>This is and Job Detail Page {{ id }}</h1>
    <p>Job Title - {{ job.title }}</p>
    <p>Job Detail - {{ job.detail }}</p>
  </div>
  <div>{{ $route.params.id }}</div>
</template>

<script>
export default {
  data() {
    return {
      job: null,
    };
  },
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((err) => {
        console.log(err.message());
      });
  },
};
</script>

<style></style>
