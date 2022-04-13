<template>
  <div class="tag-cloud">
      <h3>标签</h3>
      <div v-for="item in tags" :key="item">
        <router-link :to="{name:'Tag',params:{item}}"> #{{item}}
        </router-link>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
// 把posts的内容追加到tagSet在赋给tags
const props=defineProps({
    posts:Array,
})
const tags =ref([]);
// 使用new set 可以避免标签重复
const tagSet=new Set();
// forEach() 遍历
props.posts.forEach((item)=>{//遍历得到每个item
    item.tags.forEach((tag)=>tagSet.add(tag));
})
tags.value=[...tagSet];
</script>

<style scoped>
.tag-cloud {
    padding: 10px;
}
.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
.tag-cloud div {
    display: inline-block;
    padding: 10px;
}
.tag-cloud a {
    color: #ccc;
    text-decoration: none;
}
.tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
}
</style>