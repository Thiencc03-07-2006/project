/*list*/
let cholesterol = document.querySelector(".cholestrol");
let fiber = document.querySelector(".fiber");
let sodium = document.querySelector(".sodium");
let water = document.querySelector(".water");
let vitaminA = document.querySelector(".vitamin-a");
let vitaminB6 = document.querySelector(".vitamin-b-6");
let vitaminB12 = document.querySelector(".vitamin-b-12");
let vitaminC = document.querySelector(".vitamin-c");
let vitaminD = document.querySelector(".vitamin-d-d2-d3");
let vitaminE = document.querySelector(".vitamin-e");
let vitaminK = document.querySelector(".vitamin-k");
let starch = document.querySelector(".starch");
let lactose = document.querySelector(".lactose");
let alcohol = document.querySelector(".alcohol");
let caffeine = document.querySelector(".caffeine");
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
let folicAcid = document.querySelector(".folic-acid");
let fattyAcidsTrans = document.querySelector(".fatty-acids-total-trans");
let fattyAcidsSaturated = document.querySelector(
  ".fatty-acids-total-saturated"
);
let fattyAcidsMonounsaturated = document.querySelector(
  ".fatty-acids-total-monounsaturated"
);
let fattyAcidsPolyunsaturated = document.querySelector(
  ".fatty-acids-total-polyunsaturated"
);
let chloride = document.querySelector(".chloride");
/**/
let name = document.querySelector(".name");
let source = document.querySelector(".source");
let categorySelect = document.querySelector(".category");
categorySelect.addEventListener("mousedown", function (event) {
  event.preventDefault();
  const option = event.target;
  option.selected = !option.selected;
});
let energy = document.querySelector(".energy");
let fat = document.querySelector(".fat");
let carbohydrate = document.querySelector(".carbohydrate");
let protein = document.querySelector(".protein");
let nowEditFood = JSON.parse(sessionStorage.getItem("nowEditFood"));
cholesterol.value = nowEditFood.micronutrients.cholesterol;
fiber.value = nowEditFood.micronutrients.fiber;
sodium.value = nowEditFood.micronutrients.sodium;
water.value = nowEditFood.micronutrients.water;
vitaminA.value = nowEditFood.micronutrients.vitaminA;
vitaminB6.value = nowEditFood.micronutrients.vitaminB6;
vitaminB12.value = nowEditFood.micronutrients.vitaminB12;
vitaminC.value = nowEditFood.micronutrients.vitaminC;
vitaminD.value = nowEditFood.micronutrients.vitaminD;
vitaminE.value = nowEditFood.micronutrients.vitaminE;
vitaminK.value = nowEditFood.micronutrients.vitaminK;
starch.value = nowEditFood.micronutrients.starch;
lactose.value = nowEditFood.micronutrients.lactose;
alcohol.value = nowEditFood.micronutrients.alcohol;
caffeine.value = nowEditFood.micronutrients.caffeine;
sugars.value = nowEditFood.micronutrients.sugars;
calcium.value = nowEditFood.micronutrients.calcium;
iron.value = nowEditFood.micronutrients.iron;
magnesium.value = nowEditFood.micronutrients.magnesium;
phosphorus.value = nowEditFood.micronutrients.phosphorus;
potassium.value = nowEditFood.micronutrients.potassium;
zinc.value = nowEditFood.micronutrients.zinc;
copper.value = nowEditFood.micronutrients.copper;
fluoride.value = nowEditFood.micronutrients.fluoride;
manganese.value = nowEditFood.micronutrients.manganese;
selenium.value = nowEditFood.micronutrients.selenium;
thiamin.value = nowEditFood.micronutrients.thiamin;
riboflavin.value = nowEditFood.micronutrients.riboflavin;
niacin.value = nowEditFood.micronutrients.niacin;
pantothenicAcid.value = nowEditFood.micronutrients.pantothenicAcid;
folateTotal.value = nowEditFood.micronutrients.folateTotal;
folicAcid.value = nowEditFood.micronutrients.folicAcid;
fattyAcidsTrans.value = nowEditFood.micronutrients.fattyAcidsTrans;
fattyAcidsSaturated.value = nowEditFood.micronutrients.fattyAcidsSaturated;
fattyAcidsMonounsaturated.value =
  nowEditFood.micronutrients.fattyAcidsMonounsaturated;
fattyAcidsPolyunsaturated.value =
  nowEditFood.micronutrients.fattyAcidsPolyunsaturated;
