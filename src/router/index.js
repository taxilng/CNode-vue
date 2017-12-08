/**
 * Created by wisdom on 2017/12/4.
 */
import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import content from '@/components/content'

const home = (resolve)=>{
    return require.ensure([],()=>{
        resolve(require("@/components/home"))
    })
}
const content = (resolve)=>{
    return require.ensure([],()=>{
        resolve(require("@/components/content"))
    })
}

// const home = (resolve)=>{
//     return import("@/components/home")
// }
// const content = (resolve)=>{
//     return import("@/components/content")
// }

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: home
        },
        {
            path:'/content/:id',
            name:'content',
            component: content
        }
    ]
})

export default router