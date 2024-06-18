document.addEventListener("DOMContentLoaded", function () {
  // Elements del DOM
  const breedSelect = document.getElementById("breed-select");
  const breedInfo = document.getElementById("breed-info");
  const randomImageBtn = document.getElementById("random-image-btn");
  const breedImage = document.getElementById("breed-image");

  // URL de l'API i la clau API
  const apiUrl = "https://api.thedogapi.com/v1";
  const apiKey =
    "live_QiknN4JjzV3UyG0eXaMYO1QesnhDr5Pxjq0Wk2r0udYnGJFs6zFhVoi9pkWRcNTZ";

  // Funció reutilitzable per fer peticions fetch
  async function fetchData(endpoint) {}

  // Funció per obtenir la llista de races de gossos, racces en anglés és "breeds"
  async function fetchBreeds() {
  
  }

  // Funció per omplir el desplegable amb les races de gossos
  function populateBreedSelect() {
    
  }

  // Afegeix un esdeveniment de canvi al desplegable de races
  breedSelect.addEventListener("change", async function (e) {
    const breedId = e.target.value;
    // Aquí pot implementar les crides per obtenir la informació de la raça seleccionada
    // Si la troba a la llista mostra la informació de la raça (displayBreedInfo)
    // Altrament ho amagues simplement (hidden) 

  });

  // Funció per mostrar la informació de la raça seleccionada
  function displayBreedInfo() {
    breedInfo.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${ }</h2>
            <p class="mb-2"><strong>Temperament:</strong> ${ }</p>
            <p class="mb-2"><strong>Life Span:</strong> ${ }</p>
            <img src="${ }" alt="${ }" class="w-full rounded">
        `;
    breedInfo.classList.remove("hidden");
    breedImage.classList.add("hidden");
  }

  // Afegeix un esdeveniment de clic al botó per mostrar una imatge aleatòria
  randomImageBtn.addEventListener("click", async function () {
    
  });

  // Funció per mostrar una imatge de la raça seleccionada
  function displayBreedImage() {

  }

  // Crida inicial per obtenir les races de gossos
  fetchBreeds();
});
