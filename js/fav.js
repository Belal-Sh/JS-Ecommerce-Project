// let productsInCart = localStorage.getItem('productsInCart')
let favDom = document.querySelector(".fav-items");
let noProductsDom = document.querySelector(".noProducts")


function drawFavProductsUI(allProducts = []) {

  if(JSON.parse(localStorage.getItem("favouriteItems")).length === 0){
    noProductsDom.innerHTML = "Favourites is Empty"
    localStorage.removeItem('products')
  }

  let favProducts = JSON.parse(localStorage.getItem('favouriteItems')) || allProducts;
  let favProductsUI = favProducts.map((item) => {
    return `
    <div class="product-item">
      <img src="${item.imageUrl}" alt="glasses" class="product-item-img">
      <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span><br>
        <span>Quantity : ${item.qty}</span>

      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick = "removeFromFav(${item.id})">Remove from Favourite</button>
        <i class="far fa-heart favorite"></i>
      </div>
    </div>
    `;
  })

  favDom.innerHTML = favProductsUI.join(" ");

}

drawFavProductsUI()


function removeFromFav(id) {
  let productsInFav = localStorage.getItem('favouriteItems')
  if (productsInFav) {
    let items = JSON.parse(productsInFav);
    let filteredItems = items.filter((item) => item.id !== id)
    localStorage.setItem('favouriteItems', JSON.stringify(filteredItems))

    drawFavProductsUI(filteredItems);

  }
}
