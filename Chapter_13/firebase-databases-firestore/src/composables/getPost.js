import { ref } from "vue";
import { db } from "@/firebase/config"

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");

    let load = async () => {
        try{
            await new Promise((resolve,reject) => {
                setTimeout(resolve, 2000);
              })
            let response = await db.collection("posts").doc(id).get();
            post.value = {id: response.id, ...response.data()}
        }catch(err){
            error.value = err.message;
        }
    } 

    return {
        post,
        error,
        load
    }
}

export default getPost;