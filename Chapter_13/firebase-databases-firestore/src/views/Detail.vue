<template>
    <h1>Post Detail</h1>
    <div class="main">
        <div v-if="error">
        {{ error }}
        </div>
        <div v-if="post" class="card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <span v-for="tag in post.tags" :key="tag" class="pill">
                {{ tag }}
            </span>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost";
import { useRoute } from "vue-router"
export default {
    components: { Spinner },
    props: ['id'],
    setup (props){
        let route = useRoute();
        let {post,error,load} = getPost(route.params.id);

        load();
        
        return {
            post,
            error
        }
    }
}
</script>

<style scoped>
    .card{
        background-color: #f2f2f2;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        width: 45%;
    }
    
    .main{
        display: flex;
        justify-content: center;
        text-align: left;
    }
</style>