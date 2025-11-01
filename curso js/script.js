'use strict'

// ================================================
// TEMA: ¡Hola, mundo! — 20/10/2025
// Aprendi a mostrar un mensaje básico en la web.
alert('¡Hola, mundo!')

// ================================================
// TEMA: Estructura del código — 20/10/2025
// Código organizado en líneas y puntos y coma al final.
console.log('Estructura del código correcta')

// ================================================
// TEMA: "use strict" — 20/10/2025
// Activa un modo estricto que evita errores silenciosos.
;('use strict ')
let usuario = 'Tilín'
console.log('usuario (correcto):', usuario)
// Sin "use strict", esto crearía una variable global por error
// ================================================
// TEMA: Variables — 21/10/2025
// Creación de variables usando let, const y var.
let nombre = 'Juan'
console.log(nombre)

// ================================================
// TEMA: Tipos de datos — 21/10/2025
// Diferentes tipos: string, number, boolean, object, undefined.
let texto = 'Tilín Insano' // String
let decimal = 10.5 // Number
let logico = true // Boolean
let indefinido // Undefined
let nulo = null // Null
let lista = ['HTML', 'CSS', 'JS'] // Array
let personita = { nombre: 'Tilín', edad: 18 } // Object

console.log('Texto:', texto)
console.log('Número decimal:', decimal)
console.log('Booleano:', logico)
console.log('Undefined:', indefinido)
console.log('Null:', nulo)
console.log('Array:', lista)
console.log('Objeto:', personita)

// ================================================
// TEMA: alert / prompt / confirm — 21/10/2025
// Pedimos datos al usuario e interactuamos con confirmaciones.
alert('👋 ¡Bienvenido al programa de Panelita!')

let nombreUsuario = prompt('¿Cómo te llamas?')
console.log('El usuario ingresó:', nombreUsuario)

let continuar = confirm('¿Quieres continuar?')
console.log('Confirmación del usuario:', continuar)

// ================================================
// TEMA: Conversiones — 22/10/2025
// Convertimos valores entre string y number.
;('use strict')

// Convertir de string a number
let numero = Number('10')
console.log('Tipo de numero:', typeof numero)
console.log('Resultado:', numero + 5)

// Convertir de number a string
let textoo = String(123)
console.log('Tipo de texto:', typeof texto)

// Convertir de texto a booleano
let verdad = Boolean('hola')
console.log('Tipo de verdad:', typeof verdad, 'Valor:', verdad)

// ================================================
// TEMA: Operadores — 22/10/2025
// Aritméticos
let suma = 5 + 3
let resta = 10 - 4
let multiplicacion = 6 * 2
let division = 8 / 2
let modulo = 10 % 3
console.log('Suma:', suma)
console.log('Resta:', resta)
console.log('Multiplicación:', multiplicacion)
console.log('División:', division)
console.log('Módulo:', modulo)

// Comparaciones
console.log("¿5 es igual a '5'?", 5 == '5')
console.log("¿5 es estrictamente igual a '5'?", 5 === '5')
console.log('¿10 es mayor que 3?', 10 > 3)

// Lógicos
console.log('true && false =', true && false)
console.log('true || false =', true || false)
console.log('!true =', !true)

// ================================================
// TEMA: Comparaciones — 23/10/2025
// Comparaciones estrictas === e !==.
console.log(5 === '5') // false

// ================================================
// TEMA: if / ?: — 23/10/2025
// Condicionales para tomar decisiones.
let nota = 80
console.log(nota > 59 ? 'Aprobado' : 'Reprobado')

// ================================================
// TEMA: Operadores lógicos — 24/10/2025
// && (AND), || (OR), ! (NOT).
let edad = 17
let tienePermiso = true

// AND: ambas condiciones deben cumplirse
console.log('¿Puede entrar? (AND):', edad >= 18 && tienePermiso)

// OR: basta con una condición
console.log('¿Puede entrar? (OR):', edad >= 18 || tienePermiso)

// NOT: invierte el valor lógico
console.log('¿No tiene permiso?:', !tienePermiso)

// ================================================
// TEMA: Operador Nullish Coalescing — 24/10/2025
// Devuelve un valor por defecto si algo es null o undefined.
;('use strict')

let pendejo = null
let nombrependejo = pendejo ?? 'Invitado'
console.log('pendejo:', nombrependejo)

