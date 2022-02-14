const productTemplate = document.querySelector('[product-template]');
const cardsSection = document.querySelector('.cards')


const httpRequest1 = new XMLHttpRequest();

httpRequest1.onreadystatechange = () => {
    if (httpRequest1.readyState === XMLHttpRequest.DONE) {

            const products = JSON.parse(httpRequest1.responseText);

            

            products.forEach(productElement => {

                const product = productTemplate.content.cloneNode(true).children[0];
                product.querySelector('.card-img-top').src = productElement.image
                product.querySelector('.card-body').textContent = productElement.title
                
                product.querySelector('.card-price').textContent = "$" + productElement.price

                cardsSection.append(product);

            })
        }
    }
httpRequest1.open('GET', 'https://fakestoreapi.com/products');
httpRequest1.send();
