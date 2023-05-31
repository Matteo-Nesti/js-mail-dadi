console.log('JS OK')

// prendo elementi dal DOM
const buttonRandomElement = document.getElementById('btnRandom')
const resultMessageElement = document.getElementById('resultMessage')
const numbersElement = document.getElementById('numbers')

// dischiaro una variabile per un valore massimo
const max = 6;
// ascolto il buttone
buttonRandomElement.addEventListener('click', function(){
    // numero giocatore
    let random = Math.random();
    const playerNumber = Math.floor(random * max) + 1;
    console.log(playerNumber + ' tiro giocatore')
    // numero pc 
    random = Math.random();
    const computerNumber = Math.floor(random * max) + 1;
    console.log(computerNumber + ' tiro CPU')
    // stampo in pagina il risultato
    numbersElement.innerText = `Hai tirato ${playerNumber}, il tuo avversario ha tirato ${computerNumber}`
    // verifica del vincitore
    if (computerNumber === playerNumber) {
        resultMessageElement.innerText = 'Hai pareggiato, ritira il DADO!!'
        return
    }
    else if (computerNumber > playerNumber) {
        resultMessageElement.innerText = 'Mi dispiace hai perso!!'
        return
    }
    resultMessageElement.innerText = 'Hai vinto GG!'
})