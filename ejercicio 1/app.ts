// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes: [string, string] = ["batman","superman"];
let villano: [string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados: string [] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum heroe {
   fuerzaAcuaman = 0,
   fuerzaBatman = 1,
   fuerzaFlash = 5,
   fuerzaSuperman = 100,
 }
let fuerzaAcuaman = heroe.fuerzaAcuaman;
let fuerzaBatman = heroe.fuerzaBatman;
let fuerzaFlash = heroe.fuerzaFlash;
let fuerzaSuperman = heroe.fuerzaSuperman;

let fuerzaMaxima:number = heroe.fuerzaSuperman;

// Retorno de funciones
function activar_batiseñal(): string{ //regresa un string
  return "activada";
}

function pedir_ayuda(): void { //no regresa nada
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length
console.log( largoDelPoder );
