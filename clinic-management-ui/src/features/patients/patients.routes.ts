import type { RouteRecordRaw } from 'vue-router';
import AppMainLayout from '@/shared/layouts/AppMainLayout.vue';
import CreatePatientRecord from './pages/CreatePatientRecord.vue';
import PatientDetails from './pages/PatientDetails.vue';
import PatientListing from './pages/PatientListing.vue';

export const patientsRoutes: RouteRecordRaw = {
	path: '/patients',
	component: AppMainLayout,
	meta: {
		requiresAuth: true,
	},
	children: [
		{
			path: '',
			name: 'patient-listing',
			component: PatientListing,
		},
		{
			path: 'create',
			name: 'create-patient-record',
			component: CreatePatientRecord,
		},
		{
			path: ':patientId',
			name: 'patient-details',
			component: PatientDetails,
		},
	],
}
