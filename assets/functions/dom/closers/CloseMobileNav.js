/**
 *
 *  This is to close the mobile nav
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");

  DARKEN.style.pointerEvents = "none";
  MAIN.style.pointerEvents = "none";
  MAIN.style.overflowY = "hidden";
  document.getElementById("mobileNavMenuMainCnt").style.opacity = 0;

  setTimeout(() => {
    MAIN.style.transform = "translateX(100%)";
  }, 900);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1200);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");

    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";

    // Enabling page clicking and scrolling
    if (document.querySelector(".page")) {
      document.querySelectorAll(".page").forEach((page) => {
        // page.style.overflowY = "auto";
        page.style.pointerEvents = "auto";
      });
    }
  }, 2300);
}
