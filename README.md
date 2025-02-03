# Epignosis Assessnment

This is the public repository addresed to Epignosis for my interview process.

Author: Konstantinos Tsirakos (ktsirakos@hotmail.com, +306944157425)

Tech stack: Vue 3 (Composition API), Tailwind 4, Vue Router, Pinia (state management)

## Project setup

Download source code using 
```bash
git clone git@github.com:Ktsirakos/epignosis-task.git
```

Install dependencies
```bash
cd epignosis-task
npm install
```

Run project
```bash
npm run dev
```

Navigate to **https://localhost:5173** to checkout the full functionality!

## Features included
- Get a general or programming joke
- Save and rate a joke
- Remove a joke
- Check all saved jokes
- Filter saved jokes based on
    - Rating
    - Text (setup and punchline combined)
    - Alphabeticaly
- Display saved joke list details
    - Total saved jokes
    - Average rating
- Saving on localStorage

## Project structure

```bash
epignosis-task/
│
├── public/                 # Static assets
├── src/
│   ├── assets/             # Static files and styles
│   ├── components/         # Vue components
│   ├── interfaces/         # Interfaces used through the app
│   ├── views/              # Page components
│   ├── store/              # Pinia state management
│   ├── services/           # API and external service calls
│   ├── utils/              # Utility / helper functions
│   ├── router.ts           # Vue Router routes
│   └── App.vue             # Main application component
│
├── ....
```

## Commit conventions
In the process of creating this repo there were some commit conventions used to make the messages more readable and searchable.

I tried to make the commit as atomic and simple as possible

```bash
feat: -> used to declare a commit that create or changes core functionality

chore: -> used to declare a commit that implements minor changes (typical chore)

config: -> used to declare a commit that changes config files (like adding typescript alias)

store: -> used to declare a commit that create or changes functionality related to the shared store

api: -> used to declare a commit that create or changes api related code
```