//
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("create-form");
let productImg = document.getElementById("product-img");
let productSizeValue;
let productImage;
let products = productsDB;

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
productImg.addEventListener("change", uploadImage);

// function
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFun(e) {
  e.preventDefault();
  let allProducts = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products")) : products;
  let nameValue = productName.value;
  let descValue = productDesc.value;

  if (nameValue&&descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      qty: 1,
      imageUrl:productImage,
      size: productSizeValue,
      title: nameValue,
      desc: descValue,
      new: "Y",
    };

    let newProducts = allProducts ? [...allProducts , obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    productName.value = "";
    productDesc.value = "";
    productSizeValue.vlaue = "";

    setTimeout(()=> {
      window.location = "index.html"
    } , 500)

  }else {
    alert("Enter Data")
  }

}

// upload Image
let preview;
function uploadImage() {
  let file = this.files[0];

  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("Image type not supported")
    return
  }

  if (file.size > 2 * 1024 *1024) {
    alert("Image size must be less than 2MB");
    return
  }
  getImageBase64(file);
  // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImage = reader.result;

  };
  reader.onerror = function() {
    alert("Error !!")
  }
}
