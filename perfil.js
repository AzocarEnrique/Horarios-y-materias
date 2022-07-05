import { saveUser, q1, editUser, bd} from "./login.js";
import { onSnapshot, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

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
//console.log(sessionStorage.id)
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

        if(!q1._path.segments[2]){
            saveUser(nombre.value, carrera.value, semestre.value, rut.value, numero.value)
            console.log('save user')
        }
        else{
            console.log(carrera)
            editUser(sessionStorage.id, carrera.value, nombre.value, numero.value, rut.value, semestre.value)
            console.log('edit user')
        }
        guardar.disabled=true
        editar.disabled=false
        nombre.disabled=true 
        guardar.disabled=true 
        carrera.disabled=true
        semestre.disabled=true
        rut.disabled=true
        numero.disabled=true 
    })
    console.log("Editar")
<<<<<<< HEAD
}) 
=======
})
onSnapshot(q1, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
        nombre.placeholder=doc.data().nombre
        carrera.placeholder=doc.data().carrera
        semestre.placeholder=doc.data().semestre
        rut.placeholder=doc.data().rut
        numero.placeholder=doc.data().numero
        sessionStorage.id=doc._key.path.segments[8]
        //console.log(sessionStorage.id)
        //console.log(doc)
    }); 
});
>>>>>>> c8cece5cc5a8810a666e6db5ae6092eccb4d0914
