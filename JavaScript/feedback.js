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
    document.getElementById("comment").value = "";
};

const input = document.getElementById("comment");

function redirectToEpicode() {
    window.location.href = "https://epicode.com/it/";
}

const button = document.getElementById("info");
button.onclick = function () {
    if (input.value !== "" && condition) {
        redirectToEpicode();
    } else {
        alert("Please select a rating and enter a comment");
    }
};
