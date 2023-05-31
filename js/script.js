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

    // verifica
    if (emails.indexOf(inputElement.value) === -1) {
        alert('la tua mail non esiste, perfavore iscriviti!!')
        return
    }

    // stampo in pagina
    
    inputContainerElement.classList.add('d-none')
    message.innerText = 'Ben Tornato!!'
  
}) 
    

