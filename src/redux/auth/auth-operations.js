import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import app from '../../firebase/firebase';
const auth = getAuth(app);
export const register = createAsyncThunk(
  'auth/signup',
  async ({  email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        
        email,
        password
      );
      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
       
      };
    
      return user;
     
    } catch (error) {

      const errorMessage = error.message;
      return rejectWithValue(errorMessage);
      
    }
  }
);

export const login = createAsyncThunk(
    'auth/signin',
    async ({  email, password }, { rejectWithValue }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          
        };
        return user;
      } catch (error) {
    
        const errorMessage = error.message;
        return rejectWithValue(errorMessage);
      }
    }
  );
  // export const currentUser=createAsyncThunk(
  //   'auth/signin',
  //   async ({  email, password }, { rejectWithValue }) => {
  //    const onAuthStateChanged=(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
    

  // })