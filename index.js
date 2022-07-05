import { saveBlock, bd, q} from "./login.js";
import {getDocs, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
const Bloque = document.getElementById('block-form')

Bloque.addEventListener('submit', (e) => {
    e.preventDefault();
    const materia = Bloque['materia']
    const carrera = Bloque['carrera']
    const semestre = Bloque['semestre']
    const dia = Bloque['dia']
    const inicio = Bloque['inicio']
    const fin = Bloque['fin']
    saveBlock(materia.value, carrera.value, semestre.value, dia.value, inicio.value, fin.value)

});


window.addEventListener('DOMContentLoaded', async () => {
const lunes = document.getElementById('lunes')
const martes = document.getElementById('martes')
const miercoles = document.getElementById('miercoles')
const jueves = document.getElementById('jueves')
const viernes = document.getElementById('viernes')
const sabado = document.getElementById('sabado')
const domingo = document.getElementById('domingo')
let html = ''


onSnapshot(q, (querySnapshot) => {

    querySnapshot.forEach((doc) => {
        if(doc.data().dia.toLowerCase() == 'lunes'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            lunes.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'martes'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            martes.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'miercoles'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            miercoles.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'jueves'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            jueves.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'viernes'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            viernes.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'sabado'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>    
            `;
            sabado.innerHTML = html;
        }
        
        if(doc.data().dia.toLowerCase() == 'domingo'){
            html +=`
                <li class="single-event" data-start="${doc.data().inicio}" data-end="${doc.data().fin}" data-content="event-abs-circuit" data-event="event-1">
                    <a href="#0" id="firebase-btn">
                        <em class="event-name">${doc.data().materia}</em>
                    </a>
                </li>   
            `;
            domingo.innerHTML = html;
        }
        
        console.log(`${doc.id} => ${doc.data().dia}`);
    }); 
});

})