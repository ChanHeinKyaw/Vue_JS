<template>
    <div v-for="post in posts" :key="post">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost'
export default {
    components: { SinglePost },
    props: ["posts"],
    setup(){
        onMounted(() => console.log("Component Mounted!"));
        onUnmounted(() => console.log("Component Unmounted!"));
        onUpdated(() => console.log("Component onUpdated!"));
    }
}
</script>