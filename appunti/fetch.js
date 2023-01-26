//Se il Json è nostro @import data from "./.....json"

//funzione, metodo integrato richiede input (url), init? il secondo parametro è opzionale
//funziona anche solo con il primo parametro che è obbligatorio
// input è la risorsa  fa partire una request dal nostro broswer

// fetch("https://jsonplaceholder.typicode.com/albums") // TORNA UNA PROMISE
//   .then(function (res) {
//     // cosa faccio quando va a buon fine

//     console.log("Questa è la risposta (RESPONSE) del server!", res);
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function (data) {
//     console.log(data);
//     //data sono i dati che cercavamo dall'inizio
//   })
//   .catch(function (err) {
//     // cosa faccio quando c'è un errore
//     console.log("E' successo un errore" + err);
//   });

//OTTENGO LA MIA PROMISE CHE TORNA CON UNA RISPSOTA, FETCH VEICOLA INDIETRO LA RICHIESTA CON IL VALORE DI RITORNO
// IL VALORE DI RITORNO Eì LA RESPONSE CHE DIVENTA SEMPRE IL PARAMETRO DI THEN

//  OK   Si verifica in console che OK sia true se è TRUE è andata a buon fine
//  STATUS     Anche status è importante se torna 200 tutto è andato bene se torna 400 o 500 vuol dire che c'è un errore
//400 you screwd up
//500 server screwd up

// L'oggetto della risposta è contenuto in body, si parsa per farlo diventare un oggetto o un array di oggetti

//COME SI OTTIENE IL BODY DALL'OGGETTO RESPONSE if(res.ok) { res.json() } TRASFORMA LO STREAM IN UN OGGETTO

//JSON è un metodo asincrono è una PROMISE e dobbiamo gestirla per ricevere il body

// ********************** ASYNC AWAIT **************************  ASYNC TRY AWAIT CATCH

const asyncAwait = async function () {
  try {
    //
    let response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      console.log("Qualcosa è andato storto con la nostra chiamata");
    }
  } catch (error) {
    console - log(error);
  }
};
asyncAwait();
