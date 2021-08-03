// Define Products
let productsDom = document.querySelector(".products");
let cartProductDivDom = document.querySelector(".cart-products div");
let productss = productsDB;

// Display Products
let drawProductsUI
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item" style="border:${item.new === "Y" ? "2px solid green" : ""}">
      <img src="${item.imageUrl}" alt="glasses" class="product-item-img">
      <div class="product-item-desc">
        <a onclick='saveItemData(${item.id})'> ${item.title}</a>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span>
        <div>${item.new === "Y" ? "<button class='edit-ptoduct' onclick='editProduct("+item.id+")' > Edit Product</button>":"" }</div>
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick = "addedToCart(${item.id})">Add to Cart</button>
        <i class="far fa-heart fav${item.id}" onclick = "addToFav(${item.id})" style="color:${(item.favv=="yes")? 'red':''}"></i>

      </div>
    </div>
    `;
  })

  productsDom.innerHTML = productsUI.join(" ");
})(JSON.parse(localStorage.getItem('products')) || productss);

// Add to Cart
function addedToCart(id) {
  if (localStorage.getItem('username')) {
    let products = JSON.parse(localStorage.getItem("products")) || productss;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addedItem.some((i) => i.id === product.id)

    if (isProductInCart) {
      addedItem = addedItem.map((p) =>{
        if (p.id === product.id) p.qty +=1;
        return p;
      });
    }else {
      addedItem.push(product)
    }

    // UI
    cartProductDivDom.innerHTML = ""
    addedItem.forEach(item => {
      cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });

    // save data
    localStorage.setItem('productsInCart', JSON.stringify(addedItem))

    // Add counter of items
    let cartProductsLength = document.querySelectorAll(".cart-products div p");
    qtyDom.style.display = "block";
    qtyDom.innerHTML = cartProductsLength.length;
  } else {
    window.location = "login.html"
  }
}

// no use
function getUniqueArr(arr, filterType) {
  let unique = arr
    .map ((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item])

  return unique
}


function saveItemData(id) {
  localStorage.setItem('productId', id)
  window.location = "cartDetails.html"
}


// Serach function
let input = document.getElementById('search');
let products = JSON.parse(localStorage.getItem("products")) || productss
input.addEventListener("keyup", function (e) {
    search(e.target.value, products)

  if (e.target.value.trim() === "") {
    drawProductsUI(JSON.parse(localStorage.getItem("products")))
  }

});

function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 )
  drawProductsUI(arr)
  console.log(arr)
}

// favourite filter
function filteration (obj, arr){
  let i;
  for ( i = 0; i < arr.length; i++) {
      if (arr[i].id === obj.id) {
        return false
      }
  }
  return true
}

// Favourite
let favItemList = localStorage.getItem("favouriteItems")
? JSON.parse(localStorage.getItem("favouriteItems")) : [];
function addToFav(favId) {
  let favourites=localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products")) : productss;

  let favItem = favourites.find((item)=> item.id == favId);
  let favDom = document.querySelector(".fav"+favItem.id)
  // console.log(filteration(favItem, favItemList))
  if (filteration(favItem, favItemList)) {
    favItemList.push(favItem);
    favItem.favv = "yes";
    favDom.style.color ="red"
  }
  localStorage.setItem("favouriteItems",JSON.stringify(favItemList))
  localStorage.setItem("products",JSON.stringify(favourites))
  drawProductsUI(favourites)
}

// Filter by Size

let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getFilteredProductsBySize);

function getFilteredProductsBySize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem('products')) || productss;

  if (val === "all") {
    drawProductsUI(products)
  }else {
    products = products.filter((i) => i.size === val);
    drawProductsUI(products);
  }
}

// edit function
function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editProduct.html";
}
