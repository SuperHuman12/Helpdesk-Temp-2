import firebase_app from "../db/config";
import { getFirestore, doc, getDoc,getDocs,collection, query, where } from "firebase/firestore";

const db = getFirestore(firebase_app)

async function getDocument(collection, id) {


    
    let docRef = doc(db, collection, id);
    let result = null;
    let error = null;
    try {
        result = await getDoc(docRef);

      
    } catch (e) {
        error = e;
    }
    return { result, error };
}



 async function getDocumentByDomain(collectionName, domain) {
    const q = query(collection(db, collectionName), where("domain", "==", domain));
    let workspaceData = null;
    let error = null;
    
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        workspaceData = querySnapshot.docs[0].data(); 
      }
    } catch(e) {
      error = e;
    }
  

    console.log('workspaceData, error ' ,workspaceData, error);

    return { workspaceData, error };
  }

  export {
    getDocument,
    getDocumentByDomain
  }