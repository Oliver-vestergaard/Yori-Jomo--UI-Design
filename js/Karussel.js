const beltMain = document.querySelector(".BeltMain");
const beltSecondary = document.querySelector(".BeltSekundary");

const arrows = document.querySelectorAll(".belt-arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const showingSecondary = !beltSecondary.classList.contains("hide");

    if (showingSecondary) {
      beltSecondary.classList.add("hide");
      beltMain.classList.remove("hide");
    } else {
      beltMain.classList.add("hide");
      beltSecondary.classList.remove("hide");
    }
  });
});
