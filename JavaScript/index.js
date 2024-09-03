const stars = document.querySelectorAll(".star");

let condition = false;

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", function () {
    for (let y = 0; y <= i; y++) {
      if (condition === false) {
        stars[y].classList.add("selected");
      }
    }
  });
  stars[i].addEventListener("mouseout", function () {
    for (let i = 0; i < stars.length; i++) {
      if (condition === false) {
        stars[i].classList.remove("selected");
      }
    }
  });
  stars[i].addEventListener("click", function () {
    for (let z = 0; z <= i; z++) {
      stars[z].classList.add("selected");
    }
    if (condition === false) {
      condition = true;
    } else condition = false;
  });
}

window.onload = function () {
  document.getElementById("prova").value = "";
};
