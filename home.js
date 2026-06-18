const products = [
{
    id: 1,
    name: "Milk",
    quantity: "500 ml",
    category: "Dairy",
    description: "Fresh Dairy Milk",
    price: 40,
    image: "images/milk.jpg"
},
{
    id: 2,
    name: "Apple",
    quantity: "200 g",
    category: "Fruits",
    description: "Fresh Red Apples",
    price: 50,
    image: "images/apple.jpg"
},
{
    id: 3,
    name: "Bread",
    quantity: "400 g",
    category: "Bakery",
    description: "Whole Wheat Bread",
    price: 35,
    image: "images/bread.jpg"
},
{
    id: 4,
    name: "Eggs",
    quantity: "6 pcs",
    category: "Dairy",
    description: "Farm Fresh Eggs",
    price: 60,
    image: "images/eggs.jpg"
}
];

let searchTerm = "";
let selectedCategory = "All";

const productsGrid =
document.getElementById("products-grid");

function renderProducts()
{
    const productsGrid =
    document.getElementById("products-grid");

    productsGrid.innerHTML = "";

    const filteredProducts =
products.filter(product =>
{
    const matchesSearch =
    product.name
    .toLowerCase()
    .includes(searchTerm);

    const matchesCategory =
    selectedCategory === "All"
    ||
    product.category === selectedCategory;

    return matchesSearch &&
    matchesCategory;
});

    if(filteredProducts.length === 0)
    {
        productsGrid.innerHTML =
        "<h3>No products found.</h3>";

        return;
    }

    filteredProducts.forEach(product =>
    {
        const cartItem =
        cart.find(item => item.id === product.id);

        productsGrid.innerHTML += `
        
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="product-quantity"> ${product.quantity} </p>

            <p>${product.description}</p>

            <h4>₹${product.price}</h4>

            ${
                cartItem
                ?
                `
                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${product.id})">-</button>

                    <span>${cartItem.quantity}</span>

                    <button onclick="increaseQuantity(${product.id})">+</button>

                </div>
                `
                :
                `
                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>
                `
            }

        </div>
        `;
    });
}

let cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

function addToCart(id)
{
    const product =
    products.find(item => item.id === id);

    cart.push({
        ...product,
        quantity: 1
    });

    saveCart();
    console.log(cart);
    updateCartCount();
    renderProducts();
}

function increaseQuantity(id)
{
    const item =
    cart.find(product => product.id === id);

    item.quantity++;

    saveCart();
    updateCartCount();
    renderProducts();
}

function decreaseQuantity(id)
{
    const item =
    cart.find(product => product.id === id);

    item.quantity--;

    if(item.quantity === 0)
    {
        cart =
        cart.filter(product =>
            product.id !== id
        );
    }

    saveCart();
    updateCartCount();
    renderProducts();
}

function filterProducts(category)
{
    selectedCategory = category;

    renderProducts();
}

function saveCart()
{
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function updateCartCount()
{
    let total = 0;

    cart.forEach(item =>
    {
        total += item.quantity;
    });

    document.getElementById("cart-count")
    .innerText = total;
}

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", function()
{
    searchTerm =
    this.value.toLowerCase();

    renderProducts();
});

function startShopping()
{
    document.getElementById("products")
    .scrollIntoView({
        behavior: "smooth"
    });
}

function goToCart()
{
    window.location.href = "cart.html";
}

updateCartCount();
renderProducts();
