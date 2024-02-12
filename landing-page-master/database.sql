-- Création de la table pour stocker les abonnés à la newsletter
CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribe_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
