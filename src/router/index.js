import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Contact from '../views/Contact.vue';
import Generator from '../views/Generator.vue';
import Profil from '../views/Profil.vue';
import Conditions from '../views/Conditions.vue';
import Mentions from '../views/Mentions.vue';
import Sponsors from '../views/Sponsors.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/generator', name: 'Generator', component: Generator },
    { path: '/profil', name: 'Profil', component: Profil },
    { path: '/conditions', name: 'Conditions', component: Conditions },
    { path: '/mentions', name: 'Mentions', component: Mentions },
    { path: '/sponsors', name: 'Sponsors', component: Sponsors },
  ]
})

export default router
