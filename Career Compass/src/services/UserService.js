import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Users } from "../models/Users";
const dbPath = "users";

class UserService {
  async register(Data) {
    const newUser = new Users();
    newUser.name = Data.name;
    newUser.email = Data.email;
    newUser.phone = Data.phone;
    newUser.address = Data.address;
    // newCareerPath.profileImage = Data.profileImage;
    const docRef = await addDoc(collection(db, dbPath), {
      ...newCareerPath,
    });
  }
}

export default new CareerPathService();
