/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = (props) => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuMain"
        className={`${styles.main} full-second`}
      ></div>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />
    </div>
  );
};
