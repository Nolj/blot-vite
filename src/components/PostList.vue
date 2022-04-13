<template>
<div class="post-list">
     <div class="post" v-for="item in posts" :key="item.id">
         <SigelePost :item='item'/>
     </div>
</div>
</template>

<script setup>
import SigelePost from '../components/SigelePost.vue';
import {defineProps} from 'vue'
defineProps({
    posts:Array,
})
</script>


<style>

</style>