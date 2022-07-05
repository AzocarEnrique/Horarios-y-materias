import {m, saveMat} from "./login.js";
import {getDocs, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"



const mat = document.getElementById('mat-form')

// Create a reference to 'mountains.jpg'

mat.addEventListener('submit', (e) => {
    e.preventDefault();

    const materia = mat['nombre_materia']
    const docente = mat['nombre_docente']
    const desc= mat['descripcion']
    saveMat(materia.value, docente.value, desc.value)

});
const mate = document.getElementById('nom_mat')
const doce = document.getElementById('nom_doc')
const desc = document.getElementById('desc')
let html = ''
onSnapshot(m, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
        html +=`${doc.data().materia} `;
        mate.innerHTML = html;
        html = '';
        html +=`${doc.data().docente} `;
        doce.innerHTML = html;
        html = '';
        html +=`${doc.data().desc} `;
        desc.innerHTML = html;
        html = '';

    });
});
