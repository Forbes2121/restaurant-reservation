# Capstone: Restaurant Reservation System

This is My Thinkful Periodic Tables Capstone Project. This project is a PERN-Stack (PostgreSQL, Express, React, and Nodejs) application that represents a reservation management system for a restaurant called Periodic Tables. This application gives users the ability to create/edit reservations, seat a reservation at a table, create tables, and search for a reservation by phone number.

# Still To-Do:

1. Figure out why .ENV isn't working and I had to hard-code in my database URL.

2. Complete README documentation with descriptions of the app and my api, along with screenshot images.

3. Increase customization and improve app visuals. Add additional features. Clean up the UI overall.

# Installation Instructions

*Please note that I had to hard-code in the database production url in my knexfile.js since I couldn't get past a CORS error without doing that. Feel free to reach out if any difficulties getting the app to work. The knexfile.js should look like the below but it does not work when I do it that way. You may need to change/add .env files as described below.*

`const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
  ... }`

Fork/clone the repo to start. Then navigate to the top level of the project in your terminal and execute:

1. `npm i`
2. `cd front-end && npm i`
3. `cd ../back-end && npm i`

Now that you have all of the scripts installed, you will need four (or less) different PostgreSQL database instances to either run the application locally or test it.

You must make a `.env` file in both the front-end and back-end directories.

1. `cp ./back-end/.env.sample ./back-end/.env`
2. `cp ./front-end/.env.sample ./front-end/.env`

Manually update the back-end `.env` file's environment variables with the values of your database URLs like so:

```
DATABASE_URL=production-data-base-url-goes-here
DATABASE_URL_DEVELOPMENT=development-data-base-url-goes-here
DATABASE_URL_TEST=test-data-base-url-goes-here
DATABASE_URL_PREVIEW=preview-data-base-url-goes-here
```

In the front-end `.env` file, enter:

```
REACT_APP_API_BASE_URL=http://localhost:5001
```

Now you will need to migrate the tables to the development database. Don't bother doing it for the test database, though. The tests are carrying that out for you each time. Cd into the back-end folder and run:

1. `npx knex migrate:latest`
2. `npx knex seed:run`

Now you are ready to run the server locally in development mode. From the top level of the project, run `npm run start:dev` if you would like to run the server and application.

If you would like to test the application, you can view the `package.json` files and use the testing scripts provided there. The tests that should run smoothly include:

1. all of those that are structured like `npm run test:5:backend` or `npm run test:3:frontend`, etc for numbers 1-8
2. `npm run test:frontend` and `npm run test:backend`
3. `npm run test` which should run all of the tests