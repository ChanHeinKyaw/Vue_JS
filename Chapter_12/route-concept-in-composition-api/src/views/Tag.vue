<template>
    <h1>Post Lists</h1>
    <div v-if="error">
        {{ error }}
    </div>

    <div v-if="posts.length>0" class="layout">
        <div>
            <PostList :posts="filterPosts"></PostList>
        </div>
        <div>
            <TagCloud></TagCloud>
        </div>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '@/composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import { computed } from 'vue'

export default {
  components: { Spinner, PostList, TagCloud },
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

<style scoped>
    .layout{
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 20;
    }
</style>