import type { RouteRecordRaw } from 'vue-router';
import AppMainLayout from '@/shared/layouts/AppMainLayout.vue';
import ConsultationListing from './pages/ConsultationListing.vue';

export const consultationRoutes: RouteRecordRaw = {
	path: '/consultation',
	component: AppMainLayout,
	meta: {
		requiresAuth: true,
	},
	children: [
		{
			path: '',
			name: 'consultation-listing',
			component: ConsultationListing,
		},
	],
}
