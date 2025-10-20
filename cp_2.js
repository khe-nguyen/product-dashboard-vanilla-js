// Step 3: Using fetch() and .then()
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(function(response) {
      return response.json(); // Convert response to JSON
    })
    .then(function(data) {
      // Log each product name to console
      data.forEach(function(product) {
        console.log(product.fields.name);
      });
    })
    .catch(function(error) {
      console.log("An error occurred:", error);
    });
}

// Step 4: Using async/await
async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products); // Send data to display function
  } catch (error) {
    handleError(error);
  }
}
