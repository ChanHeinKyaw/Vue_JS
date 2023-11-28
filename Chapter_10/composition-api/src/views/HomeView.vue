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
      {title: "post title one", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged", id: 1},
      {title: "post title two", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged", id: 2}
    ])

    return {
      posts
    }
  }
}
</script>
