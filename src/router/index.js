import Router from 'vue-router'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import CreateApp from '../views/CreateApp'
import AppDetails from '../views/AppDetails'

// import store from '../store'
// import JwtService from "../services/JwtService";


// const ifNotAuthenticated = (to, from, next) => {
//     if (!JwtService.getToken()) {
//         next()
//         return
//     }
//     next('/')
// }

// const ifAuthenticated = (to, from, next) => {
//     if (JwtService.getToken()) {
//         next()
//         return
//     }
//     next('/login')
// }

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            // beforeEnter: ifAuthenticated,

        },
        {
            path: '/details',
            name: 'details',
            component: AppDetails,
            // beforeEnter: ifAuthenticated,

        },
        {
            path: '/createApp',
            name: 'CreateApp',
            component: CreateApp,
            // beforeEnter: ifAuthenticated,

        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            // beforeEnter: ifNotAuthenticated,

        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
            // beforeEnter: ifNotAuthenticated,

        }
    ]
})