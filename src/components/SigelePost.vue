<script setup>
import {computed} from 'vue'
const posts=defineProps({
    item:Object,
})
// const snippet =computed(()=>{
//   // 超过一百个字符就...显示
//   return posts.item.body.substring(0,100) +'...'
// })
</script>

<template>
  <div class="single">
    <router-link :to="{name:'datail',params:{id:item.id}}">
      <h3>{{item.title}}</h3>
    </router-link>
       <!-- <p>{{snippet}}</p> -->
       <p>{{item.body}}</p>
      <span v-for="tag in posts.item.tags" key="tag.index" class="pill">{{tag}}</span>
  </div>
</template>


<style>
.single {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.single h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  width: 100%;
}
.single h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: darkkhaki;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
}
.single p {
  height: 50px;
  overflow: hidden;
  /* 用省略来表示未显示的 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.pill {
   display: inline-block;
    margin: 10px 10px 0 0;
    color: #4444;
    background: #ddd;
    padding: 8px;
    border: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>