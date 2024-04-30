"use strict";
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(product, quantity) {
        if (!this.items.has(product)) {
            this.items.set(product, 0);
            product.quantity -= quantity;
            this.items.set(product, quantity);
        }
        console.log(`${quantity} ${product.name}s added to the cart.`);
    }
    checkout() {
        console.log("Checking out items from the cart:");
        for (const [product, quantity] of this.items) {
            console.log(`${quantity} ${product.name}s - $${product.price * quantity}`);
            product.quantity -= quantity;
        }
        this.items.clear();
    }
}
const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Smartphone", 500, 20);
const product3 = new Product("Tablet", 300, 15);
const cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);
cart.checkout();
console.log("\nUpdated quantities in stock:");
console.log(`Quantity of ${product1.name}s in stock: ${product1.quantity}`);
console.log(`Quantity of ${product2.name}s in stock: ${product2.quantity}`);
console.log(`Quantity of ${product3.name}s in stock: ${product3.quantity}`);
//# sourceMappingURL=shoshopping.js.map