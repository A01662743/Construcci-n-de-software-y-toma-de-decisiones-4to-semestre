document.write("<div class='apartado-card'>");
document.write("<button onclick='controlador.toggle(5)'>JavaScript Ejercicios</button>");
document.write("<div id='part-5' class='apartado'>");

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

//verificador de password

  class ValidadorPassword {
  constructor() {
      this.pass1 = document.getElementById('pass1');
      this.pass2 = document.getElementById('pass2');
      this.msg = document.getElementById('match-msg');
      
      this.init();
  }

  init() {
      // Escuchamos cada vez que el usuario escribe
      this.pass1.addEventListener('input', () => this.validar());
      this.pass2.addEventListener('input', () => this.validar());
  }

  validar() {
      const v1 = this.pass1.value;
      const v2 = this.pass2.value;

      // 1. Validar Requisitos Individuales
      const tieneOcho = v1.length >= 8;
      const tieneNum = /\d/.test(v1);
      const tieneMayus = /[A-Z]/.test(v1);

      this.toggleClase('req-len', tieneOcho);
      this.toggleClase('req-num', tieneNum);
      this.toggleClase('req-upper', tieneMayus);

      // 2. Validar Coincidencia (Solo si el segundo campo tiene algo)
      if (v2.length > 0) {
          if (v1 === v2 && tieneOcho && tieneNum && tieneMayus) {
              this.setEstado(this.pass2, 'is-success', '✅ Coinciden y es segura');
          } else {
              this.setEstado(this.pass2, 'is-danger', '❌ No coinciden o no cumple requisitos');
          }
      } else {
          this.limpiarEstado();
      }
  }

  toggleClase(id, cumple) {
      const el = document.getElementById(id);
      cumple ? el.classList.add('is-valid-req') : el.classList.remove('is-valid-req');
  }

  setEstado(el, clase, texto) {
      el.classList.remove('is-success', 'is-danger');
      el.classList.add(clase);
      this.msg.innerText = texto;
      this.msg.className = `help ${clase === 'is-success' ? 'is-success' : 'is-danger'}`;
  }

  limpiarEstado() {
      this.pass2.classList.remove('is-success', 'is-danger');
      this.msg.innerText = '';
  }
}

// FUNCIONES PARA EL POP-UP (MODAL)
function abrirModal(tipo) {
  const modal = document.getElementById('modal-info');
  const texto = document.getElementById('modal-text');
  
  if(tipo === 'info-pass1') {
      texto.innerText = "La robustez de tu contraseña es vital. Usar mayúsculas y números evita ataques de fuerza bruta.";
  } else {
      texto.innerText = "Este campo asegura que no hayas cometido un error de dedo al escribir tu nueva clave.";
  }
  
  modal.classList.add('is-active');
}

function cerrarModal() {
  document.getElementById('modal-info').classList.remove('is-active');
}

// Iniciar
const app = new ValidadorPassword();