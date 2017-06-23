create database nodejs;
use nodejs;

CREATE TABLE Users(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INTEGER NOT NULL,
    PRIMARY KEY (id)
);