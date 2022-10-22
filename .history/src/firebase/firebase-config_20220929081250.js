import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDQSSEJXcb9IZA6OMVgGtayVsTtt-XGRs8",
	authDomain: "monkey-blogging-ac2ef.firebaseapp.com",
	projectId: "monkey-blogging-ac2ef",
	storageBucket: "monkey-blogging-ac2ef.appspot.com",
	messagingSenderId: "283664768818",
	appId: "1:283664768818:web:58339fec85de0a4ea0812b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
