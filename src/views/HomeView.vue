<script setup>
  import {ref} from 'vue'

  import CommonHeader from "../components/common/CommonHeader.vue";
  import InternList from "../components/home/InternList.vue";
  import ToolPanel from '../components/home/ToolPanel.vue';
  import CommonFooter from '../components/common/CommonFooter.vue';
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