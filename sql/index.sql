CREATE DATABASE exampledb;
CREATE USER 'polanks'@'localhost' IDENTIFIED BY 'polanks';
GRANT ALL PRIVILEGES ON exampledb.* TO 'polanks'@'localhost';
FLUSH PRIVILEGES;