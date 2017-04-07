//LOOPS!
//FOR

// for (var i = 0; i < 10; i++) {
// console.log(i)
// }

/**
 * LOOP infinito
 */

// var i = 0
// while(i < 10) {
//   console.log(i + 'es menor que 10!')
//   i++
// }

// var i = 0
// while(i < 10) {
//    if(i<5) {
//   console.log(i 'es menor que 10!', i)
//    }else {
//   console.log(i 'es mayor que 5!', i)
//    }
//   i++
//  }

// var vie = 'Viernes'
// var sab = 'Sábado'
// var dm = 'Domingo'
// var diasDeLaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', vie, sab, dm
// ]

// console.log(diasDeLaSemana)

// var vie = 'Viernes'
// var sab = 'Sábado'
// var dm = 'Domingo'
// var diasDeLaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', vie, sab, dm
// ]

// // conosole.log(diasDeLaSemana.length)
// for (var i = 0; i < diasDeLaSemana.length; i++) {
//   console.log(diasDeLaSemana[i])
// }

// TAREA:
// Escribir un arreglo que contenga todo los meses del año
// Pedirle al usuario que ingrese el mes de su cumpleaños
// Se tiene que imprimir todos los meses que es su NO cumpleaños
// (ref al sombrero loco de Alicia)
// Se debe utilizar FOR e IF.

var Ene = 'Enero'
var Feb = 'Febrero'
var Mar = 'Marzo'
var Abr = 'Abril'
var May = 'Mayo'
var Jun = 'Junio'
var Jul = 'Julio'
var Agos = 'Agosto'
var Sept = 'Septiembre'
var Oct = 'Octubre'
var Nov = 'Noviembre'
var Dic = 'Diciembre'
var mesesDelAno = [ Ene, Feb, Mar, Abr, May, Jun, Jul, Agos, Sept, Oct, Nov, Dic ]

var mesCumple = prompt("Ingresa el mes de tú cumpleaños")


for (var i = 0; i < mesesDelAno.length; i++) 

 if (mesesDelAno[i] != mesCumple) {
      console.log(mesesDelAno[i])
    }