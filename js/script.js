"use strict";
document.querySelector;
$(document).ready(function () {
  $(".offer").click(function (e) {
    const offer = e.currentTarget;

    const icon = offer.querySelector(".offer__icon");
    const text = offer.querySelector(".offer__text");

    //add and remove hidden class
    icon.classList.toggle("hidden");
    text.classList.toggle("hidden");
  });
});
