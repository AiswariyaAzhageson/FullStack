class Product {
    constructor(public name: string, public price: number, public quantity: number) {}
  }
  
  class ShoppingCart {
    private items = new Map<Product, number>();
  
    addItem(product: Product, quantity: number) {


        if (!this.items.has(product)) {
          this.items.set(product, 0);
        
        (product as Product).quantity -= quantity;
        this.items.set(product, quantity);
      }
      console.log(`${quantity} ${product.name}s added to the cart.`);
    }
  
    checkout() {
      console.log("Checking out items from the cart:");
      for (const [product, quantity] of this.items) {
        console.log(`${quantity} ${product.name}s - $${product.price * quantity}`);
        product.quantity -= quantity;// to reduce the quantity
      }
      this.items.clear(); //Claer of the cart after checkout
    }
  }
  
  // Create some products
  const product1 = new Product("Laptop", 1000, 10);
  const product2 = new Product("Smartphone", 500, 20);
  const product3 = new Product("Tablet", 300, 15);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 2);
  cart.addItem(product2, 1);
  cart.addItem(product3, 3);
  
  // Checkout
  cart.checkout();
  
  // Display updated quantities
  console.log("\nUpdated quantities in stock:");
  console.log(`Quantity of ${product1.name}s in stock: ${product1.quantity}`);
  console.log(`Quantity of ${product2.name}s in stock: ${product2.quantity}`);
  console.log(`Quantity of ${product3.name}s in stock: ${product3.quantity}`);