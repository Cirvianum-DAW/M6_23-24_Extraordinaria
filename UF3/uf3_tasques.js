// Espera fins que el document estigui carregat completament
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el formulari de tasques
  const taskForm = document.getElementById("task-form");
  // Selecciona l'input de les tasques
  const taskInput = document.getElementById("task-input");
  // Selecciona la llista de tasques
  const taskList = document.getElementById("task-list");

  // Afegeix un esdeveniment de submissió al formulari de tasques
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulari es presenti
    const taskText = taskInput.value.trim(); // Obté el text de la tasca
    if (taskText !== "") {
      addTask(taskText); // Afegeix la tasca a la llista
      taskInput.value = ""; // Neteja l'input de les tasques
    }
  });

  // Afegeix un esdeveniment de clic a la llista de tasques
  taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove(); // Elimina la tasca
    } else if (e.target.classList.contains("task")) {
      e.target.classList.toggle("completed"); // Marca la tasca com a completada
    }
  });

  // Funció per afegir una tasca a la llista
  function addTask(task) {
    const li = document.createElement("li"); // Crea un nou element <li>
    li.className = "flex justify-between items-center p-2 border-b"; // Afegeix classes de Tailwind
    li.innerHTML = `<span class="task">${task}</span><button class="delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Elimina</button>`;
    taskList.appendChild(li); // Afegeix la tasca a la llista
  }
});
