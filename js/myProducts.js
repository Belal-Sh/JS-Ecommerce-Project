let products = JSON.parse(localStorage.getItem('products')) || productsDB
let myProductsList = products.filter((item) => item.new === "Y");
let productsDom = document.querySelector('.products')
let noProductsDom = document.querySelector(".noProducts")


// function
function drawProductsUI(products = []) {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item" style="border:${item.new === "Y" ? "2px solid green" : ""}">
      <img src="${item.imageUrl}" alt="glasses" class="product-item-img">
      <div class="product-item-desc">
        <a onclick='saveItemData(${item.id})'> ${item.title}</a>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span>
        <button class='edit-ptoduct' onclick='editProduct(${item.id})'>Edit Product</button>
        <button class='edit-ptoduct' onclick='deleteProduct(${item.id})'>Delete Product</button>
      </div>
      <div class="product-item-actions">

        <i class="far fa-heart fav${item.id}" onclick = "addToFav(${item.id})" style="color:${(item.favv=="yes")? 'red':''}"></i>

      </div>
    </div>
    `;
  })

  productsDom.innerHTML = productsUI.join(" ");
};

drawProductsUI(myProductsList)



// edit function
function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editProduct.html";
}

// Delete Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem('products')) || productsDB
  let myProductsList = products.filter((item) => item.new === "Y");
  let filtered = myProductsList.filter((i) => i.id !== id);
  drawProductsUI(filtered)

  let removedProduct = myProductsList.find((i) => i.id === id)
  products = products.filter((i) => i.id !== removedProduct.id)

  localStorage.setItem('products', JSON.stringify(products))
}

if (myProductsList.length === 0) {
  noProductsDom.innerHTML = "No Products Added"
}
