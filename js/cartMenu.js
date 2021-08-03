let productsDoms = document.querySelector(".products");
let cartProductMenu = document.querySelector(".cart-products");
let cartProductDivDoms = document.querySelector(".cart-products div");
let shoppingCartIcon = document.querySelector('.shoppingCart');
let qtyDom = document.querySelector(".qty");



shoppingCartIcon.addEventListener('click', openCartPage);
// Check if there is items in localStorage
let addedItem = localStorage.getItem('productsInCart') ?
  JSON.parse(localStorage.getItem('productsInCart')) : [];
if (addedItem) {
  addedItem.map(item => {
    cartProductDivDoms.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  })
  qtyDom.style.display = "block";
  qtyDom.innerHTML = addedItem.length;
}

function openCartPage() {
  if (cartProductDivDoms.innerHTML != "") {
    if (cartProductMenu.style.display == 'block') {
      cartProductMenu.style.display = 'none';
    } else {
      cartProductMenu.style.display = 'block';
    }
  }
}
