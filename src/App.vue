<script setup>
  import {ref} from 'vue'

  import HomeView from './views/HomeView.vue';
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
  main{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
</style>
