import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
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
        const errorMessage = error.message || 'Login failed. Please try again.';
        if (error.code === 'auth/wrong-password') {
          return rejectWithValue('Incorrect password. Please try again.');
        } else {
         
          return rejectWithValue(errorMessage);
        }
      
    
      
      
      }
    }
  );
