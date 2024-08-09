import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Luxury from '../pages/Luxury.vue'
import Casino from '../pages/Casino.vue'
import Budget from '../pages/Budget.vue'
import Boutique from '../pages/Boutique.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '../pages/Privacy.vue'
import Terms from '../pages/Terms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/luxury',
      name: 'luxury',
      component: Luxury
    },
    {
      path: '/casino',
      name: 'casino',
      component: Casino
    },
    {
      path: '/budget',
      name: 'budget',
      component: Budget
    },
    {
      path: '/boutique',
      name: 'boutique',
      component: Boutique
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
  ]
})

export default router
