CREATE DATABASE users_db;
\c users_db

CREATE TABLE users(id SERIAL PRIMARY KEY, email TEXT, password_digest TEXT);