function solve() {
    const shoppingCart = document.getElementsByClassName('shopping-cart')[0];
    shoppingCart.addEventListener('click', onClick);
    const checkoutButton = document.getElementsByClassName('checkout')[0];
    checkoutButton.addEventListener('click', checkout);

    const cart = [];
    const output = document.getElementsByTagName('textarea')[0];
    output.value = '';

    function onClick(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.classList.contains('add-product')) {
            const product = ev.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            cart.push({
                name,
                price
            });

            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        }
    }

    function checkout() {
        const product = new Set();
        cart.forEach(p => product.add(p.name));

        const total = cart.reduce((t, c) => t + c.price, 0);
        output.value += `You bought ${[...product.keys()].join(', ')} for ${total.toFixed(2)}.`
        shoppingCart.removeEventListener('click', onClick);
        checkoutButton.removeEventListener('click', checkout)
    }
}