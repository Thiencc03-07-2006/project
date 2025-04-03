let box = document.querySelectorAll(".list .box:not(:has(a))");
box.forEach((value) =>
  value.addEventListener("click", function () {
    location.href = `./ingredientEdit.html`;
  })
);
