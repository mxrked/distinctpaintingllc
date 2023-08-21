/**
 *
 *  This is the Mobile Nav
 *
 */
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import { LOGO_CUT } from "@/assets/cdns/CDNIcons";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ToggleMobileNav from "@/assets/functions/dom/togglers/ToggleMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} overrides_MobileNav`}>
      <motion.div
        className={`${styles.mobile_nav_inner} fm-motion fade-in fade-in-fix half-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {props.disableLink == "/" ? (
                  <div className={`${styles.logo} ${styles.deactive}`}>
                    <div className={`${styles.img_holder}`}>
                      <img
                        data-src={LOGO_CUT}
                        className="lazyload half-second"
                        alt="Distinct Painting LLC"
                      />
                    </div>

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        Distinct Painting <span>LLC</span>
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        Painting, Pressure Washing, Dry Wall, Carpentry
                      </span>
                    </div>
                  </div>
                ) : (
                  <a
                    href="/"
                    className={`${styles.logo} ${styles.active} half-second`}
                  >
                    <div className={`${styles.img_holder}`}>
                      <img
                        data-src={LOGO_CUT}
                        className="lazyload half-second"
                        alt="Distinct Painting LLC"
                      />
                    </div>

                    <div>
                      <span
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        Distinct Painting <span>LLC</span>
                      </span>
                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        Painting, Pressure Washing, Dry Wall, Carpentry
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  id="mobileNavToggler"
                  onClick={() => {
                    ToggleMobileNav();
                  }}
                >
                  <span className="half-second" />
                  <span className="half-second" />
                  <span className="half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
