## Todo

Here in src\app\app.module.ts
- I dont want the license to be statically inputted in app.module.ts
- Move this to enviroment.ts
- For the enviroment.prod.ts also put the same value there since i plan to use the same license in prod

## Completed

- Moved the PrimeNG license value out of `src\app\app.module.ts`.
- Added `primeNgLicense` to `src\enviroments\enviroment.ts`.
- Added the same `primeNgLicense` value to `src\enviroments\environment.prod.ts`.
- Updated `angular.json` production build configuration to replace `enviroment.ts` with `environment.prod.ts`.
