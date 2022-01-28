//La comsola se usa para debuggear o monitorear
//Para crear constantes, en el lenguaje compilado, se le asigna exactamente el espacio 
const nombre = "Juan Perez"; //Tipo string

//A una constante no se le puede cambiar el valor, mostrará un error, debe cambiarse desde la 
//primera vez que se declara
//nombre = "Otro nombre";

//Para declarar variables:
let edad = 23; //Tipo numérico
//Pero consumen más espacio en la memoria que los const
//No tienen un espacio exacto en memoria porque no se sabe cuánto pueden llegar a usar

console.log(
    "Mi nombre es: " + nombre + " y mi edad es: " + edad + "años"
    );

//A las variables sí se les puede cambiar el valor 
edad = 19;

console.log(
    "Mi nombre es: " + nombre + " y mi edad es: " + edad + "años"
    );

//Tipo boolean
let decision = false;

console.log(decision);

//Para ejecutar una condición
if(decision)
{
    console.log("Se cumple la condición")
}
else 
{
    console.log("No se cumple")
}

if(edad >= 18)
{
    console.log(`${nombre} es mayor de edad`); //Template string usar ` `
}
else
{
    console.log(`${nombre} es menor de edad`);
}

let condicion = edad >= 18;
let condicion2 = nombre === 'Juan Perez';

console.log(condicion);

if(condicion)
{
    console.log(`${nombre} es mayor de edad`);
}
else
{
    console.log(`${nombre} es menor de edad`);
}

console.log("Condición => " , condicion)

console.log("Condición 2 => " , condicion2)

if(condicion || condicion2)
{
    console.log(`Entra como verdadero`);
}
else
{
    console.log(`Entra como falso`);
}

if(condicion && condicion2)
{
    console.log(`Entra como verdadero`);
}
else
{
    console.log(`Entra como falso`);
}

//Un = es para asignar valores
let variable = false;
variable = true;

const number = 20;

//Compara que el valor sea igual
console.log(number == "20");

//Compara el valor y el tipo de dato
console.log(number === "20");

if(condicion)
{
    console.log(`Entra a la primer condición`);
}
else if (condicion2)
{
    console.log(`Entra a la segunda condición`);
}
else
{
    console.log("Ninguna de las condiciones es verdadera")
}

//Ternarios, hace algo dependiendo de lo que pase
//Se pone una condición o una variable,  " ? " para ejecutar un pedazo de código " : " funciona como else
edad = 16;

edad > 18 ? console.log("es mayor de edad") : console.log("es menor de edad");

//Ciclos

//for recibe 3 parámetros, se declara una variable, se inicializa; hasta qué punto se ejecuta y la condición; el salto
for(let indice = 0; indice < 10; indice++)
{
    console.log(`El valor del índice es = ${indice}`);
}

console.log("Se terminó el for")

for(let indice = 0; indice < 10; indice++)
{
    if(indice === 2)
    {
        console.log("2");
    }

    console.log("Otro código");

}

for(let indice = 0; indice < 10; indice++)
{
    if(indice === 2)
    {
        console.log("2");
        break; //así se rompe cuando se cumple la condición
    }

    console.log("Otro código");

}

const arreglo = ['Jesús' , 'Juan' , 'María' , 'Ramón'];

console.log("arreglo => " , arreglo);

for(let indice = 0; indice < arreglo.length; indice++)
{
    console.log(`El nombre de la persona es: ${arreglo[indice]}`);
    console.log(arreglo[0]);

}

//For con el método forEach del arreglo
//crea una variable "nombre" y la usa dentro de la función
arreglo.forEach((nombre) => 
    console.log(`El nombre de la persona es ${nombre}`)
);


let contador = 0;

while(contador < 1000)
{
    console.log(contador);
    contador = contador + 1;
}

//Template string ` ` 
//${} para poner variables en un template string sin usar + 
const nombre2 = 'Jesús García';
const texto = `Mi nombre es ${nombre2}`;

console.log(texto);

function Saludar()
{
    console.log("Hola a todos");
}

//La función no se ejecutará hasta que se llame

Saludar();

function Saludar2(nombre , apellido)
{
    console.log(`Hola ${nombre} ${apellido}, ¿Cómo estás?`);
}

//Undefined, tipo de dato, si no encuentra el dato al que se está haciendo referencia
Saludar2();

Saludar2("Jesús" , "García");

Saludar2("Juan" , "Pérez");

//Hay clases para crear objetos, pero se puede hacer así:
const persona1 = {
    nombre: 'Jesús',
    apellido: 'García',
    edad: 22,
};

const persona2 = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 16,
};

//Otra manera de definir una función
const admitirPaso = (persona) => {

    if(persona.edad >= 18)
    {
        console.log(`Puedes pasasr ${persona.nombre} ${persona.apellido}`);
    }
    else
    {
        console.log(`No puedes pasasr ${persona.nombre} ${persona.apellido}`);
    }
};

admitirPaso(persona1);
admitirPaso(persona2);

const arregloPersonas = [persona1 , persona2];

arregloPersonas.forEach((persona) => {
    admitirPaso(persona);
});

//En JavaScript generalmente se usa programación funcional
//La siguiente función se llama cuando se da click en el botón
function alerta ()
{
    alert("Bienvenido a la página")
}

const esMayor = (edad) => 
{
    if(edad >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
};

console.log(esMayor(persona1.edad));

const variable2 = esMayor(78);

console.log(variable2);