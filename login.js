import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {addDoc, collection, getFirestore, query} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAUwmILCjRDupuGNCU3J9ZRAxppEJXDKQ4",

  authDomain: "prueba2-d1c49.firebaseapp.com",

  projectId: "prueba2-d1c49",

  storageBucket: "prueba2-d1c49.appspot.com",

  messagingSenderId: "721019747276",

  appId: "1:721019747276:web:8dd4e1beb6b055605bbb69"

};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
var path = window.location.pathname;
var page = path.split("/").pop();


window.addEventListener('DOMContentLoaded', async () => {


if(page == 'login.html'){
const signupForm = document.querySelector('#signup-form');
const signupModal = document.getElementById('signupModal')
const modal = new mdb.Modal(signupModal)

//Registro
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    

    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        
        signupForm.reset()
        modal.hide()
        console.log('Registro Correcto')
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
   
});

const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  console.log(email,password)

  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential =>{
    window.location.href = 'index.html'
    signinForm.reset()
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
})
const googleLogin = document.querySelector('#googlelogin')

googleLogin.addEventListener('click', e =>{
  console.log('Inicio con Google')

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth,provider).then(result =>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = 'index.html'

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
})

const FBLogin = document.querySelector('#fblogin')

FBLogin.addEventListener('click', e =>{
  e.preventDefault();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth,provider).then(result=>{
    console.log('Inicio de Sesión con Facebook')
    window.location.href = 'index.html'
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})
})

const TLogin = document.querySelector('#tlogin')

TLogin.addEventListener('click', e =>{
  e.preventDefault();
  var provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider).then(result=>{
  console.log('Inicio de Sesión con Twitter')
  window.location.href = 'index.html'
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})
})
}
else{
  const Logout = document.getElementById('logout')
  onAuthStateChanged(auth, (user) => {
      if (user) {
          //aca no pasa na
          sessionStorage.uid = user.uid
      } else {
          window.location.href = 'login.html'
      }
    });

    Logout.addEventListener('click' , (e) =>{
    auth.signOut()
  })
  console.log(sessionStorage.uid)
}



})

//////////////////// Funciones exportadas //////////////////////////////


export const saveBlock = (materia, carrera, semestre, dia, inicio, fin) => {
  uid = auth.currentUser.uid
  addDoc(collection(db,`usuarios/${uid}/bloques`), {materia, carrera, semestre, dia, inicio, fin})
}
export const bd = db

export const saveUser = (nombre, carrera, semestre, rut, numero) => {
  addDoc(collection(db,'User'), {nombre, carrera, semestre, rut, numero})
}

export const saveMat = (materia, docente, desc) => {
  addDoc(collection(db,'materia'), {materia, docente, desc})
}


///////////////////////////////////////////////////////////////////////////


export const q = query(collection(db, `usuarios/${sessionStorage.uid}/bloques`));
export const m = query(collection(db, "materia"));