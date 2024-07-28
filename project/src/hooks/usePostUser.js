import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const usePostUser = () => {
  const [isError, setIsError] = useState();

  const postUser = async (userData) => {
    try {
      await addDoc(collection(db, "users"), userData);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - usePostUser.js \n", e);
      setIsError(true);
    }
  };

  return { postUser, isError };
};

export default usePostUser;
