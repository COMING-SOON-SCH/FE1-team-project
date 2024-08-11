import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function useFetchPlanState() {
  const fetchPlanState = async (plan) => {
    try {
      const q = query(collection(db, 'plans'), where('plans', '==', plan.plans));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;

        await updateDoc(docRef, {
          state: plan.state,
        });

        console.log('계획 수정 성공');
      } else {
        console.log('계획 찾기 실패');
      }
    } catch (error) {
      console.error('Error updating plan state:', error);
      alert('삳태 업데이트 오류 발생');
    }
  };

  return fetchPlanState;
}
