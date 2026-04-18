console.log("---- LAB 8 ----");

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

console.log("--------------");

//despliegue de página html con express

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public', 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen'));


const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);
const rutasSites = require('./routes/sites.routes');
app.use('/sites', rutasSites);
const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);


app.use((error, request, response, next) => {
  response.status(500).send(`Error interno del servidor: ${error.stack}`);
});
app.use((request, response, next) => {
  response.status(404).send("El site no existe")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});