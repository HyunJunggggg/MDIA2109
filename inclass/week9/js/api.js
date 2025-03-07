const API_URL =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

let $button = document.querySelector(".api__header-button");

//fetch() is an async function
// In class - const fetchProducts = fetch(API_URL);

// fetch() , . json() are both async functions
//any async function Always returns a promise object
// {status: ... , value: ... }
// In class console.log(fetchProducts);

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    // await keyword - pause and don't do anything promise
    // console.log("response");
    const products = await response.json();
    console.log(products);
    // console.log(products[0].name);
  } catch (error) {
    console.log(`Could not get products: ${error}!`);
  }
}

$button.addEventListener("click", () => {
  fetchProducts();
});
