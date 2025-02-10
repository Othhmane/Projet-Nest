#  Projet de Réservation de Films

Ce projet est une application web permettant d'afficher des films provenant de l'API TMDB et d'offrir aux utilisateurs la possibilité de réserver des films. L'application est divisée en deux parties :

- **Frontend** : Développé en React, permettant aux utilisateurs de parcourir et réserver des films.
- **Backend** : Développé en Next.js, servant d'API pour gérer l'authentification et les réservations.

---

##  Fonctionnalités

 Affichage des films en fonction de leur popularité 
 Barre de recherche pour filtrer les films 
 Authentification (inscription et connexion) 
 Réservation des films avec des restrictions 
 Stockage des réservations pour chaque utilisateur 

---

##  Technologies utilisées

### **Frontend (React - Vite)**
- React.js
- React Router
- Material UI
- Axios

### **Backend (Next.js)**
- Next.js
- API Routes
- JSON Web Token (JWT) pour l'authentification
- MongoDB (ou une base de données pour stocker les réservations)
- TMDB API pour récupérer les films

---

##  Installation & Démarrage

### **1️⃣ Backend - Next.js**

```bash
cd backend
npm install
npm run dev
```
Le backend sera disponible sur :
 `http://localhost:3000/api`

### **2️⃣ Frontend - React (Vite)**

```bash
cd frontend
npm install
npm run dev
```
Le frontend sera disponible sur :
 `http://localhost:5173`

---

##  Authentification

- Inscription : `http://localhost:5173/auth/register`
- Connexion : `http://localhost:5173/auth/login`

L'authentification est basée sur JWT et permet aux utilisateurs de réserver des films après connexion.

---

##  Structure du projet

```
 Projet
 ┣  frontend (React - Vite)
 ┃ ┣  src
 ┃ ┃ ┣  components  # Composants réutilisables
 ┃ ┃ ┣  pages       # Pages principales (Home, Login, Register)
 ┃ ┃ ┣  services    # Gestion API et Auth
 ┃ ┃ ┗  App.jsx     # Point d'entrée
 ┣  backend (Next.js)
 ┃ ┣  pages/api     # API Routes (Auth, Movies, Reservations)
 ┃ ┗  server.js     # Configuration serveur
 ┣  exo  # Dossier contenant mes entraînements et exercices avant d'aboutir au projet final
 ┗  README.md       # Documentation
```

---

##  Notes supplémentaires

- Les films sont récupérés depuis **l'API TMDB**
- Un système de réservation avec **restriction de 2 heures** est implémenté
- **Le dossier `exo`** contient tous mes exercices et entraînements effectués en cours pour arriver à ce projet final

---
