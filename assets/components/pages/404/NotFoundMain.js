/**
 *
 *  This is the 404 Main
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import { PAINTER_ROLLER_404 } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/404/404.module.css";

export const NotFoundMain = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="notFoundMain"
      className={`${styles.not_found_main} overrides_NotFoundMain`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.not_found_main_cnt}`}>
          <img
            data-src={PAINTER_ROLLER_404}
            className="lazyload orientation-change-element half-second"
          />

          <div>
            <h1 className="orientation-change-element half-second">
              This page does not exist..
            </h1>

            <p className="orientation-change-element half-second">
              Please proceed back to the home page either by going back manually
              or clicking on the link below.
            </p>

            <a href="/" className="orientation-change-element half-second">
              <span>Back To Home</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
