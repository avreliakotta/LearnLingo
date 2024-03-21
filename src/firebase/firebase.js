import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC6RHNbyV2ppnLICbblb9t3Rsz-h-CMhNg",
    authDomain: "learnlingo-8b086.firebaseapp.com",
    projectId: "learnlingo-8b086",
    databaseURL:"https://learnlingo-8b086-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "learnlingo-8b086.appspot.com",
    messagingSenderId: "335547383683",
    appId: "1:335547383683:web:44df5719e29fce549400b6",
    measurementId: "G-73VRE4JXE3"
    // 
//     apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;