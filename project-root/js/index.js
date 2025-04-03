window.onload = function () {
  document.querySelectorAll(".a-quarter-img").forEach((img) => {
    if (img.complete) {
      img.width = img.naturalWidth / 4;
      img.height = img.naturalHeight / 4;
    } else {
      img.addEventListener("load", function () {
        img.width = img.naturalWidth / 4;
        img.height = img.naturalHeight / 4;
      });
    }
  });
};
let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let containerHeader = document.querySelector(".container header");
function openMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    container.style.marginLeft = "220px";
    container.style.width = "calc(100% - 220px)";
    containerHeader.style.width = "calc(100% - 220px)";
  } else {
    menu.style.display = "none";
    container.style.marginLeft = "0";
    container.style.width = "100%";
    containerHeader.style.width = "100%";
  }
}
