import Home from './pages/Home.js'
import About from './pages/About.js'
import Register from './pages/Register.js'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/register', component: Register },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = Vue.createApp({})

app.use(router)
app.mount('#app')