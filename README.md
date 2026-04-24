# ☠️ OnePieceAngular

A One Piece themed web application built with Angular.  
The project displays information about characters, devil fruits, and sagas using reusable Angular components, routing, and API services.

## 📌 Features

- Angular standalone components
- Navigation using Angular Router
- Pages for:
  - Characters
  - Devil Fruits
  - Sagas
- API integration with the One Piece API
- Dynamic data rendering
- Loading and error states
- Reusable service structure
- Responsive card-based layout

## 🧭 Pages

### Characters
Displays featured One Piece characters and supports character data from the API.

### Devil Fruits
Displays featured Devil Fruits and loads additional fruit data from the API.

### Sagas
Displays featured One Piece sagas and loads saga data from the API.

## 🛠️ Technologies Used

- Angular 21
- TypeScript
- HTML
- CSS
- RxJS
- One Piece API

## 📁 Project Structure

```txt
src/
└── app/
    ├── core/
    │   ├── models/
    │   │   ├── character.model.ts
    │   │   ├── fruit.model.ts
    │   │   └── saga.model.ts
    │   └── services/
    │       ├── api.service.ts
    │       ├── characters.service.ts
    │       ├── fruits.service.ts
    │       └── sagas.service.ts
    ├── pages/
    │   ├── characters/
    │   ├── fruits/
    │   └── sagas/
    └── shared/
        └── navbar/
▶️ How to Run the Project
Clone the repository:
git clone https://github.com/christiantenerife/OnePieceAngular.git
Enter the project folder:
cd OnePieceAngular
Install dependencies:
npm install
Start the development server:
npm start

Or:

ng serve
Open the app in your browser:
http://localhost:4200
📦 Available Scripts
npm start

Runs the project locally.

npm run build

Builds the project for production.

npm test

Runs the test setup.

🌐 API

This project uses the One Piece API:

https://api.api-onepiece.com/v2

Used endpoints include:

/characters/en
/characters/en/search
/fruits/en
/sagas/en
🎯 What I Learned

Through this project, I practiced:

Creating Angular standalone components
Setting up routes with Angular Router
Organizing an Angular project into pages, shared components, models, and services
Fetching data from an external API using HttpClient
Displaying dynamic data with Angular templates
Handling loading and error states
👤 Author

Christian Tenerife

📄 Description

Página web con las sagas, frutas y personajes de One Piece.
