<!--setup 钩子函数语法
  components: { PostList },糖-->
<script setup>
import navbar from './components/navbar.vue'
</script>

<template>
<navbar/>
<router-view></router-view>
</template>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  color: black;
}
</style>
