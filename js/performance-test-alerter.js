function timeThis() {
  setTimeout(function () {
    var t = performance.timing;
    alert("That selection took: " + (t.loadEventEnd - t.responseEnd) + " millisecs");
  }, 0);
}