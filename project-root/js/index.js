window.onload = function () {
  loadImg();
};
function loadImg() {
  document.querySelectorAll(".a-quarter-img").forEach((img) => {
    if (img.complete) {
      img.width = img.naturalWidth / 4;
      img.height = img.naturalHeight / 4;
    } else {
      img.addEventListener("load", function () {
        img.width = img.naturalWidth / 4;
        img.height = img.naturalHeight / 4;
      });
    }
  });
}
let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let containerHeader = document.querySelector(".container header");
function openMenu() {
  if (!menu || !container || !containerHeader) return;
  if (menu.style.display === "none") {
    menu.style.display = "block";
    container.style.marginLeft = "220px";
    container.style.width = "calc(100% - 220px)";
    containerHeader.style.width = "calc(100% - 220px)";
    menuAction = "true";
  } else {
    menu.style.display = "none";
    container.style.marginLeft = "0";
    container.style.width = "100%";
    containerHeader.style.width = "100%";
    menuAction = "false";
  }
  sessionStorage.setItem("menuAction", menuAction);
}
let menuAction = sessionStorage.getItem("menuAction") || "false";
if (menuAction === "true") {
  openMenu();
}
/*js*/
let inputValue = document.querySelectorAll("input");
function resetForm() {
  inputValue.forEach((value) => (value.value = ""));
}
let nowUser =
  JSON.parse(localStorage.getItem("nowUser")) ||
  JSON.parse(sessionStorage.getItem("nowUser"));
if (
  nowUser === null &&
  window.location.pathname !== "/project-root/pages/signIn.html" &&
  window.location.pathname !== "/project-root/pages/signUp.html"
) {
  location.href = "/project-root/pages/signIn.html";
} else if (
  nowUser !== null &&
  (window.location.pathname === "/project-root/pages/signIn.html" ||
    window.location.pathname === "/project-root/pages/signUp.html")
) {
  window.history.back();
}
function signOut() {
  localStorage.removeItem("nowUser");
  sessionStorage.removeItem("nowUser");
}
//dulieu
let food = JSON.parse(localStorage.getItem("food")) || [
  {
    id: 1,
    name: "Ackee, canned, drained",
    source: "Minh Cuong Tran",
    category: "Vegetables and Vegetable Products",
    quantity: "100g",
    macronutrients: {
      energy: 151,
      carbohydrate: 0.8,
      fat: 15.2,
      protein: 2.9,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: null,
      sodium: 240.0,
      water: 76.7,
      vitaminA: null,
      vitaminB6: 0.06,
      vitaminB12: 0.0,
      vitaminC: 30.0,
      vitaminD: 0.0,
      vitaminE: null,
      vitaminK: null,
      starch: 0.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 0.8,
      calcium: 35.0,
      iron: 0.7,
      magnesium: 40.0,
      phosphorus: 47.0,
      potassium: 270.0,
      zinc: 0.6,
      copper: 0.27,
      fluoride: null,
      manganese: null,
      selenium: null,
      thiamin: 0.03,
      riboflavin: 0.07,
      niacin: 0.6,
      pantothenicAcid: null,
      folateTotal: 41.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: null,
      fattyAcidsMonounsaturated: null,
      fattyAcidsPolyunsaturated: null,
      chloride: 340.0,
    },
  },
];
let recipes = JSON.parse(localStorage.getItem("recipes")) || [
  {
    id: 1,
    coverSrc:
      "https://nutriumstorageaccount.blob.core.windows.net/rails-active-storage/6qim5uox87nr22st6i7nzt8",
    name: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
    description:
      "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
    author: "Joana Jardim",
    totalTime: "00:40",
    preparationTime: "00:40",
    finalWeight: "978.8 grams",
    portions: 4,
    ingredients: [food[2], food[1]],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin...",
      },
    ],
    category: "Vegetarian dishes",
  },
  {
    id: 2,
    coverSrc:
      "https://nutriumstorageaccount.blob.core.windows.net/rails-active-storage/6qim5uox87nr22st6i7nzt8",
    name: "test",
    description:
      "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor.",
    author: "ack Jardim",
    totalTime: "00:40",
    preparationTime: "00:40",
    finalWeight: "978.8 grams",
    portions: 4,
    ingredients: [food[0], food[1]],
    cookingMethods: [
      {
        id: 1,
        content:
          "STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin...",
      },
    ],
    category: "Vegetarian dishes",
  },
];
/*ten acc*/
let nowUsername = document.querySelector("#nowUsername");
if (nowUsername) {
  nowUsername.textContent = nowUser.username;
}
let totalValue = (object, boxList, value) => {
  return object.ingredients.reduce(
    (pver, cur) => pver + (parseFloat(cur?.[boxList]?.[value]) || 0),
    0
  );
};
