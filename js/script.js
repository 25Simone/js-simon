let userNum;
// dichiaro l'array dei numerio casuali
const numList = [];
// dichiaro l'array dei numeri indovinati
const rightNum = [];

// definisco le variabili di collegamento all'html
const outputHtml = document.querySelector('.output');

// funzione per generare numeri random
getRandomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

setTimeout(() =>{
    outputHtml.classList.add('d-none');
}, 30000)

// chiedo all'utente di riscrivere i numeri visti a schermo
setTimeout(() => {
    for(let i = 0; i < 5; i++) {
        userNum = parseInt(prompt('Inserisci uno alla volta i numeri appena visti'));
        if(numList.includes(userNum)) {
            rightNum.push(userNum);
        }
    }
}, 31000)

// genero 5 numeri casuali ed unici e li stampo in output
for(let i = 0; i < 5; i++){
    let n = getRandomNumber(1, 100);
    if(!numList.includes(n)){
        numList.push(n);
    }
}
outputHtml.append(`${numList}`);


