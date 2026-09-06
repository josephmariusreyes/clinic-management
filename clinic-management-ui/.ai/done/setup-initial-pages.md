## Goal
- Create the initial files and routes for the different pages of the application

## Instruction
- Only create a page component for now, similar how I created "src\features\users-accounts\pages\LoginPage.vue"

## Todos

> can you make use of the canAccessRoute I created, for now do this logic check if there is a parameter in the URL auth=true then we are authenticated, if none the return false only do this checking only if the requiresAuth: true meta is in the 

> Hook up the canAccessRoute to the routes for authentication

> Create the following pages and routes 

- user-accounts
-- RegisterPage
-- UserListing
-- UserDetails

- super-admin
-- ApplicationManagement

- patients
-- PatientListing
-- PatientDetails
-- CreatePatientRecord

- consultation
-- ConsultationListing

## Completed

- Added initial page components for user accounts, super admin, patients, and consultation.
- Added route modules for super admin, patients, and consultation, and completed the user accounts routes.
- Hooked up `canAccessRoute` in the main router.
- Updated `canAccessRoute` to only check routes with `requiresAuth: true` and allow access when the URL includes `auth=true`.
