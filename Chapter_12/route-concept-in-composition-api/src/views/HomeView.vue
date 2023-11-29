<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <h1>Post Lists</h1>
    <div v-if="posts.length>0" class="layout">
      <div>
        <PostList :posts="posts"></PostList>
      </div>
      <div>
        <TagCloud></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
export default {
  components: {
    Spinner, PostList, TagCloud },
  setup(){
    let {posts,error,load} = getPosts();
    
    load();

    return {
      posts,
      error
    }
  }
}
</script>

<style scoped>
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20;
  }
</style>
