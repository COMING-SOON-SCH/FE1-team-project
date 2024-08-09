import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const usePostPlan = () => {
  const [isError, setIsError] = useState();

  const postPlan = async (planData) => {
    try {
      await addDoc(collection(db, "plans"), planData);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - usePostPlan.js \n", e);
      setIsError(true);
    }
  };

  return { postPlan, isError };
};

export default usePostPlan;
