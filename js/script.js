console.log('JS OK')
// recupero elementi dal DOM
const inputContainerElement = document.getElementById('containerInput')
const inputElement = document.getElementById('inputEmail')
const buttonElement = document.getElementById('btnAccess')
const message = document.getElementById('welcomebackMessage')

// creo lista Email 
const emails = ['matteo.nesti@hotmail.com', 'nutellabiscuits@hgmail.com', 'gengiskhan@libero.it' ]


// entro in ascolto del bottone


buttonElement.addEventListener('click', function() {

    let isValid = 'Hai sbagliato, Riprova!!';

    const email = inputElement.value.trim()

    for (let i = 0; i < emails.length; i++) {
        if (emails[i] === email) {
            isValid = 'Bentornato'
            inputContainerElement.classList.add('d-none')
        }
    }
    message.innerText = isValid
}) 

