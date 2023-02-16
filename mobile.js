// get the value of the mobile increase quantity
let mobilePriceValue = productPrice("mobilePrice");
document.getElementById("mblPlusBtn").addEventListener("click", () => {
  mobileCalculation("mblQuantityField", true);
});

// get the value of the mobile decrease quantity
document.getElementById("mblMinusBtn").addEventListener("click", () => {
  mobileCalculation("mblQuantityField", false);
});
