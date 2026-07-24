import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Booking } from "../models/Booking";
const dbPath = "bookings";

class BookingService {
  async add(Data) {
    const newBooking = new Booking();
    newBooking.studentId = Data.studentId;
    newBooking.studentName = Data.studentName;
    newBooking.studentEmail = Data.studentEmail;

    newBooking.sessionId = Data.sessionId;
    newBooking.sessionTitle = Data.sessionTitle;
    newBooking.sessionDate = Data.sessionDate;

    newBooking.mentorName = Data.mentorName;
    newBooking.meetingLink = Data.meetingLink;

    newBooking.bookingStatus = "Booked";
    newBooking.createdAt = new Date();

    const docRef = await addDoc(collection(db, dbPath), {
      ...newBooking,
    });
    return newBooking;
  }

  async all() {
    let data = [];

    const querySnapshot = await getDocs(collection(db, dbPath));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return data;
  }
}

export default new BookingService();
