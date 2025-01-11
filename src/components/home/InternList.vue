<script setup>
import InternCard from './InternCard.vue';
import {ref} from 'vue'
// Загрузили данные о стажёрах из локального JSON-файла - временная мера
import internList from '../../assets/intern-list.json' with {type:"json"};

</script>

<template>
    <section>
        <InternCard v-for="intern in internList" :key="intern.id"
            :name="intern.name"
            :skills="intern.skills"
            :about="intern.about"
            :direction="intern.direction"
            :id="intern.id"
        ></InternCard>
    </section>
</template>

<style scoped>
    section{
        width:75%;
        display:flex;
        flex-flow:column;
        justify-content:space-around;
        align-items:center;
        padding:50px;
    }
</style>
