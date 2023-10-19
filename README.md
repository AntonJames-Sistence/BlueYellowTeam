# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


====================================================================================================================

# FIRST OFF, WHY USE DOCKER? WHEN DOES IT MAKE SENSE TO USE IT?
- Example: If you are a frontend-focused engineer, and you don't want to worry about setting up a backend you want to request from, just spin up the docker container and don't worry about dependencies or using the right version of tools!



# PROJECT

### Setup notes (a reminder for setting up future projects):
- in order to dockerize and hit into the docker port from the outside, add the vite --host flag to your run script, vite limited the standard run to localhost for security reasons, --host enables external access (from outside the docker container and network IP access as well).
- if you see it being run on 5174 instead of 5173, it might be due to having an instance of vite currently running.
source: https://github.com/vitejs/vite/discussions/3396


### Running with docker compose(recommended):
from project directory with the compose.yaml file:
    docker-compose up -d
it will spin up both the frontend and backend in their respective ports.



### Starting manually without docker compose
head to directory with the Dockerfile you want to build.
    docker build . -t <tagname>

manually running docker instances:
frontend:
    docker run -it -p 5173:5173 frontend

backend:
    docker run -it -p 3000:3000 backend


### .env files:
frontend:
- Vite comes with dotenv included out of the box
- You need to prefix environment variables with `VITE_{environment variable name}` for vite to recognize the env variable.
- does not need an import, instead you call it in any part of the frontend code with `import.meta.env.{VITE_variable name}`
backend:
- dotenv library added via npm
- does not need VITE_ prefix to be recognized, just `import dotenv/config` to top of file
- access with `process.env.{environment variable name}`
    

### BACKEND WORKFLOW:
routes --> services --> models

routes:
Will be added to app.js file as middleware:
    const authRouter = require('./routes/authentication')
    ...
    ...
    ...
    app.use("/auth", authRouter)
- module.exports from your routes/auth folder