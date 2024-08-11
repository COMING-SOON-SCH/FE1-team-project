import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const usePostClub = () => {
  const [isError, setIsError] = useState();

  const postClub = async (clubData) => {
    try {
      await addDoc(collection(db, "clubProfiles"), clubData);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - usePostPlan.js \n", e);
      setIsError(true);
    }
  };

  return { postClub, isError };
};

export default usePostClub;
