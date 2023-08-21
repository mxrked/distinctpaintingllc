/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  // Prevents page from being clickable and scrollable
  if (document.querySelector(".page")) {
    document.querySelectorAll(".page").forEach((page) => {
      page.style.overflowY = "hidden";
      page.style.pointerEvents = "none";
    });
  }

  // Displaying the content
  document.getElementById("mobileNavMenu").style.display = "block";

  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    MAIN.style.transform = "translateX(0)";
  }, 1400);

  setTimeout(() => {
    document.getElementById("mobileNavMenuMainCnt").style.opacity = 1;
  }, 1900);

  setTimeout(() => {
    DARKEN.style.pointerEvents = "auto";
    MAIN.style.overflowY = "auto";
    MAIN.style.pointerEvents = "auto";
  }, 2500);
}
