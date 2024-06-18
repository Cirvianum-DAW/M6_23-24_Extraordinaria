document.addEventListener("DOMContentLoaded", function () {
  const breedSelect = document.getElementById("breed-select");
  const breedInfo = document.getElementById("breed-info");
  const randomImageBtn = document.getElementById("random-image-btn");
  const breedImage = document.getElementById("breed-image");

  // URL de l'API i la clau API
  const apiUrl = "https://api.thedogapi.com/v1";
  const apiKey =
    "live_QiknN4JjzV3UyG0eXaMYO1QesnhDr5Pxjq0Wk2r0udYnGJFs6zFhVoi9pkWRcNTZ";

  // Funció reutilitzable per fer peticions fetch
  async function fetchData(endpoint) {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        headers: {
          "x-api-key": apiKey,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Funció per obtenir la llista de races de gossos
  async function fetchBreeds() {
    const breeds = await fetchData("/breeds");
    populateBreedSelect(breeds);
  }

  // Funció per omplir el desplegable amb les races de gossos
  function populateBreedSelect(breeds) {
    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  }

  // Afegeix un esdeveniment de canvi al desplegable de races
  breedSelect.addEventListener("change", async function (e) {
    const breedId = e.target.value;
    if (breedId) {
      const breed = await fetchData(`/breeds/${breedId}`);
      const image = await fetchData(`/images/${breed.reference_image_id}`);
      displayBreedInfo(breed, image);
      randomImageBtn.classList.remove("hidden");
    } else {
      breedInfo.classList.add("hidden");
      randomImageBtn.classList.add("hidden");
      breedImage.classList.add("hidden");
    }
  });

  // Funció per mostrar la informació de la raça seleccionada
  function displayBreedInfo(breed, image) {
    breedInfo.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${breed.name}</h2>
            <p class="mb-2"><strong>Temperament:</strong> ${breed.temperament}</p>
            <p class="mb-2"><strong>Life Span:</strong> ${breed.life_span}</p>
            <img src="${image.url}" alt="${breed.name}" class="w-full rounded">
        `;
    breedInfo.classList.remove("hidden");
    breedImage.classList.add("hidden");
  }

  // Afegeix un esdeveniment de clic al botó per mostrar una imatge aleatòria
  randomImageBtn.addEventListener("click", async function () {
    const breedId = breedSelect.value;
    if (breedId) {
      const images = await fetchData(`/images/search?breed_id=${breedId}`);
      displayBreedImage(images[0]);
    }
  });

  // Funció per mostrar una imatge de la raça seleccionada
  function displayBreedImage(image) {
    breedImage.innerHTML = `<img src="${image.url}" alt="Random ${
      breedSelect.options[breedSelect.selectedIndex].text
    }" class="w-full rounded">`;
    breedImage.classList.remove("hidden");
  }

  // Crida inicial per obtenir les races de gossos
  fetchBreeds();
});
