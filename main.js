"use strict";

const menueTab = document.querySelector(".menue-tab");
const desktopMenue = document.querySelector("ul");
const mobileMenue = document.querySelector(".menue-wrapper");
const header = document.querySelector("header");

menueTab.addEventListener("click", (e) => {
  mobileMenue.classList.add("show");
  menueTab.style.display = "none";
  header.classList.add("addBlur");
});

mobileMenue.addEventListener("click", () => {
  mobileMenue.classList.remove("show");
  menueTab.style.display = "flex";
  header.classList.remove("addBlur");
});
