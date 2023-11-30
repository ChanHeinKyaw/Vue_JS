import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCajfFB8p0qO4rn9J07A5LR8H6L3b2qnRI",
    authDomain: "vue-blog-website-42741.firebaseapp.com",
    projectId: "vue-blog-website-42741",
    storageBucket: "vue-blog-website-42741.appspot.com",
    messagingSenderId: "282140539369",
    appId: "1:282140539369:web:bcd73ad5e5286bbcd6b378"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp};


