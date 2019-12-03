
DROP DATABASE burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INTEGER NOT NULL ,
  burger_name VARCHAR (200) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);