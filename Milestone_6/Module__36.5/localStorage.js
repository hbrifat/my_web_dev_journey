const addProduct = () => {
    const productField = document.getElementById('product-name');

    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    // console.log(product, quantity);
    displayProduct(product, quantity);

    saveProductToLocalStorage(product, quantity);

}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText = `${product} :: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let myCart = {};
    const storedCart = localStorage.getItem('myCart');
    if(storedCart) {
        myCart = JSON.parse(storedCart);
    }
    return myCart;
}


const saveProductToLocalStorage = (product, quantity) => {
    const myCart = getStoredShoppingCart();
    myCart[product] = quantity;
    const stringified = JSON.stringify(myCart);
    console.log(stringified);

    localStorage.setItem('myCart', stringified);    
}
