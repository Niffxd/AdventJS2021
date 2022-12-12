/*

Envuelve regalos con asteriscos

Estamos a fuego envolviendo regalos...
¡pero necesitamos automatizar esto antes de que los elfos decidan ponerse en huelga!
¡Salva la Navidad (otra vez)!

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos,
nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌:

  • Si el array está vacío, devuelve un array vacío
  • Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
  • Por suerte, cada posición del array siempre tiene la misma longitud...

/////////////////////////////////////////////////////////
/
/         wrapGifts(["📷", "⚽️"])
/         /* Resultado:
/         [ '****',
/           '*📷*',
/           '*⚽️*',
/           '****'
/         ]
/         *//*
/         
/         wrapGifts(["🏈🎸", "🎮🧸"])
/         /* Resultado:
/         [ '******',
/           '*🏈🎸*',
/           '*🎮🧸*',
/           '******'
/         ]
/         *//*
/         
/         wrapGifts(["📷"])
/         /* Resultado:
/         [ '****',
/           '*📷*',
/           '****'
/         ]
/         *//*
/
/////////////////////////////////////////////////////////

*/

export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  if(!gifts.length) return []
  const list = []
  for(let gift of gifts){
    list.push('*' + gift + '*')
  }
  list.unshift('*'.repeat(gifts[0].length)  + '**')
  list.push('*'.repeat(gifts[0].length)  + '**')
  return list
}