let puntos = 0
let puntajeFinal = puntos ?? 100
console.log('Puntaje final:', puntajeFinal)

// ================================================
// TEMA: while / for — 25/10/2025
// Repetimos código hasta cumplir una condición.
;('use strict')

// Bucle for: repite un número fijo de veces
for (let i = 1; i <= 3; i++) {
 console.log('Iteración número:', i)
}

// Bucle while: se ejecuta mientras la condición sea verdadera
let contador = 1
while (contador <= 3) {
 console.log('Contando con while:', contador)
 contador++
}

// ================================================
// TEMA: switch — 25/10/2025
// Múltiples casos para una misma variable.
;('use strict')

let dia = 3

switch (dia) {
 case 1:
  console.log('Lunes')
  break
 case 2:
  console.log('Martes')
  break
 case 3:
  console.log('Miércoles')
  break
 case 4:
  console.log('Jueves')
  break
 case 5:
  console.log('Viernes')
  break
 default:
  console.log('Fin de semana')
}

// ================================================
// TEMA: Funciones — 26/10/2025
// Bloques reutilizables.
;('use strict')

// Función tradicional
function saludar(nombre) {
 console.log('Hola,', nombre)
}
saludar('Tilín')

// Función anónima asignada a una variable
const despedir = function (nombre) {
 console.log('Adiós,', nombre)
}
despedir('Tilín')

// Función flecha (arrow function)
const sumar = (a, b) => a + b
console.log('Resultado de sumar 3 + 5 =', sumar(3, 5))

// ================================================
// TEMA: Calidad del código — 26/10/2025
// Buenas prácticas: nombres claros y comentarios.
;('use strict')

//  Ejemplo de buen código
const nombrehumano = 'Tilín'
const edadUsuario = 17

function mostrarInfo(nombre, edad) {
 console.log(`Nombre: ${nombre}`)
 console.log(`Edad: ${edad}`)
}

mostrarInfo(nombrehumano, edadUsuario)

// ================================================
// TEMA: Debugging — 27/10/2025
// Usamos console.log y debugger para encontrar errores.
;('use strict')

// Ejemplo con error y depuración
let numero1 = 5
let numero2 = '10' // error intencional: string en vez de número

console.log('Antes de la suma...')

// Pausa el código para inspeccionar variables
debugger

let resultado = numero1 + Number(numero2) // Convertimos correctamente
console.log('Resultado correcto:', resultado)

console.log('Debug listo')

// ================================================
// TEMA: Objetos — 28/10/2025
// Agrupamos datos con propiedades clave:valor.
let persona = { nombre: 'Laura', edad: 18 }
console.log(persona.nombre)

// ================================================
// TEMA: Arrays — 28/10/2025
// Listas de datos con métodos útiles.
let frutas = ['Manzana', 'Banano']
frutas.push('Pera')
console.log(frutas)

// ================================================
// TEMA: Map / Set — 29/10/2025
// Estructuras avanzadas para colecciones únicas o con claves.
let conjunto = new Set([1, 2, 2])
console.log(conjunto)

// ================================================
// TEMA: Promesas / async — 30/10/2025
// Manejo de código asíncrono.
;('use strict')

// Promesa básica
console.log('Inicio de Promesa...')

const tarea = new Promise((resolve, reject) => {
 setTimeout(() => {
  const exito = true // cambia a false para probar el error
  if (exito) resolve('✅ La tarea se completó correctamente.')
  else reject('❌ Ocurrió un error en la tarea.')
 }, 1500)
})

tarea
 .then((resultado) => console.log('Resultado:', resultado))
 .catch((error) => console.error('Error:', error))
 .finally(() => console.log('Promesa finalizada.\n'))

// Uso de async / await
async function cargarDatos() {
 console.log('Cargando datos simulados...')
 return new Promise((resolve) => {
  setTimeout(() => resolve({ usuario: 'Tilín', estado: 'activo' }), 1000)
 })
}

async function ejecutarAsync() {
 const datos = await cargarDatos()
 console.log('Datos recibidos:', datos)
}

ejecutarAsync()

// ================================================
// TEMA: Módulos — 30/10/2025
// División del código en archivos separados.
// En este ejemplo no se puede demostrar directamente en un solo archivo,
// pero en un proyecto real usaríamos `import` y `export` para manejar módulos.

// ================================================
// TEMA: DOM — 31/10/2025
// Manipulación de elementos de la página.
;('use strict')

