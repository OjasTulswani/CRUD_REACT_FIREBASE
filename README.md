
# CURD_REACT_FIREBASE

CURD_REACT_FIREBASE is a React application that demonstrates basic CRUD (Create, Read, Update, Delete) operations using Firebase Firestore. This project showcases how to interact with Firestore to manage data, providing a practical example of form handling, data fetching, and data manipulation.

## Features

- Create new documents in Firestore
- Read and display documents from Firestore
- Update existing documents
- Delete documents

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed:

- Node.js
- npm (Node Package Manager)
- Firebase account and Firestore setup

### Installation

1. Clone the repository to your local machine

```bash
git clone https://github.com/yourusername/curd_react_firebase.git
```

2. Navigate to the project directory

```bash
cd curd_react_firebase
```

3. Install the necessary dependencies

```bash
npm install
```

4. Set up Firebase

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Set up Firestore in your Firebase project.
- Add your Firebase configuration to the `firebase.js` file in the project.

### Firebase Configuration

Create a `firebase.js` file in the project root and add your Firebase configuration:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

5. Start the development server

```bash
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
curd_react_firebase/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Crud.js
│   ├── firebase.js
│   ├── curd.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```
