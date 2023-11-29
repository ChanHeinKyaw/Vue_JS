<template>
    <h1>Post Detail</h1>
    <div class="main">
        <div v-if="error">
        {{ error }}
        </div>
        <div v-if="post" class="card">
            <div class="flex">
                <h3>{{ post.title }}</h3>
                <div>
                    <button @click="deletePost">Delete</button>
                </div>
            </div>
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
import { useRoute, useRouter } from "vue-router"
import { db } from "../firebase/config"
export default {
    components: { Spinner },
    props: ['id'],
    setup (props){
        let route = useRoute();
        let router = useRouter();
        let {post,error,load} = getPost(route.params.id);

        load();

        let deletePost = async () => {
            let id = props.id;
            await db.collection("posts").doc(id).delete();
            router.push("/");
        }
        
        return {
            post,
            error,
            deletePost
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

    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        background-color: crimson;
    }
</style>