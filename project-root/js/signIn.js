let form = document.querySelector(".box");
let email = document.querySelector(`input[type="email"]`);
let password = document.querySelector(`input[type="password"]`);
let checkbox = document.querySelector(`input[type=checkbox]`);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  email.value = email.value.trim();
  password.value = password.value.trim();
  if (email.value.length !== 0 && password.value.length !== 0) {
    if (user.some((value) => value.email === email.value)) {
      if (
        user[user.findIndex((value) => value.email === email.value)]
          .password === password.value
      ) {
        openNotify();
        notify.classList.remove("error");
        notify.classList.add("submit");
        notify.innerHTML = `
        <div class="header">
        <div>
        <img
        class="a-quarter-img"
        src="../assets/icons/Submit.png"
        alt=""
        /><span>Đăng nhập thành công</span>
        </div>
        </div>`;
        loadImg();
        nowUser = {
          id: user[user.findIndex((value) => value.email === email.value)].id,
          email:
            user[user.findIndex((value) => value.email === email.value)].email,
          username:
            user[user.findIndex((value) => value.email === email.value)]
              .username,
          password:
            user[user.findIndex((value) => value.email === email.value)]
              .password,
        };
        if (checkbox.checked) {
          localStorage.setItem("nowUser", JSON.stringify(nowUser));
        } else {
          localStorage.removeItem("nowUser");
          sessionStorage.setItem("nowUser", JSON.stringify(nowUser));
        }
        setTimeout(() => {
          location.href = "../index.html";
        }, 1000);
      } else {
        errorNotify();
        document.querySelector(
          ".error .text"
        ).innerHTML = `<p>Mật khẩu sai</p>`;
      }
    } else {
      errorNotify();
      document.querySelector(
        ".error .text"
      ).innerHTML = `<p>Email không được đăng ký</p>`;
    }
  } else {
    errorNotify();
    document.querySelector(".error .text").innerHTML = `
    ${password.value ? "" : "<p>Mật khẩu không được bỏ trống</p>"}
    ${email.value ? "" : "<p>Email không được bỏ trống</p>"}`;
  }
});
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
