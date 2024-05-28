document.addEventListener("DOMContentLoaded", function() {
  const libros = [
    { titulo: "El nombre del viento", autor: "Patrick Rothfuss", año: 2007, precio: 20 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, precio: 25 },
    { titulo: "1984", autor: "George Orwell", año: 1949, precio: 18 },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, precio: 22 },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, precio: 15 },
    { titulo: "Crimen y castigo", autor: "Fyodor Dostoevsky", año: 1866, precio: 30 }
  ];

  
  function mostrarLibros() {
    const librosContainer = document.getElementById("libros");
    librosContainer.innerHTML = ""; 

    libros.forEach((libro, index) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");

      const cardInner = document.createElement("div");
      cardInner.classList.add("card");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = libro.titulo;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = `Autor: ${libro.autor}, Año: ${libro.año}, Precio: $${libro.precio}`;

      const comprarBtn = document.createElement("button");
      comprarBtn.classList.add("btn", "btn-primary", "btn-comprar");
      comprarBtn.textContent = "Comprar";
      comprarBtn.dataset.index = index; 

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(comprarBtn);
      cardInner.appendChild(cardBody);
      card.appendChild(cardInner);
      librosContainer.appendChild(card);
    });
  }

  
  mostrarLibros();

  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-comprar")) {
      const index = event.target.dataset.index;
      const libro = libros[index];
      alert(`¡Has comprado "${libro.titulo}" por $${libro.precio}!`);
    }
  });
});
document.getElementById('searchButton').addEventListener('click', function() {
  var searchTerm = document.getElementById('searchInput').value;
  document.getElementById('searchResults').innerHTML = "<p>Resultados para: " + searchTerm + "</p>";
});
