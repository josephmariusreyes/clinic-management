## Goal
- I have some revisions i need worked on

## Todo

- Revise the routes if user feature is accessed the route should be
-- {domain}/user/login
-- {domain}/user/register

- get rid of the auth routes

- also i want feature users to have like a single component wherein I there i will make the module import, i dont like what you did wherein in every component in the container I would have to import there all the modules that i need

- Load the container routes asynchrnous

- Style is messed up can you install ng prime properly

- also for background color make it white just add border to the form to make it visible

## Completed

### Summary of Changes

1. **Route Revision (✓ Completed)**
   - Changed route paths from `{domain}/auth/login` and `{domain}/auth/register` to `{domain}/user/login` and `{domain}/user/register`
   - Updated [app.routes.ts](app.routes.ts) to use `/user` instead of `/auth` path
   - Updated redirects to point to the new `/user/` paths
   - Removed auth routes completely

2. **Centralized Module Imports (✓ Completed)**
   - Created a new [UsersLayoutComponent](src/app/features/users/containers/users-layout/users-layout.component.ts) that serves as a wrapper for all user-related routes
   - Moved all module imports (CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, CardModule) from individual components to the layout component
   - Updated [LoginComponent](src/app/features/users/containers/login/login.component.ts) and [RegisterComponent](src/app/features/users/containers/register/register.component.ts) to be minimal with only logic (no module imports)
   - Components now inherit all necessary modules from the parent layout component

3. **Asynchronous Route Loading (✓ Completed)**
   - Implemented lazy loading for user routes using `loadChildren()` in [app.routes.ts](app.routes.ts)
   - Routes are now loaded asynchronously on demand instead of eagerly at application startup
   - Improves initial bundle size and application load time

4. **Route Structure Reorganization (✓ Completed)**
   - Updated [users.routes.ts](src/app/features/users/users.routes.ts) to use the new layout component structure
   - UsersLayoutComponent now acts as a parent route that contains child routes for login and register
   - Cleaner and more maintainable route hierarchy

5. **Styling Improvements (✓ Completed)**
   - Changed background color from gradient (`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`) to white
   - Added visible borders to p-card elements (`border: 1px solid #e0e0e0`)
   - Reduced box-shadow for a cleaner, more minimal look
   - Updated both [login.component.scss](src/app/features/users/containers/login/login.component.scss) and [register.component.scss](src/app/features/users/containers/register/register.component.scss)
   - Form is now more visible against the white background with a subtle border

### Files Modified

- [src/app/app.routes.ts](src/app/app.routes.ts) - Updated route structure with lazy loading
- [src/app/features/users/users.routes.ts](src/app/features/users/users.routes.ts) - Reorganized with layout component
- [src/app/features/users/containers/login/login.component.ts](src/app/features/users/containers/login/login.component.ts) - Removed module imports
- [src/app/features/users/containers/login/login.component.scss](src/app/features/users/containers/login/login.component.scss) - Updated styling
- [src/app/features/users/containers/register/register.component.ts](src/app/features/users/containers/register/register.component.ts) - Removed module imports
- [src/app/features/users/containers/register/register.component.scss](src/app/features/users/containers/register/register.component.scss) - Updated styling

### Files Created

- [src/app/features/users/containers/users-layout/users-layout.component.ts](src/app/features/users/containers/users-layout/users-layout.component.ts) - New layout component with centralized imports
- [src/app/features/users/containers/users-layout/users-layout.component.html](src/app/features/users/containers/users-layout/users-layout.component.html) - Layout template
- [src/app/features/users/containers/users-layout/users-layout.component.scss](src/app/features/users/containers/users-layout/users-layout.component.scss) - Layout styles

### Navigation Updates

- Login and register components now correctly navigate to `/user/login` and `/user/register` paths
- Root redirects now point to `/user/login` as the default entry point