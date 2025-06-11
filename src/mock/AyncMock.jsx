const dbfile = require('./products-database.json');

const getProducts = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching products...");
      if (isError()) {
        reject({ status: "error", message: "Failed to fetch products" });
      } else {
        resolve([
            // Simulated product data
          { id: 1, name: "Product 1", price: 100 },
          { id: 2, name: "Product 2", price: 200 },
          { id: 3, name: "Product 3", price: 300 }
        ]);
      }
    }, 1000);
  });
}


const isError = () => {
    return Math.random() < 0.3;
}