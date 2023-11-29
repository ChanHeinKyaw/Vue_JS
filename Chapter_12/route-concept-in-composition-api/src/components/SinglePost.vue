<template>
    <div class="main">
        <div class="card">
            <router-link :to="{name: 'detail', params: {id: post.id}}">
            <h3>{{post.title}}</h3>
            </router-link>
            <p>{{cutPostBody}}</p>
                <span v-for="tag in post.tags" :key="tag" class="pill">
                    <router-link :to="{name: 'tag', params: {tag}}">
                        {{ tag }}
                    </router-link>
                </span>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ["post"],
    setup(props){
        let cutPostBody = computed(() => {
            return props.post.body.substring(0,100)+ "....";
        })

        return {
            cutPostBody
        };
    }
}
</script>

<style scoped>
    .card{
        background-color: #f2f2f2;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    
    .main{
        text-align: left;
    }
</style>