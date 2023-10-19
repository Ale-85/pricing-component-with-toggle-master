// const cardPro = document.querySelector(".pro");
// const cardMaster = document.querySelector(".master");
// const cardBasic = document.querySelector(".basic");

const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");
const container = document.querySelector(".container");
const toggle = document.querySelector("#toggle");
const annualPrice = document.querySelectorAll(".price-annually");
const monthlyPrice = document.querySelectorAll(".price-monthly");

container.addEventListener("click", (e) => {
  const clicked = e.target.closest(".card");

  //remove selected class
  cards.forEach((card) => card.classList.remove("selected"));
  buttons.forEach((btn) => {
    btn.classList.remove("btn-selected");
  });

  // Add selected class
  clicked.classList.add("selected");
  clicked.lastElementChild.classList.add("btn-selected");
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    annualPrice.forEach((a) => {
      a.style.display = "none";
    });
    monthlyPrice.forEach((m) => {
      m.style.display = "unset";
    });
  } else {
    annualPrice.forEach((a) => {
      a.style.display = "unset";
    });
    monthlyPrice.forEach((m) => {
      m.style.display = "none";
    });
  }
});
