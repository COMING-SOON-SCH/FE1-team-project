import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const isDuplicatedId = async (id) => {
  // 컬렉션 참조
  try {
    const usersRef = collection(db, "users"); // 컬렉션 참조
    const isDuplicate = []; // 해당 ID로 회원가입된 계정이 있는지를 담을 변수
    const q = query(usersRef, where("id", "==", id)); // 쿼리
    const querySnapshot = await getDocs(q); // 쿼리에 해당하는 데이터

    // 순회하며 데이터 담기
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      isDuplicate.push(userData.id); // id만 담기
    });

    console.log("isDuplicate>>",isDuplicate);
    // 해당 id가 이미 회원가입 되어있는지 확인
    if (isDuplicate.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error("오류 발생 - 데이터 불러오기", e);
    return e; // 에러 상태 설정
  }
};

export default isDuplicatedId;
