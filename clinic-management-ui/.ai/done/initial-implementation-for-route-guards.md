## Goal
- To create an initial implementation of route guard

## Todos
- Under `app/core/route-guard` create a route guard name it for now dummyGuard, this will just check if there is a query parameter auth={value}, now the {value} can be doctor, clinic-admin, super-admin

- Make use of this route guard in the following feature modules
    - doctors
        - allow if auth value is
        -- doctor
        -- clinic-admin
        -- super-admin

    - patients
        - allow if auth value is
        -- doctor
        -- clinic-admin
        -- super-admin

    - super-admin
    - allow if auth value is
        -- super-admin

## Completed

- Added `DummyGuard` under `src/app/core/route-guard`. It allows navigation only when
  the `auth` query parameter is present and matches the route's allowed roles.
- Protected doctors and patients list/detail routes for `doctor`, `clinic-admin`, and
  `super-admin`.
- Protected the super-admin dashboard route for `super-admin` only.
