import HomeView from './views/HomeView.vue'
import InternView from './views/InternView.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path:'/',
        name:'home',
        component:HomeView,
    },
    {
        path:'/intern/:userId',
        name:'intern',
        component:InternView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router