# Capstone: Restaurant Reservation System

This is My Thinkful Periodic Tables Capstone Project. This project is a PERN-Stack (PostgreSQL, Express, React, and Nodejs) application that represents a reservation management system for a restaurant called Periodic Tables. This application gives users the ability to create/edit reservations, seat a reservation at a table, create tables, and search for a reservation by phone number.

# Still To-Do:

1. Find a way to get US-06 frontend to pass. The reservation does in fact disappear from the dashboard when I 'finish' the table, but for some reason that test is still failing. Strange that it works while using the app but I don't understand why it isn't returning null.

2. Deploy the backend and the frontend to Heroku or Vercel.

3. Complete README documentation with descriptions of the app and my api, along with screenshot images.

# Installation Instructions

In order to effectively install and use this application locally, you will need to clone the repo. You will then need to navigate to the top level of the project in your terminal and execute:

1. run `npm i`
2. `cd front-end && npm i`
3. `cd ../back-end && npm i`

Now that you have all of the scripts installed, you will need two different PostgreSQL database instances to either run the application locally or test it.

You must make a `.env` file in both the front-end and back-end directories.

Load the back-end `.env` file with two environment variables with the values of your two database URLs like so:

```
DATABASE_URL_DEVELOPMENT=development-data-base-url-goes-here
DATABASE_URL_TEST=test-data-base-url-goes-here
```

In the front-end `.env` file, enter:

```
REACT_APP_API_BASE_URL=http://localhost:5001
```

Now you will need to migrate the tables to the development database. Don't bother doing it for the test database, though. The tests are carrying that out for you each time. Cd into the back-end folder and run:

1. `npx knex migrate:latest`
2. `npx knex seed:run`

Now you are ready to run the server locally. From the top level of the project, run `npm run start:dev` if you would like to run the server and application.

If you would like to test the application, you can view the `package.json` files and use the testing scripts provided there. Unfortunately, some of the provided testing scripts do not function. However, the ones that certainly do are:

1. all of those that are structured like `npm run test:5:backend` or `npm run test:3:frontend`, etc for numbers 1-8
2. `npm run test:frontend` and `npm run test:backend`
3. `npm run test` which should run all of the tests