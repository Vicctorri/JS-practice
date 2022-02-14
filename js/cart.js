let cart = document.querySelectorAll('.card-footer');


for (let i=0; i < cart.length; i++) {  
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    console.log(product);
    const productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    console.log(productNumbers);

    if( productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}


onLoadCartNumbers();