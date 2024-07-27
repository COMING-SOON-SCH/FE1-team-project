import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const postUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return docRef;
  } catch (e) {
    console.error("오류 발생 - 유저 추가하기", e);
    return e;
  }
};

export default postUser;
