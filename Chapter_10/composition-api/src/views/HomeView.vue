<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>Search Value - {{search}}</p>
    <div v-for="name in filterValues" :key="name">
      <p>Person Name - {{name}}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup(){
    let search = ref("");
    let names = ref(["aungaung","kyawkyaw","mgmg","susu"]);

    let filterValues = computed(() => {
      return names.value.filter(name => {
        return name.includes(search.value);
      });
    })
    return {
      names,
      search,
      filterValues
    }
  }
}
</script>
