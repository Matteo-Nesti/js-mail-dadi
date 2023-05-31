# trace

Mail

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

# steps

- recupero gli elemento dal DOM
- creaiamo una lista di mail
- al click del bottone
  - controllo
  - **SE NON** e' presente nella lista
    - fine
  - **ALTRIMENTI**
    - stampiamo in pagina il messaggio di OK

---

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. Stampare (in
console)

- creare una variabile per il computer
- creare una variabile per il giocatore
- al click del bottone
  - genera un numero casuale da 1 a 6 per il computer
  - genera un numero casuale da 1 a 6 per il giocatore
  - controllo
  - **SE** in numeri usciti sono pari
    - ritira i dadi
  - **ALTRIMENTI SE** il numero lanciato dal computer e` piu alto
    - il computer vince
    - **ALTRIMENTI** vince il giocatore.
