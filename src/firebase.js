import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCicxcP6soLKZzVEBfdOrtfurPvQzqo2I",
    authDomain: "fir-auth-c89d1.firebaseapp.com",
    projectId: "fir-auth-c89d1",
    storageBucket: "fir-auth-c89d1.appspot.com",
    messagingSenderId: "723828348466",
    appId: "1:723828348466:web:29012b68ade39bd1f04e2b"
})

export const auth = app.auth();
export default app;