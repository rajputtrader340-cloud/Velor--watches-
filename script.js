let cartCount = 0;

function addToCart() {
  cartCount++;

  document.getElementById("cartCount").textContent = cartCount;

  alert("⌚ Watch added to cart!");
}


function filterProducts(category, button) {

  document.querySelectorAll(".filter").forEach(function(btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  document.querySelectorAll(".product").forEach(function(product) {

    if (
      category === "all" ||
      product.dataset.category === category
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}


function subscribe(event) {

  event.preventDefault();

  alert("Thanks for joining VÉLOR! ⌚");

  event.target.reset();
}
