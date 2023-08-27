/**
 *
 *  This is the Contact Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import { CONTACT_TOP_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <motion.section
      ref={REF}
      initial="hidden"
      animate={CONTROLS}
      variants={FADE_IN}
      id="contactTop"
      className={`${styles.contact_top} overrides_ContactTop fm-motion fade-in fade-in-fix full-second`}
    >
      <BackgroundImage
        src={CONTACT_TOP_BG}
        className={`${styles.bg}`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.contact_top_overlay}`}>
        <div className={`${styles.contact_top_overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Book A <br />
            <span> </span>Service/Contact.
          </h1>

          <p className="orientation-change-element half-second">
            Easily book services with Distinct Painting LLC for house
            improvement projects. Contact us on our website or by phone to
            discuss and plan. Your home dreams, our mission.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
