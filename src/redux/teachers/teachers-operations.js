import { createAsyncThunk } from "@reduxjs/toolkit";
import app from "../../firebase/firebase";
import { getDatabase, ref, get } from "firebase/database";


export const fetchAll = createAsyncThunk(
    "teachers/fetchAllData",
    async (_, { rejectWithValue }) => {
      try {
        const database = getDatabase(app);
        const dbRef = ref(database);
        const snapshot = await get(dbRef);
        
        if (snapshot.exists()) {
          return snapshot.val(); 
        } else {
          throw new Error("No data available");
        }
      } catch (error) {
       
        return rejectWithValue(error.message);
      }
    }
  );
  