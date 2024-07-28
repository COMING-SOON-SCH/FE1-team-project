import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const useGetAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [isError, setIsError] = useState();

  const getAllUser = async () => {
    try {
      const users = []; // 유저들 데이터를 담을 배열
      const querySnapshot = await getDocs(collection(db, "users")); // 데이터 불러오기

      // users에 유저 데이터 하나씩 삽입
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        users.push(userData);
      });

      // users를 allUser에 대입
      setAllUser(users);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - useGetAllUser.js \n", e);
      setIsError(true);
    }
  };

  return { allUser, getAllUser, isError };
};

export default useGetAllUser;
