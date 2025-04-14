let tr;
let addRecipesWhenSave = { ingredients: [] };
function showList() {
  let arrowButton = document.querySelector(
    ".container main .main-bottom .box-left .box-top .mini-box-list span"
  );
  let list = document.querySelector(
    ".container main .main-bottom .box-left .box-top .list"
  );
  if (arrowButton.style.transform === "rotate(180deg)") {
    arrowButton.style.transform = "rotate(0deg)";
    list.style.display = "block";
  } else {
    arrowButton.style.transform = "rotate(180deg)";
    list.style.display = "none";
  }
}
let dataValues = [1, 1, 1];
const ctx = document.getElementById("macronutrientChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Fat", "Carbohydrate", "Protein"],
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#DB4965", "#EA9F77", "#1AB394"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#000000",
          font: { family: "Inter", weight: 400, size: 12 },
          pointStyle: "rect",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      datalabels: {
        color: "#FFFFFF",
        font: { family: "Inter", weight: 400, size: 13 },
        formatter: (value, context) => value + "%",
      },
    },
  },
  plugins: [ChartDataLabels],
});
/*js*/
let box;
let nowRepicesIngredients = [];
/*basic*/
let nameRecipes = document.querySelector(".name");
let descriptionRecipes = document.querySelector(".description");
let totalTimeRecipes = document.querySelector(".total-time");
let preparationTimeRecipes = document.querySelector(".preparation-time");
let finalWeightRecipes = document.querySelector(".final-weight");
let portionsRecipes = document.querySelector(".portions");
portionsRecipes.addEventListener("input", function () {
  nowGlobalanalysis();
});
let categoryRecipes = document.querySelector("category");
let cookingMethods = document.querySelector(
  `input[placeholder="Add new cooking method"]`
);
let energy;
let circleFat;
let circleCarbohydrate;
let circleProtein;
let circleFiber;
let formTime = /^(?:[0-9]{2}):([0-5][0-9])$/;
function addFood() {
  let id;
  if (
    nameRecipes.value &&
    descriptionRecipes.value &&
    formTime.test(totalTimeRecipes.value) &&
    formTime.test(preparationTimeRecipes.value) &&
    finalWeightRecipes.value != "0.00 grams" &&
    portionsRecipes.value
  ) {
    do {
      id = Math.ceil(Math.random() * 999999);
    } while (food.some((value) => value.id === id));
    recipes.push({
      id: id,
      name: nameRecipes.value,
      description: descriptionRecipes.value,
      author: nowUser.username,
      totalTime: totalTimeRecipes.value,
      preparationTime: preparationTimeRecipes.value,
      finalWeight: finalWeightRecipes.value,
      position: Number(portionsRecipes.value),
      ingredients: nowRepicesIngredients,
      cookingMethods: [{ id: 1, content: cookingMethods.value }],
      category: "Vegetarian dishes",
    });
    localStorage.setItem("recipes", JSON.stringify(recipes));
    location.href = "../pages/recipes.html";
  } else {
    alert("savefa");
  }
}
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
const selectRender = () =>
  selectFood(cloneFood).length === 0 ? selectFood(food) : selectFood(cloneFood);
const selectFood = (foodArr) =>
  foodArr.filter(
    (value3) => !nowRepicesIngredients.some((value4) => value4.id === value3.id)
  );
