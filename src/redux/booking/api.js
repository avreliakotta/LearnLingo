import firebase from '../../firebase/firebase';
import 'firebase/firestore';

export const sendBookingData = (id, bookingData) => {
  return async () => {
    try {
      const db = firebase.firestore();
      const bookingsRef = db.collection('bookings');

      
      await bookingsRef.add({
        
         ...bookingData,
         id,
        dateTime: new Date() 
      });

      console.log('Booking data sent to Firebase successfully!');
    

    } catch (error) {
      console.error('Error sending booking data to Firebase:', error);
       throw error;
    }
  };
};
