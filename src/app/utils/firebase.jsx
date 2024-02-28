import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../../firebaseConfig";

export async function getMPs() {
  const snapshot = await getDocs(collection(fireDB, "mps"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
}
