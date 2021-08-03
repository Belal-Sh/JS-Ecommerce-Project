let products = JSON.parse(localStorage.getItem('products')) || productsDB;
// let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
let viewedItemList = localStorage.getItem('viewedProducts') ? JSON.parse(localStorage.getItem('viewedProducts')):[];
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');
let productDetails = products.find((item) => item.id == productId);
// let viewedId = JSON.parse(localStorage.getItem('productId'));
// let viewedItem = products.filter((i) => i.id == productId);
viewedItemList = [...viewedItemList, productDetails]
// let s = productsInCart.find((item) => item.id == productId);
console.log(productDetails);
localStorage.setItem('viewedProducts', JSON.stringify(viewedItemList))


itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="headphones">
<h2> ${productDetails.title} </h2>
<p>${productDetails.desc}</p>
<span> Size : ${productDetails.size} </span><br>
<span> Quantity : ${productDetails.qty} </span>
<button class='edit-ptoduct' onclick="editProduct(${productId})">Edit Product</button>
`

// edit products
function editProduct(id) {
  localStorage.setItem('editProduct', id);
  window.location = "editProduct.html";
}
