/**
 *
 *  This is the Desktop Nav
 *
 */
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import { LOGO_CUT } from "@/assets/cdns/CDNIcons";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} overrides_DesktopNav`}
    >
      <motion.div
        className={`${styles.desktop_nav_inner} fm-motion fade-in fade-in-fix`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                {props.disableLink == "/" ? (
                  <div className={`${styles.logo} ${styles.deactive}`}>
                    <img
                      data-src={LOGO_CUT}
                      className="lazyload half-second"
                      alt="Distinct Painting LLC"
                    />

                    <div></div>
                  </div>
                ) : (
                  <a
                    href="/"
                    className={`${styles.logo} ${styles.active} half-second`}
                  ></a>
                )}
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}></div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
