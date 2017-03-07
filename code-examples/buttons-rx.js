var basketItemDiv = document.getElementById("basket-item");
var basketItemQuantity = basketItemDiv.getElementsByClassName("quantity")[0];

var click$ = Rx.Observable.fromEvent(basketItemDiv, "click");

var itemQuantity$ = click$
  // Ignore non-button clicks
  .filter(function(event) {
    return event.target.tagName === "BUTTON";
  })
  // Get the button text as a number
  .map(function(event) {
    return Number(event.target.innerHTML);
  })
  // .startWith(0)
  // Update the state
  .scan(
    function(itemQuantity, value) {
      return Math.max(itemQuantity + value, 0);
    },
    0
  );

// Update the UI
itemQuantity$.subscribe(function(x) {
  basketItemQuantity.innerHTML = x;
});
