import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuemhDy33-NBJVtmi4hYyvq_Z7oIRLq6A",
  authDomain: "deploy-43007.firebaseapp.com",
  projectId: "deploy-43007",
  storageBucket: "deploy-43007.appspot.com",
  messagingSenderId: "477593410476",
  appId: "1:477593410476:web:d635fc0f04675d80367809",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Singup Successfully");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { register };
