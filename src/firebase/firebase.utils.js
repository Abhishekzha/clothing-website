import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBV2eYiI4MNCsckcTqiJcfBe5BoifPS6gQ",
    authDomain: "clothing-website-db-985c1.firebaseapp.com",
    projectId: "clothing-website-db-985c1",
    storageBucket: "clothing-website-db-985c1.appspot.com",
    messagingSenderId: "554546184950",
    appId: "1:554546184950:web:4ff9429bf5a9a6327de2d7"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
       if(!userAuth) return;
       const userRef=firestore.doc(`users/${userAuth.uid}`);
       const snapShot=await userRef.get();
       if(!snapShot.exists){
         const {displayName,email,photoURL}=userAuth;
         const createdAt=new Date();

         try{
          await userRef.set({
            displayName,
            email,
            photoURL,
            createdAt,
            ...additionalData
          })

         }catch(error){
           console.log("Error setting up the data",error);
         }
       }
       return userRef;
  }


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;