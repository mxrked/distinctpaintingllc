/**
 *
 *  This is used to add/remove a fade fix class to a Framer motion component
 *
 *  @param {string} fmClass - The name for the fmClass
 *  @param {string} fixClass - The name for the fix class
 *
 */

export default function ManipFadeFixClasses(fmClass, fixClass) {
  if (document.querySelector(".fm-motion")) {
    const FM_MOTIONS = document.querySelectorAll(".fm-motion");

    FM_MOTIONS.forEach((fM) => {
      if (window.innerWidth > 991) {
        if (fM.classList.contains(fixClass)) {
          fM.classList.remove(fixClass);
          fM.classList.add(fmClass);
        }
      }

      if (window.innerWidth <= 990) {
        if (fM.classList.contains(fmClass)) {
          fM.classList.remove(fmClass);
          fM.classList.add(fixClass);
        }
      }
    });
  }
}
