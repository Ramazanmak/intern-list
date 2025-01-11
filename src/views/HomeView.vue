<script setup>
  import {ref} from 'vue'

  import MyHeader from "../components/Common/CommonHeader.vue"
  import MyList from "../components/Home/InternList.vue"
  import ToolPanel from '../components/Home/ToolPanel.vue';
  import MyFooter from '../components/Common/CommonFooter.vue';
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