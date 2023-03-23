/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const names = [
    'paOlo',
    'FaBBBBio',
    'giOvanni',
    'mUCIACCIA',
    'ROCCO',
    'CaToNe'
]

/* const toUpperCase = names[0].toUpperCase() + str.slice(1);

console.log(toUpperCase); */

names.forEach((word) => {
    const lowcase = word.slice(1)
    const modStr = word[0].toUpperCase() + lowcase.toLowerCase()
    console.log(modStr);
})
