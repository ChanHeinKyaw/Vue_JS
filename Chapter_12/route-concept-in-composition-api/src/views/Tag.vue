<template>
    <h1>Post Lists</h1>
    <div v-if="error">
        {{ error }}
    </div>

    <div v-if="posts.length>0">
        <PostList :posts="filterPosts"></PostList>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '@/composables/getPosts'
import { computed } from 'vue'

export default {
  components: { Spinner, PostList },
    props: ["tag"],
    setup(props){
        let {posts,error,load} = getPosts();
        load();

        let filterPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag);
            })
        })

        return {
            posts,
            error,
            filterPosts
        }

    }
}
</script>