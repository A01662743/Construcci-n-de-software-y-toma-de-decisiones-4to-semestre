document.write("<div class='apartado-card'>");
document.write("<button onclick='controlador.toggle(4)'>JavaScript</button>");
document.write("<div id='part-4' class='apartado'>");

// Ejercicio 1
let num = parseInt(prompt("Introduce un número:"));

if (!isNaN(num) && num > 0) {
  document.write("<div class='subtitle'>Ejercicio 1</div>");
  document.write("<table>");
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

  for (let i = 1; i <= num; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i * i + "</td>");
    document.write("<td>" + i * i * i + "</td>");
    document.write("</tr>");
  }

  document.write("</table>");
} else {
  document.write("Entrada inválida.");
}

// Ejercicio 2
let randomSum = Math.floor(Math.random()) + Math.floor(Math.random());

let numberGuess = parseInt(
  prompt("Introduce el resultado de la suma de dos números:"),
);

if (numberGuess == randomSum) {
  document.write("<div class='subtitle'>Ejercicio 2</div>");
  document.write("¡Correcto!");
} else {
  document.write("<div class='subtitle'>Ejercicio 2</div>");
  document.write("¡Incorrecto!");
}

// Ejercicio 3
function contador(arreglo) {
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;

  for (num of arreglo) {
    if (num < 0) {
      negativos++;
    } else if (num === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }

  document.write(
    `<p>Negativos: ${negativos}, Ceros: ${ceros}, Positivos: ${positivos}</p>`,
  );
}

document.write("<div class='subtitle'>Ejercicio 3</div>");
contador([0, 0, -3, -2, -15, 2]);

// Ejercicio 4
function promedios(arreglo) {
  const promediosArreglo = [];
  for (fila of arreglo) {
    let suma = 0;
    for (num of fila) {
      suma += num;
    }
    const promedioFila = suma / fila.length;
    promediosArreglo.push(promedioFila);
  }
  document.write(`<p>Promedios: ${promediosArreglo.join(", ")}</p>`);
}

document.write("<div class='subtitle'>Ejercicio 4</div>");
promedios([
  [10, 20, 30],
  [5, 5],
  [100, 200],
]);

// Ejercicio 5
function inv(num) {
  let numStr = num.toString();
  let numInv = "";

  let der = numStr.length - 1;

  while (der >= 0) {
    numInv += numStr[der];
    der--;
  }

  return Number(numInv);
}

document.write("<div class='subtitle'>Ejercicio 5</div>");
document.write(`<p>El inverso de 6993643 es: ${inv(6993643)}</p>`);

//Ejercicio 6
class GestorContenido {
    // Método 1: Alternar visibilidad (Toggle)
    toggle(id) {
        const elemento = document.getElementById(`part-${id}`);
        
        if (elemento.classList.contains('abierta')) {
            this.ocultar(elemento);
        } else {
            this.mostrar(elemento);
        }
    }

    // Método 2: Aplicar la clase CSS para mostrar
    mostrar(el) {
        el.classList.add('abierta');
        el.style.maxHeight = el.scrollHeight + "px";
    }

    // Método 3: Quitar la clase CSS para ocultar
    ocultar(el) {
        el.classList.remove('abierta');
        el.style.maxHeight = null;
    }
}

// Creamos la instancia
const controlador = new GestorContenido();

document.write("<div> <div>");