<script setup>
</script>

<template>
    <header>
        <h1> Список <span style="color:orange">стажёров</span></h1>
        <img src="../assets/imgs/loodsen-logo-modern.svg">
    </header>
</template>

<style scoped>
    header{
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items: flex-start;
        background-color:rgb(59, 43, 102);
        padding:1em;
    }
    h1{
        margin:auto;
        color:#fff;
        font-size:5vh;
    }
    img{
        width:15%;
        display:block;
        position:absolute;
        right:20px;
        top:10px;
    }
</style>