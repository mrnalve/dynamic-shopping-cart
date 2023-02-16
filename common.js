// update mobile and case quantity
function updateQuantity(id, increase) {
  const inputQuantity = document.getElementById(id);
  const inputQuantityString = inputQuantity.value;
  const previousInputQuantity = parseInt(inputQuantityString);
  if (increase) {
    inputQuantity.value = previousInputQuantity + 1;
  } else {
    inputQuantity.value = previousInputQuantity - 1;
    if (inputQuantity.value < 0) {
      inputQuantity.value = 0;
    }
  }
  return inputQuantity.value;
}

// get the value of product price
function productPrice(productPrice) {
  let price = document.getElementById(productPrice);
  let priceValue = parseInt(price.innerText);
  return priceValue;
}

// update mobile and case subtotal price
function updateSubtotal() {
  let subtotal = document.getElementById("subtotal");
  return (subtotal.innerText =
    parseInt(mobilePrice.innerText) + parseInt(casePrice.innerText));
}

// update mobile and case tax
function tax() {
  let tax = document.getElementById("tax");
  let subtotalAmount = updateSubtotal();
  let taxAmount = parseInt(subtotalAmount) * 0.1;
  return (tax.innerText = taxAmount.toFixed(2));
}

// update total amount of products
function total() {
  let total = document.getElementById("total");
  let subtotalAmount = updateSubtotal();
  let taxAmount = tax();
  return (total.innerText = parseInt(subtotalAmount) + parseInt(taxAmount));
}

// mobile calculation
function mobileCalculation(quantityField, trueFalse) {
  let quantity = parseInt(updateQuantity(quantityField, trueFalse));
  mobilePrice.innerText = quantity * mobilePriceValue;
  updateSubtotal();
  tax();
  total();
}

// case calculation
function caseCalculation(quantityField, trueFalse) {
  let quantity = updateQuantity(quantityField, trueFalse);
  casePrice.innerText = quantity * casePriceValue;
  updateSubtotal();
  tax();
  total();
}
