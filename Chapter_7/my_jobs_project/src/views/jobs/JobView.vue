<template>
  <h1>This is an Job page</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link
      class="jobs"
      :to="{ name: 'jobdetail', params: { id: job.id } }"
      >{{ job.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        this.jobs = datas;
      })
      .catch((err) => {
        console.log(err.message());
      });
  },
};
</script>

<style>
.jobs {
  color: crimson;
}
</style>
