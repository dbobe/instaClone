import firebase from "firebase/compat/app";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApCyjpXBjzThJ247YUUaDUt168QQ6yfkI",
  authDomain: "instagramclone-f2dc1.firebaseapp.com",
  projectId: "instagramclone-f2dc1",
  storageBucket: "instagramclone-f2dc1.appspot.com",
  messagingSenderId: "627625561274",
  appId: "1:627625561274:web:2c974050125d436d8c0683",
  measurementId: "G-6P95H2YWYD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore;
const auth = app.auth;
const storage = app.storage;

export { auth, db, storage };
