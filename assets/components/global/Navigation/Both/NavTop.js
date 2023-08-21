/**
 *
 *  This is the Nav Top
 *
 */

import { FaFacebook } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavTop = (props) => {
  return (
    <section id="navTop" className={`${styles.nav_top} overrides_NavTop`}>
      <div className={`${styles.nav_top_inner}`}>
        <div className={`${styles.nav_top_inner_box} container-fluid`}>
          <div className={`${styles.nav_top_inner_row} row`}>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <ul className={`${styles.contact_info}`}>
                  <li className="orientation-change-element half-second">
                    distinctpaintingllc@gmail.com
                  </li>
                  <li className="orientation-change-element half-second">
                    (336) 500-7283
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <ul className={`${styles.link_and_social}`}>
                  <li>
                    {props.disableLink == "/contact" ? (
                      <button
                        href="/contact"
                        className={`${styles.contact_link} ${styles.deactive} orientation-change-element half-second`}
                      >
                        <span>Contact</span>
                      </button>
                    ) : (
                      <a
                        href="/contact"
                        className={`${styles.contact_link} ${styles.active} orientation-change-element half-second`}
                      >
                        <span>Contact</span>
                      </a>
                    )}
                  </li>

                  <li>
                    <FaFacebook
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/Distinctpaintingllc",
                          "_self"
                        );
                      }}
                      className={`${styles.icon} orientation-change-element half-second`}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
