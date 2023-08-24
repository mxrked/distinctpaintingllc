/**
 *
 *  This is the Index Gallery
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { INDEX_CONTACT_BG } from "@/assets/cdns/CDNBgs";
import { FADE_LEFT, FADE_RIGHT } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} overrides_IndexContact`}
    >
      <div className={`${styles.index_contact_box} container-fluid`}>
        <div className={`${styles.index_contact_row} row`}>
          <div
            className={`${styles.index_contact_side} ${styles.index_contact_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_RIGHT}
              className={`${styles.index_contact_side_cnt} fm-motion fade-right fade-right-fix full-second`}
            >
              <h1 className="orientation-change-element half-second">
                Contact/Book
                <br />
                <span> </span>A Service.
              </h1>

              <p className="orientation-change-element half-second">
                Booking your service with Distinct Painting LLC is effortless.
                Whether it's house painting, pressure washing, drywall repair,
                or carpentry, simply reach out to us through our website or give
                us a call to discuss your project and schedule a consultation.
                We're here to bring your home improvement dreams to life.
              </p>

              <a
                href="/contact"
                className="orientation-change-element half-second"
              >
                <span>Book A Service</span>
              </a>
            </motion.div>
          </div>
          <div
            className={`${styles.index_contact_side} ${styles.index_contact_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_LEFT}
              className={`${styles.index_contact_side_cnt} fm-motion fade-left fade-left-fix full-second`}
            >
              <BackgroundImage
                src={INDEX_CONTACT_BG}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
