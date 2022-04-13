<template>
 <!--写博文-->
      <el-input
        style="width:90%"
        :show-word-limit="true"
        maxlength="100"
        placeholder="请输入博文标题，最多100字"
        v-model="title"
      />
 <v-md-editor v-model="body" height="400px"></v-md-editor>
 <div>
     <p>标签(回车添加标签)</p>
          <el-input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" style="width:90%" /> 
 </div>
  
      <el-button type="primary" plain @click="handleSubmit"> 发布文章 </el-button>
  <!-- <div class="create">
      <form @submit.prevent="handleSubmit">
          <label for="title">标题</label>
          <input type="text" v-model="title" required>
          <br/>
          <label for="picUrl">图片</label>
           <textarea v-model="picUrl"></textarea>
           <br/>
          <label for="body">内容</label>
           <textarea v-model="body">

           </textarea>
           <br/>
           <label for="tag">标签(回车添加标签)</label>
          <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" > 
   
        <div v-for="tag in tags" :key="tag" class="pill">#{{tag}}</div>
          <button>添加</button>
      </form> 
  </div>-->
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
const title =ref("");
const body =ref("");
const picUrl =ref("")
const tags =ref([]);
const tag =ref("");
const router =useRouter()
// 判断标签没有空格和重复的选项
const handleKeydown=()=>{
    if (!tags.value.includes(tag.value)) {
        tag.value=tag.value.replace(/\s/g,'')
        tags.value.push(tag.value)
    }
    tag.value=''
};
// 发布文章
const handleSubmit=async()=>{
    // 准备数据 把数据提交到接口
    const post={
        id:Math.floor(Math.random() * 10000),//生成随机的id
        title:title.value,
        body:body.value,
        tags:tags.value,
        picUrl:picUrl.value
    }
    // 发起请求
   const data= await axios.post(' http://localhost:3033/posts',post);
    // 等于201表示创建成功
    if(data.status ===201){
        router.push('/')
    }
}

</script>

<style scoped>
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
/* .vuepress-markdown-body h1{ font-size: 28px; }
.vuepress-markdown-body h2{ font-size: 26px; }
.vuepress-markdown-body h3{ font-size: 24px; }
.vuepress-markdown-body h4{ font-size: 22px; }
.vuepress-markdown-body h5{ font-size: 20px; }
.vuepress-markdown-body:not(.custom){padding: 5px 10px!important;} */
</style>