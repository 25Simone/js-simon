// definisco le variabili di collegamento all'html
const outputHtml = document.querySelector('.output');

// funzione per generare numeri random
getRandomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;


// genero 5 numeri casuali e li stampo in output
for(let i = 0; i < 5; i++){
    outputHtml.append(`${getRandomNumber(1, 50)} - `);
}