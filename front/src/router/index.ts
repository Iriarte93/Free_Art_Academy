import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'

async function isAuthenticated(): Promise<boolean> {
  try {
    // Solicitud en el auth.service para validar la sesión
    const response = await fetch('http://localhost:3000/auth/validate', {
      method: 'GET',
      credentials: 'include'
    });

    
    if (response.ok) {//Aquí se espera un 200 si está todo ok
      const data = await response.json();
      return data.success === true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error durante la validación de la sesión:', error);
    return false; // Si hay un error en la comunicación, asumir no autenticado
  }
}

// RUTAS VUE-ROUTER
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/user', //PROTEGER!
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    meta: { requiresAuth: true } // Ruta protegida
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/courses',//PROTEGER!!
    name: 'courses',
    component: () => import('@/views/CoursesView.vue'),
    meta: { requiresAuth: true }
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// GUARD para las rutas
router.beforeEach(async (to, from, next) => {
  // Si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    const authenticated = await isAuthenticated(); // Verificar la autenticación

    if (authenticated) {
      // Usuario autenticado, permitir el acceso
      next();
    } else {
      // Usuario no autenticado, redirigir a la página de login
      next({ name: 'login' });
    }
  } else {
    // Si la ruta no requiere autenticación, continuar
    next();
  }
})

export default router
