import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const useSignIn = () => {
  const [passwords, setPasswords] = useState([]); // 해당 id로 가입된 계정들의 password가 담긴 배열
  const [isError, setIsError] = useState();

  const signIn = async (id) => {
    // 컬렉션 참조
    try {
      const usersRef = collection(db, "users"); // 컬렉션 참조
      const queryPasswords = []; // id에 해당하는 유저들의 비밀번호를 담을 배열
      const q = query(usersRef, where("id", "==", id)); // 쿼리
      const querySnapshot = await getDocs(q); // 쿼리에 해당하는 반환값

      // 순회하며 queryUsers에 데이터 담기
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        queryPasswords.push(userData.pw); // 비밀번호만 담기
      });

      setPasswords(queryPasswords);
      setIsError(false);
    } catch (e) {
      console.error("오류 발생 - useSignIn \n", e);
      setIsError(true);
    }
  };

  return { signIn, passwords, isError };
};

export default useSignIn;
