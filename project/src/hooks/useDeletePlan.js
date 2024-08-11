import { deleteDoc, query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";  // Firebase 초기화 및 Firestore 인스턴스 가져오기

export default function useDeletePlan() {
  const deletePlan = async (plan) => {
    try {
      const q = query(collection(db, 'plans'), where('plans', '==', plan.plans));
      const querySnapshot = await getDocs(q);
      const docRef = querySnapshot.docs[0].ref;
      // Firestore에서 해당 문서 삭제
      await deleteDoc(docRef);
      console.log('삭제 성공')
    } catch (error) {
      console.error("Error deleting plan: ", error);
      alert('계획 삭제 중 오류 발생');
    }
  }
  return deletePlan
};
