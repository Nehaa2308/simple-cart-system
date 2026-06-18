# Simple Cart and Discount System

## Project Overview

The Simple Cart and Discount System is a frontend web application. The application simulates a basic e-commerce shopping experience where users can browse products, search and filter items, add products to a cart, manage quantities, and view an order summary with discount calculations.

The project focuses on providing a clean and user-friendly shopping experience while demonstrating frontend development skills, problem-solving ability, and effective use of AI-assisted development tools.

---

## Features

### Product Management

* Display products with images, quantity information, descriptions, and prices
* Search products by name
* Filter products by category
* Responsive product cards

### Cart Functionality

* Add products to cart
* Increase and decrease product quantities
* Remove products from cart
* Automatic cart item count update
* Cart data persistence using Local Storage

### Order Summary

* Display total number of items
* Calculate subtotal
* Apply a 10% discount on orders above ₹100
* Display discount amount
* Calculate final payable amount
* Display promotional messages when discount criteria are met

### User Experience

* Interactive hero banner with promotional offers
* Empty cart handling
* Responsive and clean user interface
* Smooth navigation between Home and Cart pages

---

## Technology Stack

* HTML
* CSS
* JavaScript 
* Local Storage API

---

## Project Structure

```text
SimpleCartProject/

├── home.html
├── cart.html
├── home.css
├── home.js
├── cart.js
├── README.md
└── images/
```

---

## Setup and Run Instruction

### Downloading the Project

#### Option 1: Download ZIP

1. Open the GitHub repository.
2. Click on **Code**.
3. Select **Download ZIP**.
4. Extract the ZIP file to a desired location on your system.

#### Option 2: Clone Repository

If Git is installed:

```bash
git clone https://github.com/Nehaa2308/simple-cart-system.git
```

Navigate to the project folder after cloning.

---

### Opening the Project

1. Launch Visual Studio Code.
2. Click **File → Open Folder**.
3. Select the project folder.
4. Verify that all project files and the images folder are present.

#### Project Structure

```text
simple-cart-system/

├── home.html
├── cart.html
├── home.css
├── home.js
├── cart.js
├── README.md
└── images/
```

---

### Running the Application

#### Method 1: Direct Browser Execution

1. Right-click **home.html**.
2. Select **Open With**.
3. Choose your preferred web browser.

The application homepage will open automatically.

#### Method 2: Using VS Code Live Server (Recommended)

1. Install the **Live Server** extension in Visual Studio Code.
2. Open the project folder.
3. Right-click **home.html**.
4. Select **Open with Live Server**.

The application will launch in your default browser.

---

### Using the Application

1. Browse available grocery products.
2. Use the search bar to search for products.
3. Filter products using category filters.
4. Click **Add to Cart** to add items.
5. Use the **+** and **−** buttons to modify quantities.
6. Click the cart icon to view selected items.
7. Review the order summary.
8. Receive a **10% discount** on orders above **₹100**.
9. Click **Checkout** to complete the simulated order process.

---

## Assumptions Made During Development

* Product information is maintained locally within the application.
* A flat 10% discount is applied for eligible orders.
* Local Storage is used to maintain cart information across page refreshes.
* Checkout functionality is simulated for demonstration purposes.
* The application is intended as a frontend prototype and does not include backend integration.

---

## AI-Assisted Development Note

During the development of this project, I used ChatGPT as an AI-assisted development tool. It helped me with application planning, UI improvements, JavaScript logic implementation, debugging, cart management functionality, discount calculations, and documentation preparation.

The use of AI assistance accelerated development while allowing me to understand, customize, and validate the generated solutions. Some challenges encountered during development included managing cart state across multiple pages, implementing quantity controls, handling Local Storage updates correctly, and ensuring accurate discount calculations. These challenges were resolved through testing, debugging, and iterative improvements.

---

## Future Enhancements

* Backend integration with a database
* User authentication and login
* API-based product management
* Order history tracking
* Payment gateway integration
* Coupon and promotional code support
* Inventory management system

---

## Author

Nehaa Sanchithi H

