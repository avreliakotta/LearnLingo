import { createAsyncThunk } from "@reduxjs/toolkit";
import app from "../../firebase/firebase";
import { getDatabase, ref, get } from "firebase/database";

// export const fetchAll= createAsyncThunk("teachers/fetchAll",
// async (_, { rejectWithValue }) => {
//     try{
//         console.log("Fetching all teachers...");
//         const db = await getDatabase(app);
//         const dbRef = await ref(db,"teachers");
//         const snapshot = await get(dbRef);
//         const data= await snapshot.val();
       
//         console.log("Fetched data:", data);
//         return data;

//     }catch(error){
//         console.error("Error fetching data:", error);
//         return rejectWithValue(error.response.data);
//     }
   
// })
export const fetchAll = createAsyncThunk(
    "teachers/fetchAllData",
    async (_, { rejectWithValue }) => {
      try {
        const database = getDatabase(app);
        const dbRef = ref(database);
        const snapshot = await get(dbRef);
        
        if (snapshot.exists()) {
          return snapshot.val(); // Возвращаем данные из снимка, если они существуют
        } else {
          throw new Error("No data available");
        }
      } catch (error) {
        // Если возникла ошибка, отклоняем действие с соответствующим значением ошибки
        return rejectWithValue(error.message);
      }
    }
  );
  