import axios from 'axios'
import { ref } from 'vue'
const getPosts = () => {
    // 使用json-server 模拟api数据从后台获取
    const posts = ref([
        // {title:"中国牛逼",body:'中国梦',id:1},
        // {title:"中国合伙人",body:'中国梦',id:2}
    ])
    const load = async () => {
        try {
            let {data} = await axios('http://localhost:3033/posts')
            posts.value = data
        } catch (error) {
            console.log(error);
        }
    }
    return { posts, load }
}

export default getPosts