// Seleccionamos el cuerpo del documento y agregamos un texto
document.body.innerHTML += '<h2>¡Hola desde JavaScript con DOM! 😎</h2>'

// Cambiamos el color de fondo
document.body.style.backgroundColor = 'lightblue'

// Creamos un nuevo párrafo desde JS
const nuevoParrafo = document.createElement('p')
nuevoParrafo.textContent =
 'Este texto fue agregado dinámicamente desde JavaScript.'
document.body.appendChild(nuevoParrafo)

// Mostramos confirmación en consola
console.log('Elemento agregado correctamente al DOM')

// ================================================
// TEMA: Eventos — 31/10/2025
// Reaccionamos a acciones del usuario.
;('use strict')

// Creamos un botón desde JavaScript
const buton = document.createElement('button')
buton.textContent = '¡Haz clic aquí! '
document.body.appendChild(buton)

// Escuchamos el evento 'click' en el botón
buton.addEventListener('click', () => {
 alert('¡Hiciste clic en el botón! ')
 console.log('Evento de clic detectado correctamente')
})

// Evento de doble clic en el cuerpo de la página
document.body.addEventListener('dblclick', () => {
 document.body.style.backgroundColor = 'lightgreen'
 console.log('Fondo cambiado por doble clic ')
})

// ================================================
// TEMA: Formularios — 01/11/2025
// Obtención de datos desde inputs (ejemplo simple).

// Seleccionamos el formulario y sus elementos
;('use strict')
const formulario = document.getElementById('miFormulario')
const inputNombre = document.getElementById('nombre')
const salidaFormulario = document.getElementById('salidaFormulario')
// Evento al enviar el formulario
formulario.addEventListener('submit', (evento) => {
 evento.preventDefault() // Evita el envío tradicional
 const nombreIngresado = inputNombre.value.trim()
 if (nombreIngresado === '') {
  salidaFormulario.textContent = 'Por favor, ingresa un nombre.'
  return
 }
 salidaFormulario.textContent = `¡Hola, ${nombreIngresado}! Gracias por enviar el formulario.`
 console.log('Formulario enviado con nombre:', nombreIngresado)
})

// ================================================
// TEMA: Fetch — 02/11/2025
// Pedimos datos a APIs externas.
;('use strict')

// Obtenemos elementos del DOM
const boton = document.getElementById('btnCargar')
const salida = document.getElementById('salida')

// Evento para traer datos desde una API
boton.addEventListener('click', () => {
 salida.textContent = 'Cargando datos...'

 fetch('https://api.github.com/users/octocat') // API pública de GitHub
  .then((res) => res.json())
  .then((data) => {
   salida.innerHTML = `
        <strong>Usuario:</strong> ${data.login} <br>
        <strong>ID:</strong> ${data.id} <br>
        <img src="${data.avatar_url}" width="80" style="border-radius:10px; margin-top:10px;">
      `
   console.log('Datos obtenidos correctamente:', data)
  })
  .catch((error) => {
   salida.textContent = 'Error al cargar datos '
   console.error('Error:', error)
  })
})

// ================================================
// TEMA: Almacenamiento (LocalStorage) — 03/11/2025
// Guardamos datos en el navegador.
;('use strict')

// Obtenemos los elementos
const inputapellido = document.getElementById('apellido')
const btnGuardar = document.getElementById('guardar')
const btnMostrar = document.getElementById('mostrar')
const salidaa = document.getElementById('salidaa')

// Guardar el nombre en LocalStorage
btnGuardar.addEventListener('click', () => {
 const nombre = inputNombre.value.trim()
 if (nombre === '') {
  alert('Por favor, escribe un nombre')
  return
 }
 localStorage.setItem('nombreUsuario', nombre)
 salida.textContent = ` Nombre "${nombre}" guardado correctamente`
 console.log('Nombre guardado:', nombre)
})

// Mostrar el nombre guardado
btnMostrar.addEventListener('click', () => {
 const nombreGuardado = localStorage.getItem('nombreUsuario')
 if (nombreGuardado) {
  salida.textContent = ` Bienvenido de nuevo, ${nombreGuardado}`
  console.log('Nombre recuperado:', nombreGuardado)
 } else {
  salida.textContent = ' No hay ningún nombre guardado'
  console.warn('No se encontró ningún nombre en LocalStorage')
 }
})

