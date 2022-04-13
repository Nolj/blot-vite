import axios from 'axios'
import { ref } from 'vue'
const getPost = (id) => {
    // 获取单条数据，所以是一个对象形式
    const post = ref({})
    const load = async () => {
        try {
            let {data} = await axios('http://localhost:3033/posts/'+id)
            post.value = data
        } catch (error) {
            console.log(error);
        }
    }
    return { post, load }
}

export default getPost