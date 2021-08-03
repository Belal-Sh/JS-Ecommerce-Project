// let productsInCart = localStorage.getItem('productsInCart')
let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts")


function drawCartProductsUI(allProducts = []) {

  if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
    noProductsDom.innerHTML = "Cart is Empty"
  }

  let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
  let productsUI = products.map((item) => {
    return `
    <div class="product-item">
      <img src="${item.imageUrl}" alt="glasses" class="product-item-img">
      <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>Size: ${item.size}</span><br>
        <span>Quantity : ${item.qty}</span>

      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick = "removeFromCart(${item.id})">Remove from Cart</button>
        <i class="far fa-heart favorite"></i>
      </div>
    </div>
    `;
  })

  productsDom.innerHTML = productsUI.join(" ");

}

drawCartProductsUI()

function removeFromCart(id) {
  let productsInCart = localStorage.getItem('productsInCart')
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id)
    localStorage.setItem('productsInCart', JSON.stringify(filteredItems))
    drawCartProductsUI(filteredItems);

  }
}
