import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBynkfs4M8ALgGptBdhYo3B6SiZ1QwTAk4",
	authDomain: "monkey-blog-f6ddf.firebaseapp.com",
	projectId: "monkey-blog-f6ddf",
	storageBucket: "monkey-blog-f6ddf.appspot.com",
	messagingSenderId: "993239477871",
	appId: "1:993239477871:web:4bfdc3e60817dd5659279a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
