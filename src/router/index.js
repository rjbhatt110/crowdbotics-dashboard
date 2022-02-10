import Router from 'vue-router'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import CreateApp from '../views/CreateApp'
import AppDetails from '../views/AppDetails'

// import store from '../store'
import tokenService from "../services/tokenService";


const ifNotAuthenticated = (to, from, next) => {
    if (!tokenService.getToken()) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (tokenService.getToken()) {
        next()
        return
    }
    next('/login')
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: ifAuthenticated,

        },
        {
            path: '/details',
            name: 'AppDetails',
            component: AppDetails,
            beforeEnter: ifAuthenticated,

        },
        {
            path: '/createApp',
            name: 'CreateApp',
            component: CreateApp,
            props: true,
            beforeEnter: ifAuthenticated,

        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: ifNotAuthenticated,

        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup,
            beforeEnter: ifNotAuthenticated,

        }
    ]
})