<template>
  <h4>Tag Cloud</h4>
  <div>
    <div v-for="tag in uniqueTags" :key="tag">
      <router-link :to="{name: 'tag', params: {tag}}">
          <p class="badge">{{ tag }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['posts'],
  setup(props){
    let tags = ref([]);
    props.posts.forEach(post => {
      post.tags.forEach(tag => {
        tags.value.push(tag);
      })
    });

    let uniqueTags = tags.value.filter((tag,index,array) => {
      return array.indexOf(tag) === index;
    })
  
    return {
      uniqueTags
    }
  }
}
</script>

<style scoped>
  .badge{
    color: #929292;
  }

  a[href]{
    text-decoration: none;
  }
</style>