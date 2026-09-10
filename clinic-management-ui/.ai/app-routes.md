## App Routes

Base URL: `http://localhost:4200`

## URLs

Login
- `http://localhost:4200/`
	- Redirects to `/user/login`
- `http://localhost:4200/login`
	- Redirects to `/user/login`
- `http://localhost:4200/user/login`
	- Login page

===

Register
- `http://localhost:4200/register`
	- Redirects to `/user/register`
- `http://localhost:4200/user/register`
	- Registration page

===

- `http://localhost:4200/doctors`
	- Doctors list

- `http://localhost:4200/doctors/:id`
	- Doctor details; replace `:id` with a doctor ID, for example `/doctors/1`

===

- `http://localhost:4200/patients`
	- Patients list

- `http://localhost:4200/patients/:id`
	- Patient details; replace `:id` with a patient ID, for example `/patients/1`

===

- `http://localhost:4200/super-admin`
	- Super admin dashboard