import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const signIn = async (id) => {
  // 컬렉션 참조
  try {
    const usersRef = collection(db, "users");
    // id에 해당하는 유저의 데이터를 담을 배열
    const queryUsers = [];
    // 쿼리
    const q = query(usersRef, where("id", "==", id));
    // 쿼리에 해당하는 반환값
    const querySnapshot = await getDocs(q);
    // 순회하며 데이터 담기
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      queryUsers.push(userData);
    });
    // 리턴
    return queryUsers;
  } catch (e) {
    console.error("오류 발생 - 데이터 불러오기", e);
    return e; // 에러 상태 설정
  }
};

export default signIn;
