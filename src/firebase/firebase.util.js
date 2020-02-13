import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyC_sTfRJcf7VXFuQyI_vVoHG3-KmFc9t6w",
	authDomain: "npc-db-67708.firebaseapp.com",
	databaseURL: "https://npc-db-67708.firebaseio.com",
	projectId: "npc-db-67708",
	storageBucket: "npc-db-67708.appspot.com",
	messagingSenderId: "739603159721",
	appId: "1:739603159721:web:65e76350244b5a06ebe7b8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
