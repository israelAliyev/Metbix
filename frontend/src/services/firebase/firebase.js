import firebase from 'firebase'
import 'firebase/storage'
import { initializeApp } from "firebase/app";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCqMFfKIY9Ia0AX52ELWp-x11qPxfEjEak",
    authDomain: "metbix-5cfd7.firebaseapp.com",
    projectId: "metbix-5cfd7",
    storageBucket: "metbix-5cfd7.appspot.com",
    messagingSenderId: "825548058864",
    appId: "1:825548058864:web:6105bf443ae0c524c79235"
});


const firebaseConfig = initializeApp(app);
