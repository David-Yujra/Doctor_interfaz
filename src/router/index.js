import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Estadisticas from '../components/Estadisticas.vue'
import Doctores from '../components/Doctores.vue'
import ClientesEspera from '../components/ClientesEspera.vue'
import Inicio from '../components/Inicio.vue'
import Login from '../components/Login.vue'
import LoginPaciente from '../components/LoginPaciente.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/Estadisticas',
        name: 'Estadisticas',
        component: Estadisticas
    },
    {
        path: '/Doctores',
        name: 'Doctores',
        component: Doctores
    },
    {
        path: '/ClientesEspera',
        name: 'ClientesEspera',
        component: ClientesEspera
    },
    {
        path: '/Inicio',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/LoginPaciente',
        name: 'LoginPaciente',
        component: LoginPaciente
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router