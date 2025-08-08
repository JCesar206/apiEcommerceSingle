const contenedor = document.getElementById("productos");

fetch("http://localhost:3000/api/productos")
  .then(res => res.json())
  .then(data => {
    contenedor.innerHTML = "";
    data.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.title}" />
        <h2>${prod.title}</h2>
        <p>$${prod.price}</p>
      `;
      contenedor.appendChild(card);
    });
  })
  .catch(err => {
    contenedor.innerHTML = `<p style="color:red;font-weight:bold;">Error al cargar productos</p>`;
    console.error(err);
  });