// ================================================
// TEMA: IndexedDB — 03/11/2025
// Base de datos local avanzada (solo demostración).
;('use strict')

// Abrimos (o creamos) la base de datos
const request = indexedDB.open('MiBaseDeDatos', 1)

request.onupgradeneeded = (evento) => {
 const db = evento.target.result
 // Creamos un almacén de objetos (tabla)
 db.createObjectStore('usuarios', { keyPath: 'id' })
 console.log(' Base de datos creada y lista.')
}

request.onsuccess = (evento) => {
 const db = evento.target.result
 console.log(' Conexión exitosa con IndexedDB.')

 // Insertamos un registro de ejemplo
 const transaccion = db.transaction('usuarios', 'readwrite')
 const almacen = transaccion.objectStore('usuarios')

 const nuevoUsuario = { id: 1, nombre: 'Tilín', edad: 18 }
 almacen.add(nuevoUsuario)

 transaccion.oncomplete = () => {
  console.log(' Usuario agregado correctamente:', nuevoUsuario)
 }

 // Leemos el registro
 const leerTransaccion = db.transaction('usuarios', 'readonly')
 const leerAlmacen = leerTransaccion.objectStore('usuarios')
 const solicitud = leerAlmacen.get(1)

 solicitud.onsuccess = () => {
  console.log(' Datos obtenidos:', solicitud.result)
 }
}

request.onerror = () => {
 console.error(' Error al abrir la base de datos.')
}

// ================================================
// TEMA: Animaciones — 04/11/2025
;('use strict')

// Crear un cuadrado visible
const cuadrado = document.createElement('div')
cuadrado.style.width = '100px'
cuadrado.style.height = '100px'
cuadrado.style.background = 'tomato'
cuadrado.style.position = 'absolute'
cuadrado.style.left = '0px'
cuadrado.style.top = '100px'
document.body.appendChild(cuadrado)

// Posición inicial
let posicion = 0

// Función para mover el cuadrado
function mover() {
 posicion += 4 // velocidad del movimiento
 cuadrado.style.left = posicion + 'px'

 // Mostrar la posición en la consola
 console.log('📍 Posición actual:', posicion)

 // Detener al llegar a cierto punto
 if (posicion < 400) {
  requestAnimationFrame(mover) // sigue moviendo
 } else {
  console.log('🎬 Animación completada ✅')
 }
}

// Iniciar la animación
mover()

// ================================================
// TEMA: Componentes Web — 05/11/2025
// Crear etiquetas personalizadas (demo básica).
;('use strict')

// Definimos una clase para el nuevo componente
class MiComponente extends HTMLElement {
 constructor() {
  super()
  const shadow = this.attachShadow({ mode: 'open' })
  const contenedor = document.createElement('div')
  contenedor.textContent = '¡Hola desde MiComponente! 😎'
  contenedor.style.padding = '10px'
  contenedor.style.backgroundColor = '#f0f0f0'
  contenedor.style.border = '2px solid #ccc'
  shadow.appendChild(contenedor)
 }
}

// Registramos el nuevo componente
customElements.define('mi-componente', MiComponente)
// Usamos el componente en el DOM
const nuevoComponente = document.createElement('mi-componente')
document.body.appendChild(nuevoComponente)
console.log('Componente Web agregado correctamente al DOM')

// ================================================
// TEMA: RegExp — 06/11/2025
// Expresiones regulares para validar texto.
// TEMA: Expresiones Regulares — 06/11/2025
;('use strict')

// Ejemplo 1: Validar si una cadena contiene solo números
let regexNumeros = /^\d+$/
console.log("¿'12345' son solo números?", regexNumeros.test('12345')) // true
console.log("¿'123abc' son solo números?", regexNumeros.test('123abc')) // false

// Ejemplo 2: Validar un correo electrónico simple
let regexCorreo = /^[\w.-]+@[\w.-]+\.\w{2,}$/
console.log(
 "¿'tilin@gmail.com' es un correo válido?",
 regexCorreo.test('tilin@gmail.com')
)
console.log("¿'tilin@' es un correo válido?", regexCorreo.test('tilin@'))

// Ejemplo 3: Reemplazar números dentro de una cadena
let textaso = 'Tengo 3 perros y 2 gatos'
let nuevoTextaso = texto.replace(/\d+/g, '🐾')
console.log('Textaso reemplazado:', nuevoTextaso)
