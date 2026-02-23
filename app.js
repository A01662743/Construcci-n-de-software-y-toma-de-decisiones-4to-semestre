// Ejercicio 1
function promedios(arreglo) {
  let sum = 0;
  for (num of arreglo) {
    sum += num;
  }
  let promedio = sum / arreglo.length;
  return promedio;
}

console.log(promedios([5, 7, 10]));

// Ejercicio 2
const fs = require("fs");

function escribirArchivo(texto) {
  fs.writeFile("file.txt", texto, (error) => {
    if (error) {
      console.error("Error al escribir el archivo:", error);
      return;
    }
    console.log("Archivo escrito correctamente.");
  });
}

escribirArchivo("Esta es una prueba, espero que funcione");

// Ejercicio 3 (Fibonacci num)
function obtenerFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0; // Primer número
    let b = 1; // Segundo número
    let temporal;

    for (let i = 2; i <= n; i++) {
        temporal = a + b;
        a = b;
        b = temporal;
    }

    return b;
}

//uso
const posicion = 4;
console.log(`El número Fibonacci en la posición ${posicion} es: ${obtenerFibonacci(posicion)}`);


//despliegue de página html con express

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (CSS, JS, imágenes) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal: enviar HTML a localhost:3000
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'my first html.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});