<script setup>
    import {ref} from 'vue'
    import { RouterLink, useRoute } from 'vue-router';
    defineProps([
        'name',
        'about',
        'skills',
        'direction',
        'id'
    ])

</script>

<template>

    <article>
        <div class="card-name-direction">
            <h2> {{ name }}</h2>
            <h3> {{ direction }}</h3>
            <router-link :to="{name:'intern', params:{ userId:id }}">
                <button class="more"> Подробнее </button>
            </router-link>
        </div>
        <div class="card-skills">
            <h3> Навыки:</h3>
            <ul>
                <li v-for="skill in skills" :key="skill"> {{ skill }}</li>
            </ul>
        </div>
    </article>
</template>

<style scoped>
    article{
        display:flex;
        flex-flow: row nowrap;
        justify-content:space-between;
        width:70%;
        border:1px solid rgb(59, 43, 102);
        border-radius:15px;
        margin:0 0 10px;

    }
    article:hover{
        box-shadow:0 0 20px -3px rgb(59, 43, 102);
        transition-duration:250ms;
    }

    .card-name-direction{
        background-color: rgb(59, 43, 102);
        color:#fff;
        border-radius: 15px;
        text-align:left;
        border-right:1px solid rgb(59, 43, 102);
        padding:20px;
        width:75%;
    }
    .card-name-direction h3{
        color:orange
    }
    .more{
        background-color: #fff;
        color:rgb(59, 43, 102);
        padding:10px;
        border-radius:5px;
    }
    .more:hover{
        color:#fff;
        background-color: orange;
        transition-duration:250ms;
    }

    .card-skills{
        width:25%;
        padding:20px;
        text-align:center;
    }
    ul{
        list-style-type:none;
        text-align:left;
        padding:0;
        line-height:12  0%;
        display:flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    li{
        background-color:rgb(211, 207, 207);
        color:rgb(59, 43, 102);
        margin:2px 5px;
        padding:3px;
    }
</style>