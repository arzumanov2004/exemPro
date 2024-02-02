const products = document.getElementById('products')

function getCartProducts () {
    products.innerHTML= ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <img src=${item.avatar} alt="" style="width: 150px; height: auto;">
            <p>${item.name}</p>
            <p>${item.number} MANAT</p>
            <button onclick="removeFromCart(${index})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Delete</button>
            </div>
            `;
            products.appendChild(box)
    })
}

function removeFromCart (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCartProducts()
}

getCartProducts()