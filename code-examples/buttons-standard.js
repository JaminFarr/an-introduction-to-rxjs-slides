var basketItemDiv = document.getElementById("basket-item");
var basketItemQuantity = basketItemDiv.getElementsByClassName("quantity")[0];

// State
var itemQuantity = 0;

setQuantity(itemQuantity);

basketItemDiv.addEventListener("click", function(event) {
  // Ignore non-button clicks
  if (event.target.tagName != "BUTTON") return;

  // Get the button text as a number
  var value = Number(event.target.innerHTML);

  // Update the state
  setQuantity(itemQuantity + value);
});

function setQuantity(value) {
  // Update the state
  itemQuantity = Math.max(value, 0);

  // Update the UI
  basketItemQuantity.innerHTML = itemQuantity;
}
