import { NextResponse } from 'next/server';
import { initializeApp, getApps } from "firebase/app";
import { setDoc } from "firebase/firestore";


const firebaseConfig= {
  apiKey: "AIzaSyDqKjYZcr7rbgI0jJF-5jS77o5Z8nmJ7iM",
  authDomain: "avatar-37593.firebaseapp.com",
  projectId: "avatar-37593",
  storageBucket: "avatar-37593.appspot.com",
  messagingSenderId: "751644224984",
  appId: "1:751644224984:web:89c24a5d19ba3888d196ad",
  measurementId: "G-8461ZF6KB6"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

import { getFirestore, doc, getDoc,getDocs,collection, query, where } from "firebase/firestore";
const db = getFirestore(firebase_app)

import designFile from './data.json';

export async function GET(request) {
  return NextResponse.json(designFile);
} 


export async function POST(request) {
  const { url } = await request.json();

  try {
    const q = query(collection(db, "workspaces"), where("domain", "==", url));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const documentsData = querySnapshot.docs.map(doc => doc.data());
      console.log('Data retrieved from Firebase:', documentsData);
      return NextResponse.json(documentsData);
    }
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return NextResponse.json({ error: "Error fetching data from Firebase" });
  }

  console.log('No matching documents found in Firebase.');
  return NextResponse.json({ error: "No matching documents found" });
}




// export async function StoreDataJson(request) {
//     try {
//         const completeData = await request.json();
//         const docRef = doc(db, 'webDesign', 'prj_A5HNUnAbJ4I6Hva6Qwf0Ejvv4Jgh');
        
//         await setDoc(docRef, completeData);

//         console.log('Data successfully written into Firebase.');
//         return NextResponse.json({ success: "Data successfully written into Firebase" });
//     } catch (error) {
//         console.error('Error writing data to Firebase:', error);
//         return NextResponse.json({ error: "Error writing data to Firebase" });
//     }
// }