window.onload = function () {
  loadImg();
};
function loadImg() {
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
}
let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let containerHeader = document.querySelector(".container header");
function openMenu() {
  if (!menu || !container || !containerHeader) return;
  if (menu.style.display === "none") {
    menu.style.display = "block";
    container.style.marginLeft = "220px";
    container.style.width = "calc(100% - 220px)";
    containerHeader.style.width = "calc(100% - 220px)";
    menuAction = "true";
  } else {
    menu.style.display = "none";
    container.style.marginLeft = "0";
    container.style.width = "100%";
    containerHeader.style.width = "100%";
    menuAction = "false";
  }
  localStorage.setItem("menuAction", menuAction);
}
let menuAction = sessionStorage.getItem("menuAction") || "false";
if (menuAction === "true") {
  openMenu();
}
/*js*/
let inputValue = document.querySelectorAll("input");
function resetForm() {
  inputValue.forEach((value) => (value.value = ""));
}
let nowUser =
  JSON.parse(localStorage.getItem("nowUser")) ||
  JSON.parse(sessionStorage.getItem("nowUser"));
if (
  nowUser === null &&
  window.location.pathname !== "/project-root/pages/signIn.html" &&
  window.location.pathname !== "/project-root/pages/signUp.html"
) {
  location.href = "/project-root/pages/signIn.html";
}
function signOut() {
  localStorage.removeItem("nowUser");
  sessionStorage.removeItem("nowUser");
}
