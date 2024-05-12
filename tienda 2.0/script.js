//funcionalidad del carrito
document.addEventListener("DOMContentLoaded", function() {
    const cartBtn = document.getElementById('cartBtn');
    const modal = document.getElementById('cartModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const products = document.getElementsByClassName('product');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    let cart = [];
 //cuando el usuario de click
    cartBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);


    for (let i = 0; i < products.length; i++) {
        products[i].querySelector('.buyBtn').addEventListener('click', addToCart);
    }

    
    function openModal() {
        updateCart();
        modal.style.display = 'block';
    }
    function closeModal() {
        modal.style.display = 'none';
    }

    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }

    function addToCart(e) {
        const product = e.target.parentElement;
        const productInfo = {
            name: product.querySelector('img').alt,
            price: parseFloat(product.querySelector('p').textContent.replace('Precio: $', '')),
        };
        cart.push(productInfo);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const item = document.createElement('div');
            item.innerHTML = `${cart[i].name} - $${cart[i].price.toFixed(2)} <button class="removeBtn" data-index="${i}">Eliminar</button>`;
            cartItems.appendChild(item);
            total += cart[i].price;
        }
        totalPrice.textContent = `$${total.toFixed(2)}`;
        const removeButtons = document.getElementsByClassName('removeBtn');
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', removeFromCart);
        }
    }

    function removeFromCart(e) {
        const index = parseInt(e.target.dataset.index);
        cart.splice(index, 1);
        updateCart();
    }
});


//aviso exitosamente

var btn = document.getElementById("agregarAlCarrito");
var modal = document.getElementById("myModal");

// Cuando se haga clic en el botón, mostrar la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en cualquier lugar fuera de la ventana modal, cerrarla
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

 } }
 buyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        setTimeout(openCheckoutModal, 2000); // Abre la ventana modal de pago después de 2 segundos
    });