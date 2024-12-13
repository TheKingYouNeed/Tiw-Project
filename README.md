

**Démonstration sur YouTube :** [Regarder la vidéo sur YouTube](https://www.youtube.com/watch?v=PgV-0t1oTQo)


# Application de Gestion de Produits

## Description
Application web permettant la gestion de produits par catégories, développée avec Spring Boot pour le backend et Angular pour le frontend.

## Fonctionnalités
- Liste des produits avec filtrage par catégorie
- Ajout de nouveaux produits
- Gestion des catégories directement dans la base de données
- Interface utilisateur en français
- API REST 

## Technologies Utilisées
### Backend
- Spring Boot 3.2.0
- Java 17
- PostgreSQL
- Maven
- JPA/Hibernate

### Frontend
- Angular 16+
- TypeScript
- SCSS
- Bootstrap

## Prérequis
- JDK 17 ou supérieur
- Node.js 16+ et npm
- PostgreSQL 12+
- Maven 3.8+

## Configuration de la Base de Données
1. Créer une base de données PostgreSQL nommée `productdb`
2. Utilisateur : `productuser`
3. Mot de passe : `securepassword`

## Installation et Démarrage

### Backend (Spring Boot)
```bash
cd gererproduit
mvn clean install
mvn spring-boot:run
