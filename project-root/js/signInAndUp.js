let notify = document.querySelector(".notify");
function closeNotify() {
  notify.style.display = "none";
}
openNotify();
function openNotify() {
  notify.style.display = "block";
  setTimeout(() => {
    notify.style.display = "none";
  }, 3000);
} /*js*/
let user = JSON.parse(localStorage.getItem("user")) || [
  { id: 0, email: "", username: "fixEmail", password: "error1" },
];
function errorNotify() {
  openNotify();
  notify.classList.remove("submit");
  notify.classList.add("error");
  notify.innerHTML = `
    <div class="header">
    <div>
    <span><img class="a-quarter-img" src="../assets/icons/Error.png" alt="" /></span>
    <span>Error</span>
    </div>
    <span><button>
    <img
    class="a-quarter-img"
    onclick="closeNotify()"
    src="../assets/icons/close.png"
    alt=""
    /></button
    ></span>
    </div>
    <div class="text"></div>`;
  loadImg();
}
