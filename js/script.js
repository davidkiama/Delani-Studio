"use strict";
document.querySelector;
$(document).ready(function () {
  //Display and hide offer text
  $(".offer").click(function (e) {
    const offer = e.currentTarget;

    const icon = offer.querySelector(".offer__icon");
    const text = offer.querySelector(".offer__text");

    //add and remove hidden class
    icon.classList.toggle("hidden");
    text.classList.toggle("hidden");
  });

  //Hover effect on the portfolio
  $(".project").hover(
    (e) => {
      const project = e.currentTarget;
      const projectImg = project.querySelector(".project__img");
      const projectCaption = project.querySelector(".project__title");

      projectImg.classList.add("dull");
      projectCaption.classList.add("displayCaption");
    },
    (e) => {
      const project = e.currentTarget;
      const projectImg = project.querySelector(".project__img");
      const projectCaption = project.querySelector(".project__title");

      projectImg.classList.remove("dull");
      projectCaption.classList.remove("displayCaption");
    }
  );
});
