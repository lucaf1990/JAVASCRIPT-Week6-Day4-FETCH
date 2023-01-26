const awaitElements = async function () {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books");

    if (response.ok) {
      let data = await response.json();
      console.log("data", data);
      let cardReference = document.getElementById("main");
      data.forEach((libro) => {
        cardReference.innerHTML = cardReference.innerHTML += `
          <div class="card mt-5 bg-warning " style="width: 18rem; height:40rem">
  <img class="card-img-top mt-3 img-fluid w-100" style="height:420px" src=${libro.img} alt="Card image cap">
  <div class="card-body d-flex flex-column align-items-center justify-content-between  ">
    <h5 class="card-title">${libro.title} </h5>
    <p class="card-text">${libro.asin} </p>
    <a id="skip" href="#" class="btn btn-dark">Skip Book</a>
  </div>
</div>
          `;
      });
    } else {
      console.log("Somenthingh went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

const removeCard = function () {
  let cardReference = document.getElementById("main");
  cardReference.addEventListener("click", function (event) {
    if (event.target.id === "skip") {
      let cardToRemove = event.target.parentNode.parentNode;
      cardToRemove.remove();
    }
  });
};

awaitElements();

removeCard();

let searchForABook = () => {
  let searchInput = document.querySelector("input[type='search']").value;
  let searchButton = document.getElementById("btn");
  searchButton.addEventListener("click", () => {
    let filteredBooks = libri.filter((book) => {
      return book.title.toLowerCase().includes(searchInput.toLowerCase());
    });
  });
};
searchForABook();
