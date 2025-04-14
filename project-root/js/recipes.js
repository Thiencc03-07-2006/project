let box;
let myRecipesFilter;
let filterCategory = document.querySelector("select[name=filter]");
let cloneRecipes = [];
filterCategory.addEventListener("change", function () {
  if (filterCategory.value === "") {
    cloneRecipes = [];
  } else {
    cloneRecipes = recipes.filter((value) =>
      value.category.some((value2) => value2.name === filterCategory.value)
    );
  }
  render(selectRender());
});
const selectRender = () => (cloneRecipes.length === 0 ? recipes : cloneRecipes);
function render(arr) {
  document.querySelector(".main-bottom").innerHTML = (
    myRecipesFilter
      ? arr.filter((value) => value.author === nowUser.username)
      : arr
  )
    .slice(nowPaper * maxPaper, (nowPaper + 1) * maxPaper)
    .map(
      (value) => `<div class="box" onclick="setNowRecipes(${value.id})">
    <div>
      <div>
        <img
          class="a-quarter-img"
          src="../assets/icons/group.png"
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
        <p>${value.author}</p>
        <div class="box-like">
          <img
            class="a-quarter-img"
            src="../assets/icons/heart.png"
            alt=""
          />
          <p>37</p>
        </div>
      </div>
      <div class="text-3">
        <img
          class="a-quarter-img"
          src="../assets/icons/Vector.png"
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
            <td class="box-info-left">100</td>
            <td class="stats">${(
              totalValue(value, "macronutrients", "energy") / value.portions
            ).toFixed(2)} kcal</td>
            <td class="stats">${(
              totalValue(value, "macronutrients", "fat") / value.portions
            ).toFixed(2)} g</td>
            <td class="stats">${(
              totalValue(value, "macronutrients", "carbohydrate") /
              value.portions
            ).toFixed(2)} g</td>
            <td class="stats">${(
              totalValue(value, "macronutrients", "protein") / value.portions
            ).toFixed(2)} g</td>
          </tr>
        </table>
      </div>
    </div>
  </div>`
    )
    .join("");
  box = document.querySelectorAll(".main-bottom .box:not(:has(a))");
  box.forEach((value) =>
    value.addEventListener("click", function () {
      location.href = `./recipesDetail.html`;
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
        (totalValue(a, "macronutrients", sort.value) / a.portions -
          totalValue(b, "macronutrients", sort.value) / b.portions) *
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
let paperBar = document.querySelector("main .paper-bar");
let maxPaper = 8;
let nowPaper = 0;
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
    Math.ceil(selectRender().length / maxPaper) < 8
      ? paperArr
          .map(
            (value) =>
              `<button class="${
                nowPaper === value - 1 ? "now-paper" : ""
              }" onclick="renderPaperBar(${value})">${value}</button>`
          )
          .join("")
      : nowPaper >= 3 &&
        nowPaper < Math.ceil(selectRender().length / maxPaper) - 3
      ? `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button>...</button>
                <button class="now-paper">${nowPaper + 1}</button>
                <button>...</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(selectRender().length / maxPaper) - 1
                })">${Math.ceil(selectRender().length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  selectRender().length / maxPaper
                )})">${Math.ceil(selectRender().length / maxPaper)}</button>`
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
                  Math.ceil(selectRender().length / maxPaper) - 1
                })">${Math.ceil(selectRender().length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  selectRender().length / maxPaper
                )})">${Math.ceil(selectRender().length / maxPaper)}</button>`
      : `<button onclick="renderPaperBar(1)">1</button>
                <button onclick="renderPaperBar(2)">2</button>
                <button>...</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(selectRender().length / maxPaper) - 3
                })" class="${
          nowPaper === Math.ceil(selectRender().length / maxPaper) - 4
            ? "now-paper"
            : ""
        }">${Math.ceil(selectRender().length / maxPaper) - 3}</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(selectRender().length / maxPaper) - 2
                })" class="${
          nowPaper === Math.ceil(selectRender().length / maxPaper) - 3
            ? "now-paper"
            : ""
        }">${Math.ceil(selectRender().length / maxPaper) - 2}</button>
                <button onclick="renderPaperBar(${
                  Math.ceil(selectRender().length / maxPaper) - 1
                })" class="${
          nowPaper === Math.ceil(selectRender().length / maxPaper) - 2
            ? "now-paper"
            : ""
        }">${Math.ceil(selectRender().length / maxPaper) - 1}</button>
                <button onclick="renderPaperBar(${Math.ceil(
                  selectRender().length / maxPaper
                )})" class="${
          nowPaper === Math.ceil(selectRender().length / maxPaper - 1)
            ? "now-paper"
            : ""
        }">${Math.ceil(selectRender().length / maxPaper)}</button>`;
  search.value.length > 0
    ? render(
        selectRender().filter((value) =>
          value.name.toLowerCase().includes(search.value.toLowerCase())
        )
      )
    : render(selectRender());
}
function setNowRecipes(nowIdEdit) {
  sessionStorage.setItem(
    "nowRecipes",
    JSON.stringify(
      recipes[recipes.findIndex((value) => value.id === nowIdEdit)]
    )
  );
}
