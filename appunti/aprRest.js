// fetch();
const x = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Ho contato fino a tre!");
    });
  }, 3000);
};

const start = async function () {
  try {
    await x();
    console.log("fatto!");
  } catch (error) {
    console.log(error);
  }
};
window.onload = start;
// AWAIT metterà in pausa l'esecuzione del codice per potere utilizzare AWIAT dentro la funzione si deve dichiarare
// la funzione come ASYNC
// se la PROMISE va male si chiude la funzione in un try catch
