<p align="center">
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5kODF5YmV2bjl3OXViNHYwaG9uZW9sam5rcDJ3bTJsYms3bzV5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1sursW4ByaTZ3SyHF3/giphy.gif" alt="GIF" width="800">
</p>

**Démonstration sur YouTube :** [Regarder la vidéo sur YouTube](https://www.youtube.com/watch?v=PgV-0t1oTQo)


# Application de Gestion de Produits

## Description
Application web permettant la gestion de produits par catégories, développée avec Spring Boot pour le backend et Angular pour le frontend.

## Fonctionnalités
- Liste des produits avec filtrage par catégorie
- Ajout de nouveaux produits
- Gestion des catégories directement dans la base de données
- Interface utilisateur en français
- API REST sécurisée

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
