const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");

  if (searchBar.classList.contains("active")) {
    searchBar.focus();
  }
});

/***** CART  */

const openCart = document.querySelector(".openCart");
const cart = document.querySelector(".CartSection");

openCart.addEventListener("click", (event) => {
  event.preventDefault();
  cart.classList.add("active");
});

const closeCart = document.querySelector(".closeCart");

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});
