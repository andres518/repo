const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Andres felipe alvarez";
const tema = "TEMA 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./lecturaEscritura");


/* A A.	Crear un objeto literal que represente la aplicación. 
El objeto será la representación de nuestro sistema de gestión de películas,
 podemos llamarlo gestionDePeliculas y contendrá todas las propiedades y métodos necesarios.*/


const gestionDePeliculas ={

/* B B.	Agregar una propiedad llamada peliculas en la que asignarás las películas obtenidas 
a partir del método leer del objeto requerido como módulo (jsonHelper.js), el cual debes requeri
r como cualquier módulo, al comienzo del archivo, como hemos visto en las prácticas previas */

peliculas : jsonHelper.leerJson("peliculas"),
/* C C.	Agregar un método listarPeliculas que reciba como parámetro un array de películas y los imprima por consola.
Este método deberá imprimir por consola un mensaje con el siguiente formato:*/

listarPeliculas : function(arrayPeliculas){
    arrayPeliculas.forEach((pelicula) => {
    let premiada = pelicula.fuePremiada ? "true" : "false";
    console.log(
    `titulo: ${pelicula.titulo}, de director: ${pelicula.director}, duracion de: ${pelicula.duración}minutos,
     premiada: ${premiada}, calificacion: ${calificación} en IMDB.`
      )
    }
  );
},



// D Agregar un método buscarPorTitulo que permita buscar una película en función de su título.

buscarPorTitulo : function (titulo) {
  return this.peliculas.find((p) => p.titulo === titulo);
  },
// E

peliculasPremiadas: function() {
    return this.peliculas.filter((p) => p.fuePremiada === true);
    

  },

/* F F.	Agregar un método filtrarPorDuracion que permita filtrar
 las películas que tengan una duración que esté entre el mínimo y máximo enviado.*/

filtrarPorDuracion (min,max) {
    let listaPeliculas = [];
    listaPeliculas=this.peliculas.filter((p) => p.duracion >=min && p.duracion <= max);
    return listaPeliculas;
  },

// G
ordenarPorCalificacion : function () {
    return this.peliculas.sort((a, b) => a.calificación - b.calificación);
  },

// H
duracionTotal: function(){
let duracion = tanda.reduce((acum, pelicula) => acum + pelicula.duracion, 0);
return `La duración de todas las películas sumadas es de:  ${duracion}`;
},

// I
premiarPeliculaPorTitulo : function (titulo) {
    let calificacion = titulo.sort((a, b) => b.calificacion - a.calificacion);
    let primero = calificacion[0];
    let segundo = calificacion[1];
    let tercero = calificacion[2];
    console.log(
      `El primero es ${primero.titulo} con un puntaje de ${primero.calificacion}`
    );
    console.log(
      `El segundo puesto es para ${segundo.titulo} con un puntaje de ${segundo.calificacion}`
    );
    console.log(
      `El tercer puesto es para ${tercero.titulo} con un puntaje de ${tercero.calificacion}`
    );
}

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: Andres, tema: 1 }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
carrera.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.peliculasPremiadas(true);
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
listarAutos(gestionDePeliculas.filtrarPorDuracion(80));
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.ordenarPorCalificacion();
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(duracionTotal())
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(o);
