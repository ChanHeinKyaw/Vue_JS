<template>
    <div v-if="error">
      {{ error }}
    </div>
    <h1>Post Detail</h1>
    <div v-if="post">
        {{ post }}
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost";
export default {
  components: { Spinner },
    props: ['id'],
    setup (props){
        let {post,error,load} = getPost(props.id);

        load();
        
        return {
            post,
            error
        }
    }
}
</script>