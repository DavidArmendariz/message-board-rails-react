# Message Board App

This is a simple message board app built with React in the frontend and Ruby on Rails in the backend.

## Prerrequisites

- Node v12.10.0
- Ruby v3.0.0

For a better development experience, I suggest using NVM (Node Version Manager) and RVM (Ruby Version Manager)

## Technologies used

Frontend:

- React
- Bootstrap
- React Query

Backend:

- Ruby on Rails
- SQLite

## Starting the app

### Backend

```shell
cd server
# Optional: if you are using RVM
# rvm use
gem install bundler
bundle install
rails db:migrate RAILS_ENV=development
rails s
```

If you get an error, make sure you don't have another process running on port 3000.

### Frontend

First, make sure to have a `.env` file with the contents of `.env.example`. In development, you can use the same variables.

```shell
cd client
cp .env.example .env
```

Then, run the following commands:

```shell
# Optional: if you are using NVM
# nvm use 
npm install
npm start
```
