import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const getAllUser = async () => {
  try {
    // 유저들 데이터를 담을 배열
    const users = [];
    // 데이터 불러오기
    const querySnapshot = await getDocs(collection(db, "users"));
    // newList에 유저 데이터 하나씩 삽입
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      users.push(userData);
    });
    // newList를 상태(users)에 대입
    return users;
  } catch (e) {
    console.error("오류 발생 - 데이터 불러오기", e);
    return e;
  }
};

export default getAllUser;
