import {createRouter,createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import datail from '../views/datail.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import WordPress from '../views/WordPress.vue'
const routes=[
    {path:"/",name:'Home',component:Home},
    {path:'/datail/:id',name:"datail",component:datail,props:true},
    {path:"/create",name:'Create',component:Create},
    // :tag 根据不同的标签进行显示
    {path:"/tags/:item",name:'Tag',component:Tag},
    {path:"/wordpress",name:'WordPress',component:WordPress}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;