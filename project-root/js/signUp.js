let form = document.querySelector(".box");
let email = document.querySelector(`input[type="email"]`);
let name = document.querySelector(`input[type="text"]`);
let password = document.querySelector(`input[type="password"]`);
let id;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  email.value = email.value.trim().toLowerCase();
  name.value = name.value.trim();
  password.value = password.value.trim();
  if (
    email.value.length !== 0 &&
    password.value.length !== 0 &&
    name.value.length !== 0
  ) {
    if (!user.some((value) => value.email === email.value)) {
      if (password.value.length >= 8) {
        if (!user.some((value) => value.password === password.value)) {
          do {
            id = Math.ceil(Math.random() * 999999);
          } while (user.some((value) => value.id === id));
          user.push({
            id,
            email: email.value,
            username: name.value,
            password: password.value,
          });
          localStorage.setItem("user", JSON.stringify(user));
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
        /><span>Đăng ký thành công</span>
        </div>
        </div>`;
          loadImg();
          setTimeout(() => {
            location.href = `../pages/signin.html`;
          }, 1000);
        }
        errorNotify();
        document.querySelector(".error .text").innerHTML =
          "<p>Mật khẩu đã được sử dụng</p>";
      } else {
        errorNotify();
        document.querySelector(".error .text").innerHTML =
          "<p>Mật khẩu tối thiểu 8 ký tự</p>";
      }
    } else {
      errorNotify();
      document.querySelector(".error .text").innerHTML =
        "<p>Email đã được đăng ký</p>";
    }
  } else {
    errorNotify();
    document.querySelector(".error .text").innerHTML = `
  ${password.value ? "" : "<p>Mật khẩu không được bỏ trống</p>"}
  ${email.value ? "" : "<p>Email không được bỏ trống</p>"}
  ${name.value ? "" : "<p>Tên không được bỏ trống</p>"}`;
  }
});
