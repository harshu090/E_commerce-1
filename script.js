// Function to add item to local storage
function addToCart(image, title, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = { image, title, price };
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
}

// Adding event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const image = this.getAttribute('data-product-image');
        const title = this.getAttribute('data-product-title');
        const price = this.getAttribute('data-product-price');
        addToCart(image, title, price);
    });
});

// Function to display cart items
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-container');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartItems.forEach(item => {
        const cartItemHtml = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <span>${item.title}</span>
                    <span class="cart-item-price">$${item.price}</span>
                </div>
            </div>
        `;
        cartContainer.innerHTML += cartItemHtml;
    });
}

// Display cart items on page load if the cart page is being viewed
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
