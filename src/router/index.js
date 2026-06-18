import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Instructors from '../views/Instructors.vue'
import Faq from '../views/Faq.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login, meta: { hideShell: true } },
  { path: '/home', name: 'Home', component: Home },
  { path: '/courses', name: 'Courses', component: Courses },
  {
    path: '/course-enroll/:slug',
    name: 'CourseDetail',
    component: CourseDetail,
    props: true,
    meta: { hideShell: true }
  },

  { path: '/instructors', name: 'Instructors', component: Instructors },
  { path: '/faq', name: 'FAQ', component: Faq },
  { path: '/contact', name: 'Contact', component: Contact },
  // Catch-all
  { path: '/:pathMatch(.*)*', redirect: '/login' },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: { hideShell: true }
  }
  // new routes can be added here


]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
