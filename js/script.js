var link = document.querySelector(".form-link");
var popup = document.querySelector(".search-form");
var close = popup.querySelector(".search-form");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (popup.classList.contains("hidden-form")) {
    popup.classList.remove("hidden-form");
  } else {
    popup.classList.add("hidden-form");
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
