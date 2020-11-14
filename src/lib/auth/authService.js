import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./firebaseConfig"

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Helper method for initial load of site
// Firebase takes a second to determine currentUser object
// So we can use local storage for initial UI purposes 
// if the local isAuthenticated is true
const getAuthenticationStatus = () => {
    let auth_local = localStorage.getItem("isAuthenticated");

    if (auth_local) {
        return auth_local
    } else {
        return auth.currentUser
    }
};

const getCurrentUser = () => {
    return auth.currentUser;
}

export { auth, getAuthenticationStatus, getCurrentUser }