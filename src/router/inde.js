import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import listaProductos from "@/views/listaProductos.vue"
const routes =[
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/productos',
        name: 'productos',
        component: listaProductos
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
})
export default router