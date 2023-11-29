<template>
  <h1>Post Create Page</h1>
  <form @submit.prevent="addPost">
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" v-model="title">
    </div>

    <div class="form-group">
        <label for="body">Body</label>
        <textarea name="body" rows="10" v-model="body"></textarea>
    </div>

    <div class="form-group">
        <label for="tag">Tags(Hint Enter To Add A Tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
    </div>
    <span v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
    </span>
    
    <div class="btn">
        <button>Add Post</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db, timestamp } from "../firebase/config"
export default {
    setup (){
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown = () => {
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value = "";
        }

        let addPost = async () => {
            let newPost =   {
                                title: title.value,
                                body: body.value,
                                tags: tags.value,
                                created_at: timestamp()
                            }

            let res = await db.collection('posts').add(newPost);
            
            router.push('/');
        }

        return {
            title,
            body,
            tag,
            handleKeydown,
            tags,
            addPost
        }
    }
}
</script>

<style>
    form{
        width: 50%;
        background-color: #F2F2F2;
        margin: 0 auto;
        padding: 30px;
    }

    label{
        display: block;
        text-align: left;
        margin-bottom: 5px;
    }

    input{
        width: 100%;
    }

    input:focus{
        outline: 1px solid crimson;
    }

    textarea{
        width: 100%;
    }

    textarea:focus{
        outline: 1px solid crimson;
    }

    .form-group{
        margin-bottom: 20px;
    }
    .btn{
        margin-top: 20px;
    }

    button{
        background-color: cadetblue;
        border: none;
        padding: 5px 15px;
        color: white;
        margin-right: -90%;
        cursor: pointer;
    }

    button:hover{
        background-color: #F2F2F2;
        color: #000;
        border: 1px solid cadetblue;
        transition: 1s;
    }

    .pill{
        background-color: #ddd;
        padding: 5px 10px;
        border-radius: 10%;
        margin-right: 10px;
    }
</style>