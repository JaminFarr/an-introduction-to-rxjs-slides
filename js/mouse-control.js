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
    if (e.ctrlKey || e.buttons === 1) return;

    e.preventDefault();
    if (e.buttons === 4) reveal.next();
    if (e.buttons === 2) reveal.prev();
  }
}
