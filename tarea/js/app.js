
import estudiantes, { curso } from "./datos.js";
import { promedio, estado, reporte } from "./calculos.js";

const nuevo = {
    ...estudiantes[0],
    nombre: "Ana María"
};

const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

document.querySelector("#curso").textContent = `Curso: ${curso}`;

const lista = document.querySelector("#reportes");

todos.forEach(estudiante => {
    console.log(reporte(estudiante));

    const elemento = document.createElement("li");
    elemento.textContent = reporte(estudiante);
    lista.appendChild(elemento);
});