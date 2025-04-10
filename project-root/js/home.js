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
  document.querySelector(".main-bottom").innerHTML = arr
    .slice(nowPaper * maxPaper, (nowPaper + 1) * maxPaper)
    .map(
      (value) => `<div class="box">
    <div>
      <div>
        <img
          class="a-quarter-img"
          src="./assets/icons/group.png"
          alt=""
        />
        <p>Community Recipes</p>
      </div>
    </div>
    <div class="box-right">
      <p class="text-1">
        ${value.name}
      </p>
      <div class="text-2">
        <p>${value.source}</p>
        <div class="box-like">
          <img
            class="a-quarter-img"
            src="./assets/icons/heart.png"
            alt=""
          />
          <p>37</p>
        </div>
      </div>
      <div class="text-3">
        <img
          class="a-quarter-img"
          src="./assets/icons/Vector.png"
          alt=""
        />
        <p>${value.category}</p>
      </div>
      <div class="box-info">
        <table>
          <tr>
            <td class="box-info-left">by</td>
            <td>Energy</td>
            <td>Fat</td>
            <td>Carbohydrate</td>
            <td>Protein</td>
          </tr>
          <tr>
            <td class="box-info-left">${value.quantity}</td>
            <td class="stats">${value.macronutrients.energy} kcal</td>
            <td class="stats">${value.macronutrients.fat} g</td>
            <td class="stats">${value.macronutrients.carbohydrate} g</td>
            <td class="stats">${value.macronutrients.protein} g</td>
          </tr>
        </table>
      </div>
    </div>
  </div>`
    )
    .join("");
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
  render(selectRender());
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
let paperBar = document.querySelector("main .paper-bar");
let maxPaper = 8;
let nowPaper = 0;
let midPaperBar = document.querySelector("main .mid-paper-bar");
let paperArr = [];
renderPaperBar(1);
function renderPaperBar(value) {
  if (Math.ceil(food.length / maxPaper) < 8) {
    paperArr = Array.from(
      { length: Math.ceil(food.length / maxPaper) },
      (_, i) => i + 1
    );
  }
  nowPaper = value - 1;
  midPaperBar.innerHTML =
    Math.ceil(food.length / maxPaper) < 8
      ? paperArr
          .map(
            (value) =>
              `<button class="${
                nowPaper === value - 1 ? "now-paper" : ""
              }" onclick="renderPaperBar(${value})">${value}</button>`
          )
          .join("")
      : nowPaper >= 3 && nowPaper < Math.ceil(food.length / maxPaper) - 3
      ? `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button>...</button>
                <button class="now-paper">${nowPaper + 1}</button>
                <button>...</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(food.length / maxPaper) - 1
                })">${Math.ceil(food.length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  food.length / maxPaper
                )})">${Math.ceil(food.length / maxPaper)}</button>`
      : nowPaper < 3
      ? `<button onclick="renderPaperBar(1)" class="${
          nowPaper === 0 ? "now-paper" : ""
        }">1</button>
                <button onclick="renderPaperBar(2)" class="${
                  nowPaper === 1 ? "now-paper" : ""
                }">2</button>
                <button onclick="renderPaperBar(3)" class="${
                  nowPaper === 2 ? "now-paper" : ""
                }">3</button>
                <button onclick="renderPaperBar(4)" class="${
                  nowPaper === 3 ? "now-paper" : ""
                }">4</button>
                <button>...</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(food.length / maxPaper) - 1
                })">${Math.ceil(food.length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  food.length / maxPaper
                )})">${Math.ceil(food.length / maxPaper)}</button>`
      : `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button>...</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(food.length / maxPaper) - 3
                })" class="${
          nowPaper === Math.ceil(food.length / maxPaper) - 4 ? "now-paper" : ""
        }">${Math.ceil(food.length / maxPaper) - 3}</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(food.length / maxPaper) - 2
                })" class="${
          nowPaper === Math.ceil(food.length / maxPaper) - 3 ? "now-paper" : ""
        }">${Math.ceil(food.length / maxPaper) - 2}</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(food.length / maxPaper) - 1
                })" class="${
          nowPaper === Math.ceil(food.length / maxPaper) - 2 ? "now-paper" : ""
        }">${Math.ceil(food.length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  food.length / maxPaper
                )})" class="${
          nowPaper === Math.ceil(food.length / maxPaper - 1) ? "now-paper" : ""
        }">${Math.ceil(food.length / maxPaper)}</button>`;
  search.value.length > 0
    ? render(
        selectRender().filter((value) =>
          value.name.toLowerCase().includes(search.value.toLowerCase())
        )
      )
    : render(selectRender());
}
