console.log('JS OK')
// recupero elementi dal DOM
const inputContainerElement = document.getElementById('containerInput')
const inputElement = document.getElementById('inputEmail')
const buttonElement = document.getElementById('btnAccess')
const message = document.getElementById('welcomebackMessage')

// creo lista Email 
const emails = ['matteo.nesti@hotmail.com', 'nutellabiscuits@hgmail.com', 'gengiskhan@libero.it' ]


// entro in ascolto del bottone

// default message
let isValid = 'Hai sbagliato, Riprova!!';

buttonElement.addEventListener('click', function() {
// control all mail
    for (let i = 0; i < emails.length; i++) {
        //conditions
        if (emails[i] === inputElement.value) {
            isValid = 'Bentornato'
            inputContainerElement.classList.add('d-none')
        }
    }
    //print
    message.innerText = isValid
}) 

