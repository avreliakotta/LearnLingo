import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyC6RHNbyV2ppnLICbblb9t3Rsz-h-CMhNg",
//   authDomain: "learnlingo-8b086.firebaseapp.com",
//   databaseURL: "https://learnlingo-8b086-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "learnlingo-8b086",
//   storageBucket: "learnlingo-8b086.appspot.com",
//   messagingSenderId: "335547383683",
//   appId: "1:335547383683:web:44df5719e29fce549400b6",
//   measurementId: "G-73VRE4JXE3"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
