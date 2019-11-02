var link = document.querySelector(".form-link");
var popup = document.querySelector(".search-form");
var close = popup.querySelector(".search-form");
var form = popup.querySelector("form");

var checkIn = popup.querySelector("[name=checkIn]");
var checkOut = popup.querySelector("[name=checkOut]");
var adultsNumber = popup.querySelector("[name=adultsNumber]");
var childrenNumber = popup.querySelector("[name=childrenNumber]");

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
  if (!checkIn.value || !checkOut.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Заполните все поля");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
