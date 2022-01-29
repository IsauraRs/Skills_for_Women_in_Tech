const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];


for(let index = 0; index < ejercicio1.length; index++)
{
let counter = 0;
let num = ejercicio1[index] % ejercicio1[index];

  for (let i = 1; i < (ejercicio1[index]+1); i ++)
  {
    if(ejercicio1[index] % i === 0)
    {
      counter = counter + 1;
      
    }
  }

  if(counter > 2)
  {
    //pass
  }
  else if(counter === 2 && (ejercicio1[index] % 1 === 0) && (num === 0))
  {
    console.log(`Es primo ${ejercicio1[index]}`)
  }
}

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

const puedeEntrar = (relative) =>
{
  if(relative.edad >= 18 && relative.esFamiliar === true)
  {
    console.log(`Puede entrar ${relative.nombre}`);
  }
}

for(let i = 0; i < ejercicio2.length; i++)
{
  puedeEntrar(ejercicio2[i]);
}

let serie = 0;
let p = 0;
let s = 1;

for(let x = 0 ; x<50 ; x++)
{
  serie = p + s;
  p = s;
  s = serie;
  console.log(serie)
}


