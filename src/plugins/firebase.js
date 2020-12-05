import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6X9FBRGAFigHDQsiEmksiWwCtut2PoS8",
  authDomain: "ccrew-adoption-application.firebaseapp.com",
  databaseURL: "https://ccrew-adoption-application.firebaseio.com",
  projectId: "ccrew-adoption-application",
  storageBucket: "ccrew-adoption-application.appspot.com",
  messagingSenderId: "666436751528",
  appId: "1:666436751528:web:f669390501a792fe39f29d",
  measurementId: "G-XSMQ8LTP4C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
