import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcSl-oyh9oOBXoMPVdi1ftcFek17yRA2o",
    authDomain: "linkedin-clone-3808f.firebaseapp.com",
    projectId: "linkedin-clone-3808f",
    storageBucket: "linkedin-clone-3808f.appspot.com",
    messagingSenderId: "525600879088",
    appId: "1:525600879088:web:fbceaf2c41d7ab1a906d35",
    measurementId: "G-LNRTMK22HS"
};

const firebaeApp = firebase.initializeApp(firebaseConfig);
const db = firebaeApp.firestore();
const auth = firebase.auth();

export { db, auth }; 