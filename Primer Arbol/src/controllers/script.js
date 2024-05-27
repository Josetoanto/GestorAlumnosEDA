import Alumno from "./models/Contact.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")
let btn1 = document.getElementById("buscar-btn")
let btnMin = document.getElementById("min-btn")
let btnMax = document.getElementById("max-btn")
let btnPrev = document.getElementById("prev-btn")
let btnNext = document.getElementById("next-btn")

let index = 0;

btn.addEventListener("click",()=>{
    let name = document.getElementById("firstName").value
    let matricula = document.getElementById("lastName").value
    let grupo = document.getElementById("phoneNumber").value
    let alumno = new Alumno (name,matricula,grupo)
    if (bst.add(alumno)) {
        alert("Agregado correctamente")
    } else {
        alert("Fallo al agregar el registro")
    }
    displayAlumnos();
})

btn1.addEventListener("click",()=>{
    let lastName = document.getElementById("lastNameSearch").value
    let node = bst.search(lastName)
    if (node != null){
        alert (node.value.name + " " + node.value.matricula + ":" + node.value.grupo)
    } else {
        alert ("No encontrado")
    }
})

btnMin.addEventListener("click",()=>{
    let node = bst.findMinNode()
    if (node != null){
        alert ("Mínimo: " + node.value.name + " " + node.value.matricula + ":" + node.value.grupo)
    } else {
        alert ("Árbol vacío")
    }
})

btnMax.addEventListener("click",()=>{
    let node = bst.findMaxNode()
    if (node != null){
        alert ("Máximo: " + node.value.name + " " + node.value.matricula + ":" + node.value.grupo)
    } else {
        alert ("Árbol vacío")
    }
})

btnPrev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        displayAlumnos();
    }
});

btnNext.addEventListener("click", () => {
    index++;
    displayAlumnos();
});

function displayAlumnos() {
    for (let i = 0; i < 3; i++) {
        let alumnoDiv = document.getElementById(`contact-${i+1}`);
        let node = bst.getNodeByIndex(index + i);
        if (node !== null) {
            alumnoDiv.textContent = node.value.name + " " + node.value.matricula + ":" + node.value.grupo;
        } else {
            alumnoDiv.textContent = "";
        }
    }
}

displayAlumnos();
