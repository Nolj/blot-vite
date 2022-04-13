<template>
<div class="post" v-if="post">
    <h3>{{post.title}}</h3>
    <div class="main">
       <!-- <p>{{ post.body}}</p>  -->
       <v-md-preview :text="post.body"></v-md-preview>
       <!-- <v-md-preview-html :html="post.body" preview-class="vuepress-markdown-body"></v-md-preview-html> -->
    </div>
    
</div>
<div v-else><Spinner/></div>
</template>

<script setup>
import getPost from '../composibles/getPost.js'
import Spinner from '../components/Spinner.vue'
const props=defineProps({
    id:Number,
})
const {post,load} =getPost(props.id)
load()
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
</style>