/**/
let nowRecipes = JSON.parse(sessionStorage.getItem("nowRecipes"));
let tr = document.querySelectorAll(
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
let totalChart =
  Number(
    (
      totalValue(nowRecipes, "macronutrients", "fat") / nowRecipes.portions
    ).toFixed(2)
  ) +
  Number(
    (
      totalValue(nowRecipes, "macronutrients", "carbohydrate") /
      nowRecipes.portions
    ).toFixed(2)
  ) +
  Number(
    (
      totalValue(nowRecipes, "macronutrients", "protein") / nowRecipes.portions
    ).toFixed(2)
  );
const dataValues = [
  (
    (totalValue(nowRecipes, "macronutrients", "fat") /
      nowRecipes.portions /
      totalChart) *
    100
  ).toFixed(2),
  (
    (totalValue(nowRecipes, "macronutrients", "carbohydrate") /
      nowRecipes.portions /
      totalChart) *
    100
  ).toFixed(2),
  (
    (totalValue(nowRecipes, "macronutrients", "protein") /
      nowRecipes.portions /
      totalChart) *
    100
  ).toFixed(2),
];
const ctx = document.getElementById("macronutrientChart").getContext("2d");
new Chart(ctx, {
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
        align: "start",
        anchor: "end",
        offset: 15,
        formatter: (value, context) => (value >= 5 ? value + "%" : ""),
      },
    },
  },
  plugins: [ChartDataLabels],
});
function autoSizeTextaren(value) {
  value.style.height = "auto";
  value.style.height = value.scrollHeight + "px";
}
/*js*/
/*list*/
let sodium = document.querySelector(".sodium");
let vitaminA = document.querySelector(".vitamin-a");
let vitaminB6 = document.querySelector(".vitamin-b-6");
let vitaminB12 = document.querySelector(".vitamin-b-12");
let vitaminC = document.querySelector(".vitamin-c");
let vitaminD = document.querySelector(".vitamin-d-d2-d3");
let vitaminE = document.querySelector(".vitamin-e");
let vitaminK = document.querySelector(".vitamin-k");
let starch = document.querySelector(".starch");
let lactose = document.querySelector(".lactose");
let sugars = document.querySelector(".sugars");
let calcium = document.querySelector(".calcium");
let iron = document.querySelector(".iron");
let magnesium = document.querySelector(".magnesium");
let phosphorus = document.querySelector(".phosphorus");
let potassium = document.querySelector(".potassium");
let zinc = document.querySelector(".zinc");
let copper = document.querySelector(".copper");
let fluoride = document.querySelector(".fluoride");
let manganese = document.querySelector(".manganese");
let selenium = document.querySelector(".selenium");
let thiamin = document.querySelector(".thiamin");
let riboflavin = document.querySelector(".riboflavin");
let niacin = document.querySelector(".niacin");
let pantothenicAcid = document.querySelector(".pantothenic-acid");
let folateTotal = document.querySelector(".folate-total");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let author = document.querySelector(".author");
let totalTime = document.querySelector(".totalTime");
let preparationTime = document.querySelector(".preparationTime");
let finalWeight = document.querySelector(".finalWeight");
let portions = document.querySelector(".portions");
let categoryRecipes = document.querySelector(".category");
sodium.textContent = totalValue(nowRecipes, "micronutrients", "sodium");
vitaminA.textContent = totalValue(nowRecipes, "micronutrients", "vitaminA");
vitaminB6.textContent = totalValue(nowRecipes, "micronutrients", "vitaminB6");
vitaminB12.textContent = totalValue(nowRecipes, "micronutrients", "vitaminB12");
vitaminC.textContent = totalValue(nowRecipes, "micronutrients", "vitaminC");
vitaminD.textContent = totalValue(nowRecipes, "micronutrients", "vitaminD");
vitaminE.textContent = totalValue(nowRecipes, "micronutrients", "vitaminE");
vitaminK.textContent = totalValue(nowRecipes, "micronutrients", "vitaminK");
sugars.textContent = totalValue(nowRecipes, "micronutrients", "sugars");
calcium.textContent = totalValue(nowRecipes, "micronutrients", "calcium");
iron.textContent = totalValue(nowRecipes, "micronutrients", "iron");
magnesium.textContent = totalValue(nowRecipes, "micronutrients", "magnesium");
phosphorus.textContent = totalValue(nowRecipes, "micronutrients", "phosphorus");
potassium.textContent = totalValue(nowRecipes, "micronutrients", "potassium");
zinc.textContent = totalValue(nowRecipes, "micronutrients", "zinc");
copper.textContent = totalValue(nowRecipes, "micronutrients", "copper");
fluoride.textContent = totalValue(nowRecipes, "micronutrients", "fluoride");
manganese.textContent = totalValue(nowRecipes, "micronutrients", "manganese");
selenium.textContent = totalValue(nowRecipes, "micronutrients", "selenium");
thiamin.textContent = totalValue(nowRecipes, "micronutrients", "thiamin");
riboflavin.textContent = totalValue(nowRecipes, "micronutrients", "riboflavin");
niacin.textContent = totalValue(nowRecipes, "micronutrients", "niacin");
pantothenicAcid.textContent = totalValue(
  nowRecipes,
  "micronutrients",
  "pantothenicAcid"
);
folateTotal.textContent = totalValue(
  nowRecipes,
  "micronutrients",
  "folateTotal"
);
description.value = nowRecipes.description;
author.value = nowRecipes.author;
totalTime.value = nowRecipes.totalTime;
preparationTime.value = nowRecipes.preparationTime;
finalWeight.value = nowRecipes.finalWeight;
portions.value = nowRecipes.portions;
categoryRecipes.textContent = nowRecipes.category;
let content = document.querySelector(".content");
content.innerHTML = nowRecipes.ingredients
  .map(
    (value) => `<div onclick="setNowFoodEdit(${value.id})">${value.name}</div>`
  )
  .join("");
