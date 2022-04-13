<template>
  <!-- <div>{{postWithTag}}</div> -->
  <div class="tag">
      <div v-if="posts.length">
          <PostList :posts="postWithTag"/>
      </div>
      <TagCloud :posts="posts"/>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import getPosts from '../composibles/getPosts'
import {computed} from 'vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
const route = useRoute()
const {posts,load} =getPosts()
load()

console.log(route.params.item);
// 只展示拥有标签的属性
// filter 过滤 自定义p 判断传递数据的p 标签是否包含
const postWithTag =computed(()=>{
    return posts.value.filter((p)=>p.tags.includes(route.params.item))
})
</script>

<style scoped>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>