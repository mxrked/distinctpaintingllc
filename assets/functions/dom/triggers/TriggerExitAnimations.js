/**
 *
 *  This is used to trigger the exit animations for framer-motion
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";
import CloseMobileNav from "../closers/CloseMobileNav";

function TriggerExitAnimations() {
  document.querySelectorAll("a").forEach((link) => {
    //! Regular Links
    if (!link.classList.contains("nav-link")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Storing href
        DeclareStorageVariable("session", "HREF", link.href);

        // Disabling pointer events and scrolling
        document.body.style.overflowY = "hidden";
        document.body.style.pointerEvents = "none";

        // Hiding elements/page
        document.querySelectorAll(".fm-motion").forEach((fm) => {
          // This is to prevent weird resizing/orientation change for elements with this class
          if (!fm.classList.contains("full-second")) {
            fm.classList.add("full-second");
          }

          // Checking/Exiting each specific animation
          setTimeout(() => {
            // fm.style.opacity = 0;

            if (fm.classList.contains("fade-right")) {
              fm.style.transform = "translateX(-10%)";
              fm.style.opacity = 0;
            }

            if (fm.classList.contains("fade-left")) {
              fm.style.transform = "translateX(10%)";
              fm.style.opacity = 0;
            }

            if (fm.classList.contains("fade-up")) {
              fm.style.transform = "translateY(10%)";
              fm.style.opacity = 0;
            }

            if (fm.classList.contains("fade-down")) {
              fm.style.transform = "translateY(-10%)";
              fm.style.opacity = 0;
            }
          }, 500);
        });

        setTimeout(() => {
          document.querySelector(".page").style.opacity = 0;
          document.querySelector(".page").style.visibility = "hidden";
        }, 600);

        // Removing background color of navs
        // document.getElementById("desktopNav").style.backgroundColor =
        //   "transparent";
        // document.getElementById("mobileNav").style.backgroundColor =
        //   "transparent";

        // Route to href value
        setTimeout(() => {
          window.location.href = sessionStorage.getItem("HREF");
        }, 1000);
      });
    }

    //! Mobile Nav Links
    if (link.classList.contains("nav-link")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Storing href
        DeclareStorageVariable("session", "HREF", link.href);

        // Closing the mobile nav and search
        CloseMobileNav();

        // Disabling pointer events and scrolling
        setTimeout(() => {
          document.body.style.overflowY = "hidden";
          document.body.style.pointerEvents = "none";
        }, 2100);

        setTimeout(() => {
          document.querySelectorAll(".fm-motion").forEach((fm) => {
            fm.style.opacity = 0;
          });

          // Hiding elements
          document.querySelector(".page").style.opacity = 0;
          document.querySelector(".page").style.visibility = "hidden";
        }, 2120);

        // Removing background color of navs
        // document.getElementById("desktopNav").style.backgroundColor =
        //   "transparent";
        // document.getElementById("mobileNav").style.backgroundColor =
        //   "transparent";

        // Route to href value
        setTimeout(() => {
          window.location.href = sessionStorage.getItem("HREF");
          RemoveStorageVariable("session", "EA Fix");
        }, 2400);
      });
    }
  });
}

function TriggerExitAnimations_NON_LINKS() {
  // Disabling pointer events and scrolling
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  // Hiding page
  document.querySelector(".page").style.opacity = 0;
  document.querySelector(".page").style.visibility = "hidden";

  // Hiding elements
  document.querySelectorAll(".fm-motion").forEach((fm) => {
    fm.style.opacity = 0;
  });
}

export { TriggerExitAnimations, TriggerExitAnimations_NON_LINKS };
