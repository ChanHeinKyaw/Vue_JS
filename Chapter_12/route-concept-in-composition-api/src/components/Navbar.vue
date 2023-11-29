<template>
    <nav class="nav">
        <h1>Bloggy Vue</h1>
        <ul class="list">
            <router-link :to="{name: 'home'}">
                <li>Home</li>
            </router-link>
            <router-link :to="{name: 'create'}">
                <li>Create</li>
            </router-link> 
        </ul>
    </nav>
</template>

<script setup>

</script>

<style scoped>
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 30px;
    }

    a[href]{
        text-decoration: none;
    }

    .list{
        display: flex;
    }

    li{
        list-style: none;
        padding: 5px 10px;
    }
</style>