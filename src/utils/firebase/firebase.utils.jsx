import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlLOtJuJ3xy4ftxCMq34W2Y4x1UjDQmLM",
    authDomain: "crwn-clothing-db-bebaf.firebaseapp.com",
    projectId: "crwn-clothing-db-bebaf",
    storageBucket: "crwn-clothing-db-bebaf.appspot.com",
    messagingSenderId: "774467641399",
    appId: "1:774467641399:web:3400d296ad3bb7f11f5fb2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

  };


 