chloride.value = nowEditFood.micronutrients.chloride;
/**/
name.value = nowEditFood.name;
source.textContent = nowEditFood.source;
let textCategory = document.querySelector(".textCategory");
textCategory.textContent = nowEditFood.category;
energy.value = nowEditFood.macronutrients.energy;
fat.value = nowEditFood.macronutrients.fat;
carbohydrate.value = nowEditFood.macronutrients.carbohydrate;
protein.value = nowEditFood.macronutrients.protein;
let listSelect = document.querySelectorAll(".category option");
listSelect.forEach((value) => (value.style.display = "none"));
listSelect[0].style.display = "block";
document.querySelector(".category").multiple = false;
let fistTime = true;
function openSelect() {
  listSelect.forEach((value) => (value.style.display = "block"));
  listSelect[0].style.display = "none";
  document.querySelector(".category").multiple = true;
  if (fistTime) {
    for (let option of categorySelect.options) {
      if (nowEditFood.category.includes(option.value)) {
        option.selected = true;
      }
    }
    fistTime = false;
  }
}
function saveFood() {
  let selectedCategories = Array.from(categorySelect.selectedOptions)
    .map((value) => value.value)
    .filter((value) => value !== "bug1");
  if (
    name.value.length > 0 &&
    selectedCategories.length > 0 &&
    energy.value >= 0 &&
    fat.value >= 0 &&
    carbohydrate.value >= 0 &&
    protein.value >= 0
  ) {
    nowEditFood = {
      id: nowEditFood.id,
      name: name.value,
      source: source.textContent,
      category: selectedCategories.join(", "),
      quantity: "100g",
      macronutrients: {
        energy: energy.value,
        carbohydrate: carbohydrate.value,
        fat: fat.value,
        protein: protein.value,
      },
      micronutrients: {
        cholesterol: cholesterol.value === "" ? null : cholesterol.value,
        fiber: fiber.value === "" ? null : fiber.value,
        sodium: sodium.value === "" ? null : sodium.value,
        water: water.value === "" ? null : water.value,
        vitaminA: vitaminA.value === "" ? null : vitaminA.value,
        vitaminB6: vitaminB6.value === "" ? null : vitaminB6.value,
        vitaminB12: vitaminB12.value === "" ? null : vitaminB12.value,
        vitaminC: vitaminC.value === "" ? null : vitaminC.value,
        vitaminD: vitaminD.value === "" ? null : vitaminD.value,
        vitaminE: vitaminE.value === "" ? null : vitaminE.value,
        vitaminK: vitaminK.value === "" ? null : vitaminK.value,
        starch: starch.value === "" ? null : starch.value,
        lactose: lactose.value === "" ? null : lactose.value,
        alcohol: alcohol.value === "" ? null : alcohol.value,
        caffeine: caffeine.value === "" ? null : caffeine.value,
        sugars: sugars.value === "" ? null : sugars.value,
        calcium: calcium.value === "" ? null : calcium.value,
        iron: iron.value === "" ? null : iron.value,
        magnesium: magnesium.value === "" ? null : magnesium.value,
        phosphorus: phosphorus.value === "" ? null : phosphorus.value,
        potassium: potassium.value === "" ? null : potassium.value,
        zinc: zinc.value === "" ? null : zinc.value,
        copper: copper.value === "" ? null : copper.value,
        fluoride: fluoride.value === "" ? null : fluoride.value,
        manganese: manganese.value === "" ? null : manganese.value,
        selenium: selenium.value === "" ? null : selenium.value,
        thiamin: thiamin.value === "" ? null : thiamin.value,
        riboflavin: riboflavin.value === "" ? null : riboflavin.value,
        niacin: niacin.value === "" ? null : niacin.value,
        pantothenicAcid:
          pantothenicAcid.value === "" ? null : pantothenicAcid.value,
        folateTotal: folateTotal.value === "" ? null : folateTotal.value,
        folicAcid: folicAcid.value === "" ? null : folicAcid.value,
        fattyAcidsTrans:
          fattyAcidsTrans.value === "" ? null : fattyAcidsTrans.value,
        fattyAcidsSaturated:
          fattyAcidsSaturated.value === "" ? null : fattyAcidsSaturated.value,
        fattyAcidsMonounsaturated:
          fattyAcidsMonounsaturated.value === ""
            ? null
            : fattyAcidsMonounsaturated.value,
        fattyAcidsPolyunsaturated:
          fattyAcidsPolyunsaturated.value === ""
            ? null
            : fattyAcidsPolyunsaturated.value,
        chloride: chloride.value === "" ? null : chloride.value,
      },
    };
    food[food.findIndex((value) => value.id === nowEditFood.id)] = nowEditFood;
    localStorage.setItem("food", JSON.stringify(food));
    updateRecipes();
    window.history.back();
  } else {
    alert("savefa");
  }
}
function updateRecipes() {
  let food = JSON.parse(localStorage.getItem("food"));
  let recipes = JSON.parse(localStorage.getItem("recipes")) || null;
  if (recipes) {
    recipes.forEach((value) => {
      value.ingredients = value.ingredients.map((value2) => {
        return food.find((value3) => value3.id === value2.id);
      });
    });
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
  let nowRecipes = JSON.parse(sessionStorage.getItem("nowRecipes")) || null;
  if (nowRecipes) {
    nowRecipes.ingredients = nowRecipes.ingredients.map((value1) => {
      return food.find((value2) => value2.id === value1.id);
    });
    sessionStorage.setItem("nowRecipes", JSON.stringify(nowRecipes));
  }
}
