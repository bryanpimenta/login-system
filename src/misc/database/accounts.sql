CREATE DATABASE accounts;

USE accounts;
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO users (email) VALUES
('fubuki@email.com'),
('killjoy@email.com'),
('viper@email.com'),
('brinstone@email.com')

CREATE TABLE IF NOT EXISTS tokens (
    id INT NOT NULL AUTO_INCREMENT,
    users_id INT NOT NULL UNIQUE,
    token VARCHAR(255) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);

INSERT INTO tokens (token, users_id) VALUES
('fubuki_token', 1),
('killjoy_token', 2),
('viper_token', 3),
('brinstone_token', 4)