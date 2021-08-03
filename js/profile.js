// User Data
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.new === "Y");

// Variable

let user_Dom = document.getElementById('username');
let userEmailDom = document.getElementById('email');
let productsQtyDom = document.querySelector('#productsQty span')

user_Dom.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if (myProducts.length != 0) {
  productsQtyDom.innerHTML = myProducts.length
}else {
  productsQtyDom.innerHTML = "None"
}
