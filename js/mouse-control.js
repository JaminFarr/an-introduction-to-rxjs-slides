function setupMouseControl(reveal) {
  window.addEventListener(
    "contextmenu",
    function(e) {
      if (e.ctrlKey) return;
      e.preventDefault();
    },
    false
  );
  window.addEventListener("mousedown", handleClick, false);

  function handleClick(e) {
    if (e.ctrlKey) return;

    e.preventDefault();
    if (e.button === 0) reveal.next();
    if (e.button === 2) reveal.prev();
  }
}
