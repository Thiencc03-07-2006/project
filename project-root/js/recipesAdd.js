let tr = document.querySelectorAll(
  ".container main .main-bottom .box-left .box-top .list table tbody tr"
);
console.log(tr);
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
const dataValues = [2.2, 95.6, 2.2];
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
        formatter: (value, context) => value + "%",
      },
    },
  },
  plugins: [ChartDataLabels],
});
