
# MediLink - Hospital Management System

An sophisticated hospital management system for hospitals to manage users and much more..!!



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in ./server directory

`CONNECTION_STRING` of MongoDB database

`TOKEN_KEY` for JWT

## Features

- 3 highly detailed dashboards for doctor, patient and staff.
- Feature to book appointments with doctors.
- Detailed patient's report generation by doctor.
- Add and edit medicines in inventory by staff.
- Bcrypt for hashing passwords and JWT for authentication.
- Redux for efficient state management.
- Search functionalities for doctor,patient and staff.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Atharvan2004/hospital-management-system
```

Go to the project directory

```bash
  cd ./server
```

Install dependencies

```bash
  npm i && cd client && npm i
```

Start the server

```bash
  npm run dev
```
In a new terminal start the client

```bash
  cd client && npm run dev
```
View locally at http://localhost:5173

## Deployment

Check out deployed project on

```bash
  https://hospital-management-system-5rfq.onrender.com/
```


## Heads Up

#### Create new users by logging as an admin, if not possible then remove validateAdmin middleware in ./server/routes/adminRoutes file
