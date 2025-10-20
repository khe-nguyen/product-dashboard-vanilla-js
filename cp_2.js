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

// Step 5: Display products on the page
function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  // Only show the first 5 products
  const firstFive = products.slice(0, 5);

  firstFive.forEach(function(product) {
    const name = product.fields.name;
    const price = product.fields.price / 100; // Convert cents to dollars
    const image = product.fields.image[0].url;

    // Create product card
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Create image element
    const img = document.createElement("img");
    img.src = image;
    img.alt = name;

    // Create name element
    const title = document.createElement("h3");
    title.textContent = name;

    // Create price element
    const cost = document.createElement("p");
    cost.textContent = "$" + price.toFixed(2);

    // Add all elements to card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(cost);

    // Add card to the container
    container.appendChild(card);
  });
}