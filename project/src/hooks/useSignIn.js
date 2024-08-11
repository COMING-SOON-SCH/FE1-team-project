import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const useSignIn = () => {
  const [passwords, setPasswords] = useState([]); // 해당 id로 가입된 계정들의 password가 담긴 배열
  const [isError, setIsError] = useState(false); // 초기값 false로 설정

  const signIn = async (id) => {
    try {
      const usersRef = collection(db, "users");
      const queryPasswords = [];
      const q = query(usersRef, where("id", "==", id)); // 쿼리
      const querySnapshot = await getDocs(q); // 쿼리에 해당하는 반환값

      if (!querySnapshot.empty) {
        // 순회하며 queryPasswords에 데이터 담기
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          queryPasswords.push(userData.password); // 비밀번호 필드 확인 후 사용
        });

        setPasswords(queryPasswords);
        setIsError(false);
      } else {
        setIsError(true); // 일치하는 사용자가 없을 경우 에러 설정
      }
    } catch (e) {
      console.error("오류 발생 - useSignIn \n", e);
      setIsError(true);
    }
  };

  return { signIn, passwords, isError };
};

export default useSignIn;