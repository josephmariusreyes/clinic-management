## Goal
- Implement login functionality

## Todos

- Create a component login-form component under components folder in users feature module
    - Move the login form UI elements here

- Enhance UI of the login form
    - Use spartan-ui input component
    - Use spartan-ui button component
    - Add forgot password link
    - Add register link > This will redirect to `http://localhost:4200/user/register` 
    - Make login form look professional, 
    - Button color should be light green this will be the theme color of the application

- in login.component.ts under container
    - Define here the reactive form for the login form
    - email field is required
    - email field needs to be a valid email
    - pass the reactive form to the login-form component
        - logic should be in login.component under the container
        - login-form component will only communicate via output events
        - on submit of the form just alert the values inputted for now

## completed

- Added `LoginFormComponent` under `features/users/components/login-form` with Spartan input and button directives.
- Moved the login form UI into the new component and added email/password validation messages.
- Added forgot-password and register links, with registration routed to `/user/register`.
- Added a light-green sign-in button treatment and improved spacing, hierarchy, and accessibility attributes.
- Added the reactive form to `LoginComponent` with required and email validators.
- Connected the child submit output to the container, which marks invalid controls or alerts submitted values.
- Registered the new component and `ReactiveFormsModule` in `UsersModule`.
