const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#e3edf7";
    body.style.color = "#000";
    body.body.style.transition = "1s";
  } else {
    body.style.background = "#000";
    body.style.color = "#fff";
    body.style.transition = "1s";
  }
});
