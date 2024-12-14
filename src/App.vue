<script setup>
  import {ref} from 'vue'
  import MyHeader from "./components/MyHeader.vue"
  import MyList from "./components/MyList.vue"
  import ToolPanel from './components/ToolPanel.vue';
</script>

<template>
  <MyHeader></MyHeader>
  <main>

  </main>
</template>

<style scoped>
  main{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
</style>
