import type { RouteRecordRaw } from 'vue-router';
import PublicLayout from '@/shared/layouts/PublicLayout.vue';
import AppMainLayout from '@/shared/layouts/AppMainLayout.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import UserDetails from './pages/UserDetails.vue';
import UserListing from './pages/UserListing.vue';

export const userAccountsRoutes: RouteRecordRaw = {
	path: '/user-accounts',
	children: [
		//public routes
		{
			path: '',
			redirect: {
				name: 'login',
			},
		},
		{
			path: '',
			component: PublicLayout,
			meta: {
				guestOnly: true
			},
			children: [
				{
					path: 'login',
					name: 'login',
					component: LoginPage,
				},
				{
					path: 'register',
					name: 'register',
					component: RegisterPage,
				},
			],
		},
		//logged in routes
		{
			path: '',
			component: AppMainLayout,
			meta: {
				requiresAuth: true,
			},
			children: [
				{
					path: 'users',
					name: 'user-listing',
					component: UserListing,
				},
				{
					path: 'users/:userId',
					name: 'user-details',
					component: UserDetails,
				},
			],
		},
	],
}
