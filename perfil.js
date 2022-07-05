import { saveUser, bd} from "./login.js";
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

const nombre = document.getElementById("nombre")
const carrera = document.getElementById("carrera")
const semestre = document.getElementById("semestre")
const rut = document.getElementById("rut")
const numero = document.getElementById("numero")
const editar = document.getElementById("editar")
const guardar = document.getElementById("guardar")
nombre.disabled=true 
guardar.disabled=true 
carrera.disabled=true
semestre.disabled=true
rut.disabled=true
numero.disabled=true
editar.innerHTML='Editar'
editar.addEventListener('click', (e) => {
    e.preventDefault();
    nombre.disabled=false
    carrera.disabled=false
    semestre.disabled=false
    rut.disabled=false
    numero.disabled=false
    guardar.disabled=false
    editar.disabled=true
    guardar.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('usuario guardado')
        saveUser(nombre.value, carrera.value, semestre.value, rut.value, numero.value)
        guardar.disabled=true
        editar.disabled=false
        nombre.disabled=true 
        guardar.disabled=true 
        carrera.disabled=true
        semestre.disabled=true
        rut.disabled=true
        numero.disabled=true 
    })

    /*getDocs(collection(bd, "Usuario")).then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            
        });
    })
    addEventListener('click', (e) => {  

    })*/
    console.log("Editar")
})