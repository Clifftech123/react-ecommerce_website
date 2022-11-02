
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyDUnTjJ2thl8lanFrUzQa7zwpaLcJ2RQ3g",
	authDomain: "react-e-commerce-e2845.firebaseapp.com",
	projectId: "react-e-commerce-e2845",
	storageBucket: "react-e-commerce-e2845.appspot.com",
	messagingSenderId: "1053508419788",
	appId: "1:1053508419788:web:952d8b52e8e643d216c269",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app
