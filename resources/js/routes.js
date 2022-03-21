import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import Register from './auth/Register'
import Participants from './pages/Participants'

const routes = [
  {
    path: '/',
    component: ExampleComponent,
    name: 'home'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/participants',
    component: Participants,
    name: 'participants'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;