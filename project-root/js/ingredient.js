let box;
/*js*/
let filterCategory = document.querySelector("select[name=filter]");
let cloneFood = [];
filterCategory.addEventListener("change", function () {
  if (filterCategory.value === "") {
    cloneFood = [];
  } else {
    cloneFood = food.filter((value) =>
      value.category.includes(filterCategory.value)
    );
  }
  render(selectRender());
});
const selectRender = () => (cloneFood.length === 0 ? food : cloneFood);
function render(arr) {
  document.querySelector(".main-bottom .list").innerHTML =
    arr
      .slice(nowPaper * maxPaper, (nowPaper + 1) * maxPaper)
      .map(
        (value) => `<div class="box" onclick="setNowFoodEdit(${value.id})">
                  <div>
                    <p>${value.name}</p>
                    <p>${value.source}</p>
                  </div>
                  <table>
                    <tr>
                      <td class="stats">${value.macronutrients.energy} kcal</td>
                      <td class="stats">${value.macronutrients.fat} g</td>
                      <td class="stats">${value.macronutrients.carbohydrate} g</td>
                      <td class="stats">${value.macronutrients.protein} g</td>
                    </tr>
                    <tr>
                      <td>Energy</td>
                      <td>Fat</td>
                      <td>Carbohydrate</td>
                      <td>Protein</td>
                    </tr>
                  </table>
                </div>`
      )
      .join("") +
    `<div class="box">
                  <a href="../pages/ingredientAddFood.html"
                    ><img
                      class="a-quarter-img"
                      src="../assets/icons/addFood.png"
                      alt=""
                    />Create food</a
                  >
                </div>`;
  box = document.querySelectorAll(".list .box:not(:has(a))");
  box.forEach((value) =>
    value.addEventListener("click", function () {
      location.href = `./ingredientEdit.html`;
    })
  );
  loadImg();
}
let search = document.querySelector(`input[type = "search"]`);
search.addEventListener("input", function () {
  render(
    selectRender().filter((value) =>
      value.name.toLowerCase().includes(search.value.toLowerCase())
    )
  );
});
let sortButton = document.querySelector("#sort");
let sort = document.querySelector("select[name=sort]");
let changeSortNow = 1;
sort.addEventListener("change", function () {
  sortAction();
});
function sortAction() {
  if (sort.value === "") {
    selectRender().sort((a, b) => a.name.localeCompare(b.name));
  } else {
    selectRender().sort(
      (a, b) =>
        (a.macronutrients[sort.value] - b.macronutrients[sort.value]) *
        changeSortNow
    );
  }
  render(
    selectRender().filter((value) =>
      value.name.toLowerCase().includes(search.value.toLowerCase())
    )
  );
}
function changeSort() {
  if (changeSortNow === 1) {
    changeSortNow = -1;
    sortButton.style.transform = "scaleY(-1)";
  } else {
    changeSortNow = 1;
    sortButton.style.transform = "scaleY(1)";
  }
  sortAction();
}
let nowPaper = 0;
let paperBar = document.querySelector("main .paper-bar");
let maxPaper = 9;
let midPaperBar = document.querySelector("main .mid-paper-bar");
let paperArr = [];
renderPaperBar(1);
function renderPaperBar(value) {
  paperArr = Array.from(
    { length: Math.ceil(selectRender().length / maxPaper) },
    (_, i) => i + 1
  );
  nowPaper = value - 1;
  midPaperBar.innerHTML =
    Math.ceil(selectRender().length / maxPaper) < 6 || nowPaper < 5
      ? paperArr
          .filter((value) => value < 6)
          .map(
            (value) =>
              `<button class="${
                nowPaper === value - 1 ? "now-paper" : ""
              }" onclick="renderPaperBar(${value})">${value}</button>`
          )
          .join("") +
        `<button><img class="a-quarter-img" src="../assets/icons/3dot.png" alt="" width="12" height="3"></button>`
      : nowPaper >= 5 &&
        nowPaper < Math.ceil(selectRender().length / maxPaper) - 1
      ? `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button><img class="a-quarter-img" src="../assets/icons/3dot.png" alt="" width="12" height="3"></button>
                <button onclick="renderPaperBar(${nowPaper})">${nowPaper}</button>
                <button class="now-paper">${nowPaper + 1}</button>
                <button><img class="a-quarter-img" src="../assets/icons/3dot.png" alt="" width="12" height="3"></button>`
      : `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button onclick="renderPaperBar(3)">3</button>
                <button><img class="a-quarter-img" src="../assets/icons/3dot.png" alt="" width="12" height="3"></button>
                <button onclick="renderPaperBar(${nowPaper})">${nowPaper}</button>
                <button class="now-paper">${nowPaper + 1}</button>`;
  search.value.length > 0
    ? render(
        selectRender().filter((value) =>
          value.name.toLowerCase().includes(search.value.toLowerCase())
        )
      )
    : render(selectRender());
}
function setNowFoodEdit(nowIdEdit) {
  sessionStorage.setItem(
    "nowEditFood",
    JSON.stringify(food[food.findIndex((value) => value.id === nowIdEdit)])
  );
}
