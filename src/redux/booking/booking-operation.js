import { createAsyncThunk } from '@reduxjs/toolkit';
import {sendBookingData} from "./api";
export const bookLesson = createAsyncThunk(
    'booking/bookLesson',
    async ({ id, bookingData }, { rejectWithValue }) => {
      try {
        
        await sendBookingData(id, bookingData);
        return { id, bookingData };
      } catch (error) {
    
        return rejectWithValue(error.message);
      }
    }
  );