document.addEventListener("DOMContentLoaded", function() {
    const booksContainer = document.getElementById('books-container');
    const libros = [
        { 
            titulo: "El Principito",
            autor: "Antoine de Saint-Exupéry",
            imagen: "https://via.placeholder.com/150",
            precio: 10.99
        },
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            imagen: "https://via.placeholder.com/150",
            precio: 12.99
        },
        {
            titulo: "Harry Potter y la piedra filosofal",
            autor: "J.K. Rowling",
            imagen: "https://via.placeholder.com/150",
            precio: 14.99
        }
    ];
    libros.forEach(libro => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <h2>${libro.titulo}</h2>
            <p>Autor: ${libro.autor}</p>
            <p>Precio: $${libro.precio}</p>
            <button onclick="comprar('${libro.titulo}', ${libro.precio})">Comprar</button>
        `;
        booksContainer.appendChild(bookDiv);
    });
});
function comprar(titulo, precio) {
    alert(`Has comprado "${titulo}" por $${precio}`);
}