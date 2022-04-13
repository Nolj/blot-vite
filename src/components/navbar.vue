<script setup>
import {computed,ref} from 'vue'
import getPosts from '../composibles/getPosts'
import PostList from '../components/PostList.vue'

const {posts,load} =getPosts()
load()

const search =ref("")
// const matchNames =computed(()=>{
//     return posts.value.filter((p)=>p.body.includes(search.value))
// })
</script>

<template>
  <header>
    <div class="top">
      <h1>LI_木子总结</h1>
    </div>
    
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/create">投稿创建</router-link>
    </nav>
  </header>
</template>

<style scoped>

.top {
  position: relative;
width: 100%;
height: 100px;
}
h1 {
  position: absolute;
  left: 50px;
  bottom: 10px;
  color: rgb(25, 25, 26);
}
nav {
  float: right;
}
a {
  text-decoration: none;
  color: darkgray;
  padding: 0 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
}
input {
  width: 300px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>
