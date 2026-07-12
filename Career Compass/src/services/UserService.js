import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { Users } from "../models/Users";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const dbPath = "users";

class UserService {
  async register(data) {

    let userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)

    const newUser = new Users();
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.phone = data.phone;
    newUser.address = data.address;
    newUser.uid = userCredential.user.uid;
    // newCareerPath.profileImage = Data.profileImage;
    const docRef = await setDoc(doc(db, dbPath , userCredential.user.uid), {
      ...newUser
    });
    return newUser
  }

  async login(data) {
    let userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
  }
}

export default new UserService();
