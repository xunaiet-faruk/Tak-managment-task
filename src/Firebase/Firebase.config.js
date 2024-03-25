// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpKZsP_NALtlKVRInicmW8ViK_flSHboE",
    authDomain: "task-tracker-web-app-1f913.firebaseapp.com",
    projectId: "task-tracker-web-app-1f913",
    storageBucket: "task-tracker-web-app-1f913.appspot.com",
    messagingSenderId: "154616863313",
    appId: "1:154616863313:web:14d74eec8fccc60342f670"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);