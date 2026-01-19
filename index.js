// Array de alumnos
let alumnos = [];

// Pedir el nombre del alumno
let nombreAlumno = prompt("Ingrese el nombre del alumno:");

// Agregar el alumno al array
alumnos.push(nombreAlumno);

// Array de Aprendizajes
const aprendizajes = [];

// Pedir aprendizaje

for (let i = 0; i < 3; i++) {
    let nombreAprendizaje = prompt("Agregar aprendizajes a la lista (ejemplos: Comprensión Lectora, Jerarquización, Síntesis) ");
    aprendizajes.push(nombreAprendizaje);
}

// Calificaciones

let calificaciones = [];

// Pedir la calificació del alumno de un aprendizaje de determinado
for (let i = 0; i < 3; i++) {
    let calificacion = prompt("Ingrese la calificacion de " + aprendizajes[i]);
    calificaciones.push(parseFloat(calificacion));
}
// let calificacion = parseFloat(prompt("Ingrese la calificación de " + nombreAlumno + ":"));

// función de promedio

function calcularPromedio(calificaciones) {
    if (calificaciones.lenght === 0) return 0;
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones [i];
    }
    return suma / calificaciones.length;  
}
 let promedioAlumno = calcularPromedio(calificaciones)
console.log (promedioAlumno);


// Verificar si está aprobado o desaprobado
if (promedioAlumno >= 7) {
    console.log(nombreAlumno + " está APROBADO con una calificación de " + promedioAlumno);
} else {
    console.log(nombreAlumno + " está DESAPROBADO con una calificación de " + promedioAlumno);
}

// Mostrar el array de alumnos
console.log("Lista de alumnos:", alumnos);
