const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99.99",
        image: "../assets/image/AttackShark/R1_red.png",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$149.99",
        image: "https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Track your fitness and stay connected."
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1589008939637-27a5e3c64b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        description: "Portable speaker with crystal-clear sound."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
        `;
        container.appendChild(productCard);
    });
});
