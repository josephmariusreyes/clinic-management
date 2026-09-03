import { createRouter, createWebHistory } from 'vue-router'
import { canAccessRoute } from '@/core/guards/app.guard';
import { consultationRoutes } from '@/features/consultation/consultation.routes';
import { patientsRoutes } from '@/features/patients/patients.routes';
import { superAdminRoutes } from '@/features/super-admin/super-admin.routes';
import { userAccountsRoutes } from '@/features/users-accounts/user-accounts.routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			redirect: '/user-accounts/login',
		},
    userAccountsRoutes,
    superAdminRoutes,
    patientsRoutes,
    consultationRoutes,
  ]
})

router.beforeEach((to) => canAccessRoute(to))

export default router
