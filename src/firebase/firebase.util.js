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

export const createUserProfileDocument = async (userAuth, aditionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...aditionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { name, price } = doc.data();

		return {
			routeName: encodeURI(name.toLowerCase()),
			id: doc.id,
			name,
			price
		};
	});
	console.log(transformedCollection);

	return transformedCollection;

	// //Converts array to Object
	// return transformedCollection.reduce((accumulator, collection) => {
	// 	accumulator[collection.name.toLowerCase()] = collection;
	// 	return accumulator;
	// }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