let contentItem = document.querySelectorAll(".content div");
contentItem.forEach((value) =>
  value.addEventListener("click", function () {
    location.href = `./ingredientEdit.html`;
  })
);
let cookingMethods = document.querySelector(".cookingMethods");
cookingMethods.value = nowRecipes.cookingMethods
  .map((value) => value.content)
  .join(", ");
let energy = document.querySelector(".energy");
let circleFat = document.querySelector(".circle-fat");
let circleCarbohydrate = document.querySelector(".circle-carbohydrate");
let circleProtein = document.querySelector(".circle-protein");
let circleFiber = document.querySelector(".circle-fiber");
energy.textContent = (
  totalValue(nowRecipes, "macronutrients", "energy") / nowRecipes.portions
).toFixed(2);
circleFat.textContent =
  (
    totalValue(nowRecipes, "macronutrients", "fat") / nowRecipes.portions
  ).toFixed(2) + "g";
if (circleFat.textContent == "0.00g") {
  circleFat.textContent = 0;
  circleFat.style.borderColor = "#F3F3F4";
}
circleCarbohydrate.textContent =
  (
    totalValue(nowRecipes, "macronutrients", "carbohydrate") /
    nowRecipes.portions
  ).toFixed(2) + "g";
if (circleCarbohydrate.textContent == "0.00g") {
  circleCarbohydrate.textContent = 0;
  circleCarbohydrate.style.borderColor = "#F3F3F4";
}
circleProtein.textContent =
  (
    totalValue(nowRecipes, "macronutrients", "protein") / nowRecipes.portions
  ).toFixed(2) + "g";
if (circleProtein.textContent == "0.00g") {
  circleProtein.textContent = 0;
  circleProtein.style.borderColor = "#F3F3F4";
}
circleFiber.textContent =
  (
    totalValue(nowRecipes, "micronutrients", "fiber") / nowRecipes.portions
  ).toFixed(2) + "g";
if (circleFiber.textContent == "0.00g") {
  circleFiber.textContent = 0;
  circleFiber.style.borderColor = "#F3F3F4";
}
function setNowFoodEdit(nowIdEdit) {
  sessionStorage.setItem(
    "nowEditFood",
    JSON.stringify(food[food.findIndex((value) => value.id === nowIdEdit)])
  );
}