function render(arr) {
  document.querySelector(".content .box-list:first-child").innerHTML =
    nowRepicesIngredients
      .map(
        (value, index) => `<div class="mini-box">
                        <div>
                          <span class="top-item"
                            >${value.name}</span
                          >
                          <div class="bottom-item">
                            <span class="add"
                              ><img
                                class="a-quarter-img"
                                src="../assets/icons/addGreen.png"
                                alt="" /></span
                            ><input
                              type="text"
                              placeholder="Add new food equivalent"
                            />
                          </div>
                        </div>
                        <span onclick="deleteFoodInIngredients(${index})" class="delete-item"
                          ><img
                            class="a-quarter-img"
                            src="../assets/icons/delete.png"
                            alt=""
                        /></span>
                      </div>`
      )
      .join("");
  document.querySelector(".main-bottom tbody").innerHTML = arr
    .slice(nowPaper * maxPaper, (nowPaper + 1) * maxPaper)
    .map(
      (value) => `<tr>
                              <td>
                                <div>
                                  <p>${value.name}</p>
                                  <p>Community Recipes</p>
                                </div>
                                <div>
                                  <span class="first">1</span
                                  ><span class="second">portion (${howManyGrams(
                                    value.id
                                  )} grams)</span
                                  ><span class="third">${howManyGrams(
                                    value.id
                                  )}g</span>
                                </div>
                              </td>
                              <td class="stats">
                                <span>${
                                  value.macronutrients.energy
                                }</span><span> kcal</span>
                              </td>
                              <td class="stats">
                                <span>${
                                  value.macronutrients.fat
                                }</span><span> g</span>
                              </td>
                              <td class="stats">
                                <span>${
                                  value.macronutrients.carbohydrate
                                }</span><span> g</span>
                              </td>
                              <td class="stats">
                                <span>${
                                  value.macronutrients.protein
                                }</span><span> g</span>
                              </td>
                              <td onclick="addFoodToIngredients(${
                                value.id
                              })" class="add">
                                <img
                                  class="a-quarter-img"
                                  src="../assets/icons/addWhite.png"
                                  alt=""
                                />
                              </td>
                            </tr>`
    )
    .join("");
  tr = document.querySelectorAll(
    ".container main .main-bottom .box-left .box-top .list table tbody tr"
  );
  tr.forEach((value) =>
    value.addEventListener("mouseover", function () {
      value.style.backgroundColor = "#FAFAFB";
      let td = value.querySelectorAll("td");
      td.forEach((value2) => (value2.style.borderColor = "#DDDDDD"));
      let add = value.querySelector(".add");
      add.style.backgroundColor = "#1AB394";
    })
  );
  tr.forEach((value) =>
    value.addEventListener("mouseout", function () {
      value.style.backgroundColor = "#FFFFFF";
      let td = value.querySelectorAll("td");
      td.forEach((value2) => (value2.style.borderColor = "#EEEEEE"));
      let add = value.querySelector(".add");
      add.style.backgroundColor = "#FFFFFF";
    })
  );
  loadImg();
  finalWeightRecipes.value =
    nowRepicesIngredients
      .reduce((prev, cur) => prev + Number(howManyGrams(cur.id)), 0)
      .toFixed(2) + " grams";
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
  cloneFood = [...selectRender()].sort((a, b) => {
    if (sort.value === "") {
      return a.name.localeCompare(b.name);
    }
    return (
      (a.macronutrients[sort.value] - b.macronutrients[sort.value]) *
      changeSortNow
    );
  });
  render(
    cloneFood.filter((value) =>
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
let maxPaper = 5;
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
function addFoodToIngredients(idFood) {
  nowRepicesIngredients.push(
    food[food.findIndex((value) => value.id == idFood)]
  );
  addRecipesWhenSave.ingredients = nowRepicesIngredients;
  render(selectRender());
  nowGlobalanalysis();
}
function deleteFoodInIngredients(indexFood) {
  nowRepicesIngredients.splice(indexFood, 1);
  addRecipesWhenSave.ingredients = nowRepicesIngredients;
  render(selectRender());
  nowGlobalanalysis();
}
function howManyGrams(idValue) {
  return (
    (Number(
      food[food.findIndex((value) => value.id === idValue)].micronutrients
        .sugars
    ) || 0) +
    ((Number(
      food[food.findIndex((value) => value.id === idValue)].micronutrients
        .vitaminB6
    ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .calcium
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .iron
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .magnesium
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .phosphorus
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .potassium
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .zinc
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .copper
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .manganese
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .thiamin
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .riboflavin
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .niacin
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .pantothenicAcid
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .vitaminC
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .vitaminE
      ) || 0)) *
      Math.pow(10, -3) +
    ((Number(
      food[food.findIndex((value) => value.id === idValue)].micronutrients
        .vitaminA
    ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .vitaminB12
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .vitaminD
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .vitaminK
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .fluoride
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .selenium
      ) || 0) +
      (Number(
        food[food.findIndex((value) => value.id === idValue)].micronutrients
          .folate
      ) || 0)) *
      Math.pow(10, -6)
  ).toFixed(2);
  /*ug 10⁻⁶ */
}
let totalChart;
nowGlobalanalysis();
function nowGlobalanalysis() {
  energy = document.querySelector(".energy");
  circleFat = document.querySelector(".circle-fat");
  circleCarbohydrate = document.querySelector(".circle-carbohydrate");
  circleProtein = document.querySelector(".circle-protein");
  circleFiber = document.querySelector(".circle-fiber");
  energy.textContent = (
    totalValue(addRecipesWhenSave, "macronutrients", "energy") /
    (portionsRecipes.value || 1)
  ).toFixed(2);
  circleFat.textContent =
    (
      totalValue(addRecipesWhenSave, "macronutrients", "fat") /
      (portionsRecipes.value || 1)
    ).toFixed(2) + "g";
  if (circleFat.textContent == "0.00g") {
    circleFat.textContent = 0;
    circleFat.style.borderColor = "#F3F3F4";
  } else {
    circleFat.style.borderColor = "#db4965";
  }
  circleCarbohydrate.textContent =
    (
      totalValue(addRecipesWhenSave, "macronutrients", "carbohydrate") /
      (portionsRecipes.value || 1)
    ).toFixed(2) + "g";
  if (circleCarbohydrate.textContent == "0.00g") {
    circleCarbohydrate.textContent = 0;
    circleCarbohydrate.style.borderColor = "#F3F3F4";
  } else {
    circleCarbohydrate.style.borderColor = "#ea9f77";
  }
  circleProtein.textContent =
    (
      totalValue(addRecipesWhenSave, "macronutrients", "protein") /
      (portionsRecipes.value || 1)
    ).toFixed(2) + "g";
  if (circleProtein.textContent == "0.00g") {
    circleProtein.textContent = 0;
    circleProtein.style.borderColor = "#F3F3F4";
  } else {
    circleProtein.style.borderColor = "#1ab394";
  }
  circleFiber.textContent =
    (
      totalValue(addRecipesWhenSave, "micronutrients", "fiber") /
      (portionsRecipes.value || 1)
    ).toFixed(2) + "g";
  if (circleFiber.textContent == "0.00g") {
    circleFiber.textContent = 0;
    circleFiber.style.borderColor = "#F3F3F4";
  } else {
    circleFiber.style.borderColor = "#6a7d93";
  }
  totalChart =
    Number(
      (
        totalValue(addRecipesWhenSave, "macronutrients", "fat") /
        addRecipesWhenSave.portions
      ).toFixed(2)
    ) +
    Number(
      (
        totalValue(addRecipesWhenSave, "macronutrients", "carbohydrate") /
        addRecipesWhenSave.portions
      ).toFixed(2)
    ) +
    Number(
      (
        totalValue(addRecipesWhenSave, "macronutrients", "protein") /
        addRecipesWhenSave.portions
      ).toFixed(2)
    );
  dataValues = [
    (
      (totalValue(addRecipesWhenSave, "macronutrients", "fat") /
        addRecipesWhenSave.portions /
        totalChart) *
      100
    ).toFixed(2),
    (
      (totalValue(addRecipesWhenSave, "macronutrients", "carbohydrate") /
        addRecipesWhenSave.portions /
        totalChart) *
      100
    ).toFixed(2),
    (
      (totalValue(addRecipesWhenSave, "macronutrients", "protein") /
        addRecipesWhenSave.portions /
        totalChart) *
      100
    ).toFixed(2),
  ];
  chart.update();
}
