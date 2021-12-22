
// dichiaro l'array dei numerio casuali
const numList = [];
// dichiaro l'array dei numeri indovinati
const rightNum = [];

// definisco le variabili di collegamento all'html
const outputHtml = document.querySelector('.numbers');
const result = document.querySelector('.result');

// funzione per generare numeri random
getRandomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

setTimeout(() =>{
    outputHtml.classList.add('d-none');
}, 30000)

// chiedo all'utente di riscrivere i numeri visti a schermo
setTimeout(() => {
    let userNum;
    for(let i = 0; i < 5; i++) {
        userNum = parseInt(prompt('Inserisci uno alla volta i numeri appena visti'));
        if(numList.includes(userNum)) {
            rightNum.push(userNum);
        }
    }
    return userNum;
}, 31000)

setTimeout(() => result.append(`Hai ricordato i seguenti numeri: ${rightNum}, score: ${rightNum.length} / 5`), 32000);

// genero 5 numeri casuali ed unici e li stampo in output
while(numList.length < 5){
    let n = getRandomNumber(1, 100);
    if(!numList.includes(n)){
        numList.push(n);
    }
}
outputHtml.append(`${numList}`);


