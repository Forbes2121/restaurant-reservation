/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://rtwovcsc:9rcMcMOR02rfKXUII5Bajrp6R7uyIOfq@jelani.db.elephantsql.com/rtwovcsc",
  DATABASE_URL_DEVELOPMENT = "postgres://fnfkyquj:g2pxD669YtlkAdpWThg0bCzWqaGJzFP8@jelani.db.elephantsql.com/fnfkyquj",
  DATABASE_URL_TEST = "postgres://wpenslxt:aC2qa1QssbqP-GB0_YSRJEva7zW6mSJ1@jelani.db.elephantsql.com/wpenslxt",
  DATABASE_URL_PREVIEW = "postgres://twiapyje:qHic85fx9PQuxF51RdTCSdaQvB1NPgwl@jelani.db.elephantsql.com/twiapyje",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
