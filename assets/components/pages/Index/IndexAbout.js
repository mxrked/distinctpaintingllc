/**
 *
 *  This is the Index About
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_LEFT, FADE_RIGHT } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { INDEX_ABOUT_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexAbout"
      className={`${styles.index_about} overrides_IndexAbout`}
    >
      <div className={`${styles.index_about_box} container-fluid`}>
        <div className={`${styles.index_about_row} row`}>
          <div
            className={`${styles.index_about_side} ${styles.index_about_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_RIGHT}
              className={`${styles.index_about_side_cnt} fm-motion fade-right fade-right-fix full-second`}
            >
              <BackgroundImage
                src={INDEX_ABOUT_BG}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
              />
            </motion.div>
          </div>
          <div
            className={`${styles.index_about_side} ${styles.index_about_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_LEFT}
              className={`${styles.index_about_side_cnt} fm-motion fade-left fade-left-fix full-second`}
            >
              <h2 className="orientation-change-element half-second">
                About Distinct
                <br />
                <span> </span>Painting LLC.
              </h2>

              <p className="orientation-change-element half-second">
                Welcome to Distinct Painting LLC, where we turn homes into works
                of art. Our expert house painting breathes life into every room,
                while precision drywall repair ensures flawless surfaces. With
                skilled carpentry, we craft both functional and beautiful
                additions. Through our services, your home's true potential is
                realized.
              </p>

              <a
                href="/contact"
                className="orientation-change-element half-second"
              >
                <span>Book A Service</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
