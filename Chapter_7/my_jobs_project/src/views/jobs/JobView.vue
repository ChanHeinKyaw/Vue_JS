<template>
  <h1>This is an Job page</h1>
  <div v-for="job in jobs" :key="job.id">
    <p class="jobs">{{ job.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: "1",
          title: "project manager",
          detail: "creative coder project manager",
        },
        {
          id: "2",
          title: "designer",
          detail: "creative coder designer",
        },
        {
          id: "3",
          title: "developer",
          detail: "creative coder developer",
        },
      ],
    };
  },
};
</script>

<style>
.jobs {
  color: crimson;
}
</style>
