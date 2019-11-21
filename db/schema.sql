CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
     id AUTO_INCREMENTINT NOT NULL,
    burgerName VARCHAR(100),
    devoured boolean
)