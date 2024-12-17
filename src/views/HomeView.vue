<script setup>
  import {ref} from 'vue'

  import MyHeader from "../components/MyHeader.vue"
  import MyList from "../components/MyList.vue"
  import ToolPanel from '../components/ToolPanel.vue';
  import MyFooter from '../components/MyFooter.vue';
</script>

<template>
  <MyHeader></MyHeader>
  <main>
    <MyList></MyList>
    <ToolPanel></ToolPanel>
  </main>
  <MyFooter></MyFooter>
</template>

<style scoped>
  main{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
</style>