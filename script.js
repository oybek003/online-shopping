const kartochki = document.getElementById('kartochki');
const cartList = document.getElementById("cart");
const totalPrice = document.getElementById("total");

let total = 0;

fetch('https://fakestoreapi.com/products?limit=10')
.then(response => response.json())
.then(data => {
    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description.slice(0, 100)}...</p>
            <p style="color: green; font-size: 24px;">$${product.price}</p>
            <button style="background-color: green; color: white; border: none; height: 28px;" onclick="addToCart('${product.title}', ${product.price})">Добавить</button>
        `;
        kartochki.appendChild(card);
    });
});

function addToCart(name, price) {
    let item = document.createElement("li");
    item.textContent = name + " - $" + price;    
    cartList.appendChild(item);

    total += price;
    totalPrice.textContent = total;

    alert("цена: $" + price);
}