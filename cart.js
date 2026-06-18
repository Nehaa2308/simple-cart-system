let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];
function renderCart()
{
    const cartContainer =
    document.getElementById("cart-items-list");

    cartContainer.innerHTML = "";

    if(cart.length === 0)
    {
        cartContainer.innerHTML = `
        
        <div class="empty-cart">

            <h2>Your Cart is Empty 🛒</h2>

            <p>Add some products to continue shopping.</p>

            <button onclick="goHome()">
                Continue Shopping
            </button>

        </div>

        `;

        return;
    }

    cart.forEach(item =>
    {
        cartContainer.innerHTML += `
        
        <div class="cart-item">

            <img src="${item.image}">

            <div class="item-details">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${item.id})">
                    -
                    </button>

                    <span>
                    ${item.quantity}
                    </span>

                    <button onclick="increaseQuantity(${item.id})">
                    +
                    </button>

                </div>

                <button
                class="remove-btn"
                onclick="removeItem(${item.id})">
                🗑 Remove
                </button>

            </div>

        </div>
        
        `;
    });

    calculateSummary();
}

function calculateSummary()
{
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item =>
    {
        subtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });

    let delivery =
    subtotal >= 500 ? 0 : 40;

    let discountPercent = 0;

    if(subtotal >= 100)
    {
        discountPercent = 10;

        document.getElementById("celebration")
        .innerHTML = "🎉 🎊 Discount Applied! 🎊 🎉";
    }
    else
    {
        document.getElementById("celebration")
        .innerHTML = "";
    }

    if(subtotal < 100)
    {
        document.getElementById("offer-message")
        .innerText =
        `Add ₹${100 - subtotal} more to unlock 10% discount`;
    }
    else
    {
        document.getElementById("offer-message")
        .innerText =
        "🎉 10% Discount Applied";
    }

    const saved =
    subtotal * discountPercent / 100;

    const finalAmount =
    subtotal + delivery - saved;

    document.getElementById("total-items")
    .innerText = totalItems;

    document.getElementById("subtotal")
    .innerText = subtotal;

    document.getElementById("discount")
    .innerText = saved.toFixed(2);

    

    document.getElementById("final-amount")
    .innerText = finalAmount.toFixed(2);

    document.getElementById("delivery")
    .innerText =
    delivery === 0
    ? "FREE"
    : delivery;
}



function increaseQuantity(id)
{
    const item =
    cart.find(p => p.id === id);

    item.quantity++;

    saveCart();

    renderCart();
}

function decreaseQuantity(id)
{
    const item =
    cart.find(p => p.id === id);

    item.quantity--;

    if(item.quantity <= 0)
    {
        cart =
        cart.filter(
            p => p.id !== id
        );
    }

    saveCart();

    renderCart();
}

function removeItem(id)
{
    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    renderCart();
}

function saveCart()
{
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

document
.getElementById("checkout-btn")
.addEventListener("click",
function()
{
    alert(
    "Order Placed Successfully!"
    );

    localStorage.removeItem("cart");

    window.location.href =
    "home.html";
});

function goHome()
{
    window.location.href = "home.html";
}

renderCart();

