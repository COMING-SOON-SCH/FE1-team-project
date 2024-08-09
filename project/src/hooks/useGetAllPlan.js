import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const useGetAllPlan = () => {
  const [allPlan, setAllPlan] = useState([]);
  const [isError, setIsError] = useState();

  const getAllPlan = async () => {
    try {
      const plans = []; // 유저들 데이터를 담을 배열
      const querySnapshot = await getDocs(collection(db, "plans")); // 데이터 불러오기

      // users에 유저 데이터 하나씩 삽입
      querySnapshot.forEach((doc) => {
        const planData = doc.data();
        plans.push(planData);
      });
      // users를 allUser에 대입
      setAllPlan(plans);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - useGetAllUser.js \n", e);
      setIsError(true);
    }
  };

  return { allPlan, getAllPlan, isError };
};

export default useGetAllPlan;
