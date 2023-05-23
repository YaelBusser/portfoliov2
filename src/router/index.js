import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "@/views/Accueil"

export const isLoading = ref(true)
const dtLoader = 500 // minimum display time
let debounceLoading = 0

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/portfolio",
    name: "MonPortfolio",
    component: () => import(/* webpackChunkName: "about" */ "@/views/MonPortfolio.vue")
  },
  {
    path: "/aPropos",
    name: "Moi",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Moi.vue")
  },
  {
    path: "/competences",
    name: "Competences",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Competences.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Contact.vue")
  },
  {
    path: "/mentions_legales",
    name: "MentionsLegales",
    component: () => import(/* webpackChunkName: "about" */ "@/views/MentionsLegales.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.clearTimeout(debounceLoading)
  isLoading.value = true
})
router.afterEach(() => {
  window.clearTimeout(debounceLoading)
  debounceLoading = window.setTimeout(() => (isLoading.value = false), dtLoader)
})

export default router