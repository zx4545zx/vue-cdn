import Home from './pages/Home.js'
import About from './pages/About.js'
import Register from './pages/Register.js'
import User from './pages/User.js'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/users/:id', component: User },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = Vue.createApp({
  data() {
    return {
      id: 1
    }
  }
})

app.use(router)
app.mount('#app')