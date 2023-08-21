/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { FaTimes } from "react-icons/fa";

import { LOGO_CUT } from "@/assets/cdns/CDNIcons";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = (props) => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div id="mobileNavMenuMain" className={`${styles.main} full-second`}>
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.main_cnt} half-second`}
        >
          <div
            className={`${styles.img_holder} orientation-change-element half-second`}
          >
            <img
              data-src={LOGO_CUT}
              className="lazyload"
              alt="Distinct Painting LLC Logo"
            />
          </div>

          <button
            id="mobileNavMenuCloser"
            className="orientation-change-element half-second"
            onClick={() => {
              CloseMobileNav();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>

          <ul>
            {props.disableLink == "/" ? (
              <li>
                <span
                  className={`${styles.deactive} half-second orientation-change-element`}
                >
                  Home
                </span>
              </li>
            ) : (
              <li>
                <a
                  href="/"
                  className={`${styles.active} nav-link half-second orientation-change-element`}
                >
                  <span>Home</span>
                </a>
              </li>
            )}
            {props.disableLink == "/gallery" ? (
              <li>
                <span
                  className={`${styles.deactive} half-second orientation-change-element`}
                >
                  Gallery
                </span>
              </li>
            ) : (
              <li>
                <a
                  href="/gallery"
                  className={`${styles.active} nav-link half-second orientation-change-element`}
                >
                  <span>Gallery</span>
                </a>
              </li>
            )}
            {props.disableLink == "/contact" ? (
              <li>
                <span
                  className={`${styles.deactive} half-second orientation-change-element`}
                >
                  Contact
                </span>
              </li>
            ) : (
              <li>
                <a
                  href="/contact"
                  className={`${styles.active} nav-link half-second orientation-change-element`}
                >
                  <span>Contact</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
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
