## Goal
- Initial implementation of the register page
- Similar to how we implement login form `ai\done\login-page-implementation.md` 

## Todos

- Create the register form reactiveform in 'src\app\features\users\containers\register\register.component.ts'
    - Email
    ( required )
    ( needs to be a valid email )
    - Password
    ( required )
    ( needs to atleast 1 capital letter, 1 special charter and 1 number )
    - Confirm password
    ( needs to match the password )
    ( while typing the comparison of password should happen )

- Create a component register-form under components folder in users feature module, this will be a dumb component only, pass the reactive register form here, this component will communicate via ouput event
    - Use the more modern input and output NOT the legacy @Input and @Output
    - Do this also for `src\app\features\users\components\login-form\login-form.component.ts`

- The spacing of the fields and button should be similar that of the login form

- on submit alert the fields typed in

## completed

- Added a container-owned reactive registration form with required email validation, password-strength validation, and live password confirmation matching.
- Added the presentational `RegisterFormComponent`, wired through modern `input` and `output` APIs, with matching login-form spacing, accessible validation feedback, and sign-in navigation.
- Updated `LoginFormComponent` from legacy `@Input` and `@Output` decorators to the modern signal-based APIs.
- Registered the new form component in `UsersModule`; valid submissions now alert the entered registration fields.
