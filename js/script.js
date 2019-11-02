var link = document.querySelector(".form-link");
var popup = document.querySelector(".search-form");
var close = popup.querySelector(".search-form");
var form = popup.querySelector("form");

var check-in-date = popup.querySelector("[name=check-in-date]");
var сheck-out-date = popup.querySelector("[name=check-out-date]");
var adults-number = popup.querySelector("[name=adults-number]");
var children-number = popup.querySelector("[name=children-number]");

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
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!check-in-date.value || !check-out-date.value || !adults-number.value || !children-number.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Заполните все поля");
  }

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
