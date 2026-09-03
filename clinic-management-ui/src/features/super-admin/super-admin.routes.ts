import type { RouteRecordRaw } from 'vue-router';
import AppMainLayout from '@/shared/layouts/AppMainLayout.vue';
import ApplicationManagement from './pages/ApplicationManagement.vue';

export const superAdminRoutes: RouteRecordRaw = {
	path: '/super-admin',
	component: AppMainLayout,
	meta: {
		requiresAuth: true,
	},
	children: [
		{
			path: 'application-management',
			name: 'application-management',
			component: ApplicationManagement,
		},
	],
}
