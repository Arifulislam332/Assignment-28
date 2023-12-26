"use strict";
// asynchronous javascript
// single threaded

const productContainer = document.querySelector(".products__container");

fetch("https://dummyjson.com/products")
  .then((response) => {
    if (!response.ok) throw new Error("Something is went to wrong!");
    return response.json();
  })
  .then((data) => {
    renderDate(data.products);
  })
  .catch((err) => {
    renderError(err.message);
  });

function renderDate(products) {
  products.forEach((product) => {
    const template = `
      <h1>${product.id}</h1>
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
    `;

    const el = document.createElement("div");
    el.innerHTML = template;
    productContainer.append(el);
  });
}

function renderError(message) {
  const el = document.createElement("p");
  el.textContent = message;
  productContainer.append(el);
}
