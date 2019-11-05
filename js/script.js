var link = document.querySelector(".form-link");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");

var checkIn = popup.querySelector("[name=check-in-date]");
var checkOut = popup.querySelector("[name=check-out-date]");
var adultsNumber = popup.querySelector("[name=adults-number]");
var childrenNumber = popup.querySelector("[name=children-number]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (popup.classList.contains("hidden-form")) {
    popup.classList.remove("hidden-form");
  } else {
    popup.classList.add("hidden-form");
  }
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Заполните все поля");
  }
});

window.onload = function() {
  if (popup.classList.contains("hidden-form")) {
    popup.classList.add("hidden-form");
  }
}
;

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
