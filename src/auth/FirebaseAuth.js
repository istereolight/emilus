import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from 'configs/FirebaseConfig';

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth();
const currentUser = auth.currentUser
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
	db,
	auth,
	currentUser,
	googleAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	githubAuthProvider
};