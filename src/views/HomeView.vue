<script setup>
  import {ref} from 'vue'

  import CommonHeader from "../components/Common/CommonHeader.vue"
  import InternList from "../components/Home/InternList.vue"
  import ToolPanel from '../components/Home/ToolPanel.vue';
  import CommonFooter from '../components/Common/CommonFooter.vue';
</script>

<template>
  <CommonHeader></CommonHeader>
  <main>
    <InternList></InternList>
    <ToolPanel></ToolPanel>
  </main>
  <CommonFooter></CommonFooter>
</template>

<style scoped>
  main{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
</style>