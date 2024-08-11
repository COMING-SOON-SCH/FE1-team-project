import { db } from "../firebaseConfig"; // Firestore 인스턴스 가져오기
import { collection, query, where, getDocs } from "firebase/firestore"; // Firestore 메서드 가져오기
import { useState } from "react";

const useGetInfoById = () => {
  const [allUser, setAllUser] = useState([]);
  const [isError, setIsError] = useState(false);
  
  const userCollection = collection(db, "users");

  const getInfoById = async () => {
    setIsError(false); // 에러 상태 초기화
    try {
      // 쿼리 생성
      const q = query(
        userCollection,
        where("cookie", "==", document.cookie) // 쿠키와 일치하는 사용자 정보 쿼리
      );

      // 쿼리 실행
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // 문서에서 데이터 추출
      setAllUser(users); // 상태 업데이트
    } catch (e) {
      console.error("오류 발생 - useGetInfoById.js \n", e);
      setIsError(true); // 에러 발생 시 상태 업데이트
    }
    
    
  };

  return { getInfoById, allUser, isError }; // allUser도 반환
};

export default useGetInfoById;
