/*

¡Es hora de poner la navidad en casa!
Creo que ya podemos sacar el gorro navideño, el turrón... ¡Y el árbol de navidad! 🎄 Vamos a montarlo con JavaScript.

¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento "5", se pintaría esto:

/////////////////////////////////////////////////////////
/
/         ____*____
/         ___***___
/         __*****__
/         _*******_
/         *********
/         ____#____
/         ____#____
/
/////////////////////////////////////////////////////////

Creamos un triángulo de asteriscos "*" con la altura proporcionada y, a los lados, usamos el guión bajo "_" para los espacios.
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de "#".

Otro ejemplo con un árbol de altura 3:

/////////////////////////////////////////////////////////
/
/         ____*____
/         ___***___
/         __*****__
/         ____#____
/         ____#____
/
/
/////////////////////////////////////////////////////////

Ten en cuenta que el árbol es un string y necesitas los saltos de línea "\n" para cada línea para que se forme bien el árbol.

*/

export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  if(height > 100) return false

  let leaf = '*'
  let space = '_'
  let log = '#'
  let tree = []
  let result = ''

  for(let i = 0; i < height; i++) {
    tree.push(space.repeat(height - (i*1) - 1))
    tree.push(leaf.repeat(i*2+1))
    tree.push(space.repeat(height - (i*1) - 1))
    tree.push('\n')
  }
  
  for(let i = 0; i < 2; i++) {
    tree.push(space.repeat(height - 1))
    tree.push(log)
    tree.push(space.repeat(height - 1))
    tree.push('\n')
  }
  tree.pop()
  
  result = tree.join('')
  
  return result
}