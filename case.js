// get the value of the case increase quantity
let casePriceValue = productPrice("casePrice");
document.getElementById("casePlusBtn").addEventListener("click", () => {
  caseCalculation("caseQuantityField", true);
});

// get the value of the case decrease quantity
document.getElementById("caseMinusBtn").addEventListener("click", () => {
  caseCalculation("caseQuantityField", false);
});
