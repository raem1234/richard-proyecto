const products = [
  { name: "Camisa Azul", price: 20, imageUrl: "https://i.pinimg.com/236x/de/d3/24/ded324461aa11570211fd01955547754.jpg",  },
  { name: "Camisa Roja", price: 25, imageUrl: "https://i.pinimg.com/236x/ed/47/08/ed47082d673e56d1693629bb0f4fd270.jpg" },
  { name: "Camisa Verde", price: 22, imageUrl: "https://i.pinimg.com/236x/0d/1b/53/0d1b53b9c79b9912b7af8f56c92f8c72.jpg", },
  { name: "Camisa Blanca", price: 18, imageUrl: "https://i.pinimg.com/236x/68/27/8e/68278eaaec389b7a7334d4e9798eecaf.jpg", },

  { name: "Camisa Azul", price: 40, imageUrl: "https://i.pinimg.com/236x/de/d3/24/ded324461aa11570211fd01955547754.jpg",  },
  { name: "Camisa Roja", price: 50, imageUrl: "https://i.pinimg.com/236x/ed/47/08/ed47082d673e56d1693629bb0f4fd270.jpg" },
  { name: "Camisa Verde", price: 42, imageUrl: "https://i.pinimg.com/236x/0d/1b/53/0d1b53b9c79b9912b7af8f56c92f8c72.jpg", },
  { name: "Camisa Blanca", price: 38, imageUrl: "https://i.pinimg.com/236x/68/27/8e/68278eaaec389b7a7334d4e9798eecaf.jpg", },
];

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartTotalModal = document.getElementById("cart-total-modal");

// Función para mostrar los productos en la página
function displayProducts(products) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Función para agregar un elemento al carrito
function addToCart(name, price) {
  const item = document.createElement("li");
  item.textContent = `${name} - $${price.toFixed(2)}`;
  cartItems.appendChild(item);

  const totalPrice = Array.from(cartItems.children).reduce((acc, item) => {
    const price = parseFloat(item.textContent.split("$")[1]);
    return acc + price;
  }, 0);

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  cartTotalModal.textContent = `Total: $${totalPrice.toFixed(2)}`;

  modal.style.display = "block";
}

//  cerrar el modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Mostrar productos al cargar la página
displayProducts(products);
