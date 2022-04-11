function numberClick(a) {
  document.getElementById("input-display").value += a;
}
function clearDisplay() {
  document.getElementById("input-display").value = "";
}
function calculate() {
  document.getElementById("input-display").value = eval(
    document.getElementById("input-display").value
  );
}
function deleteLast() {
  document.getElementById("input-display").value = document
    .getElementById("input-display")
    .value.slice(0, -1);
}
