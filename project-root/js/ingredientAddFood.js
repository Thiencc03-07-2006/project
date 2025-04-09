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
let pantothenicAcid = document.querySelector(".pantothenic-acit");
let folateTotal = document.querySelector(".folate-total");
let folicAcid = document.querySelector(".folic-acid");
let fattyAcidsTrans = document.querySelector(".fatty-acids-total-trans");
let fattyAcidsSaturated = document.querySelector(
  ".fatty-acids-total-saturated"
);
let fattyAcidsMono = document.querySelector(
  ".fatty-acids-total-monounsaturated"
);
let fattyAcidsPoly = document.querySelector(
  ".fatty-acids-total-polyunsaturated"
);
let chloride = document.querySelector(".chloride");
/**/
let name = document.querySelector(".name");
let category = Array.from(
  document.querySelector(".category").selectedOptions
).map((value) => value.value);
let enrgy = document.querySelector(".enrgy");
let fat = document.querySelector(".fat");
let carbohydrate = document.querySelector(".carbohydrate");
let protein = document.querySelector(".protein");
function addFood() {
  if (
    name.value.length > 0 &&
    category.length > 0 &&
    enrgy.value >= 0 &&
    fat.value >= 0 &&
    carbohydrate.value >= 0 &&
    protein.value >= 0
  ) {
    food.push({
      id: 1,
      name: name.value,
      source: nowUser.username,
      category: category.join(", "),
      quantity: "100g",
      macronutrients: {
        energy: enrgy.value,
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
    });
  }
}
