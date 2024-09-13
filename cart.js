// Function to add item to local storage
function addToCart(image, title, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = { image, title, price };
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    // Ensure "Add to Cart" buttons are only selected within the relevant context
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            const image = this.parentElement.querySelector('img').src;
            const title = this.parentElement.querySelector('span').textContent;
            // Price may need to be defined or extracted differently depending on the HTML structure
            const price = this.getAttribute('data-product-price') || 'N/A'; // Adjust as needed
            addToCart(image, title, price);
        });
    });
});
