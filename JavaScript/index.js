// const stars = document.querySelectorAll(".star");

// stars.forEach((star, index) => {
//   star.addEventListener("mouseover", () => {
//     stars.forEach((s, i) => {
//       if (i <= index) {
//         s.classList.add("selected");
//       } else {
//         s.classList.remove("selected");
//       }
//     });
//   });

//   star.addEventListener("mouseout", () => {
//     stars.forEach((s) => {
//       s.classList.remove("selected");
//     });
//   });
// });

const stars = document.querySelectorAll(".star");

let currentLitIndex = -1;

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("selected");
      } else {
        s.classList.remove("selected");
      }
    });
  });

  star.addEventListener("mouseout", () => {
    if (index > currentselectedIndex) {
      stars.forEach((s) => {
        s.classList.remove("selected");
      });
    }
  });

  star.addEventListener("click", () => {
    currentselectedIndex = index;
    stars.forEach((s, i) => {
      if (i <= currentselectedIndex) {
        s.classList.add("selected");
      } else {
        s.classList.remove("selected");
      }
    });
  });
});
