<template>
  <div class="home">
    <h1>Post Lists</h1>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from 'vue';
export default {
  components: { PostList },
  setup(){
    let posts = ref([

    ])

    return {
      posts
    }
  }
}
</script>
