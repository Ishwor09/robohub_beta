
window.addEventListener("DOMContentLoaded", () => {
  fetch("bag.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("bag").innerHTML = data;
    })
    .catch(error => console.error("Error loading file:", error));
});
window.addEventListener("DOMContentLoaded", () => {
  fetch("kits.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("kits").innerHTML = data;
    })
    .catch(error => console.error("Error loading file:", error));
});

window.addEventListener("DOMContentLoaded", () => {
  fetch("disctict.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("district").innerHTML = data;
    })
    .catch(error => console.error("Error loading file:", error));
});
