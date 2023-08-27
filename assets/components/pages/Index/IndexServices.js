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

import { FADE_UP } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import {
  INDEX_PAINTING_BG,
  INDEX_PRESSURE_WASHING_BG,
  INDEX_DRY_WALL_REPAIR_BG,
  INDEX_CARPENTRY_BG,
} from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexServices = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexServices"
      className={`${styles.index_services} overrides_IndexServices`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_UP}
        className={`${styles.index_services_inner} fm-motion fade-up fade-up-fix full-second`}
      >
        <div className={`${styles.index_services_inner_top}`}>
          <h2 className="orientation-change-element half-second">
            Book A Service.
          </h2>

          <p className="orientation-change-element half-second">
            Distinct Painting LLC is your comprehensive solution for house
            painting, pressure washing, drywall repair, and carpentry needs. We
            enhance and transform your spaces with skill, precision, and
            creativity.
          </p>
        </div>

        <div className={`${styles.index_services_inner_main}`}>
          <div
            className={`${styles.index_services_inner_main_box} container-fluid`}
          >
            <div className={`${styles.index_services_inner_main_row} row`}>
              <div
                className={`${styles.index_services_inner_main_side} ${styles.painting} col-lg-3 col-md-3 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.index_services_inner_main_side_cnt}`}>
                  <BackgroundImage
                    src={INDEX_PAINTING_BG}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <a
                    href="/contact#painting"
                    className="orientation-change-element half-second"
                  >
                    <span>
                      House <br />
                      Painting
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.index_services_inner_main_side} ${styles.pressure_washing} col-lg-3 col-md-3 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.index_services_inner_main_side_cnt}`}>
                  <BackgroundImage
                    src={INDEX_PRESSURE_WASHING_BG}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <a
                    href="/contact#pressure_washing"
                    className="orientation-change-element half-second"
                  >
                    <span>
                      Pressure <br />
                      Washing
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.index_services_inner_main_side} ${styles.dry_wall} col-lg-3 col-md-3 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.index_services_inner_main_side_cnt}`}>
                  <BackgroundImage
                    src={INDEX_DRY_WALL_REPAIR_BG}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <a
                    href="/contact#drywall_repair"
                    className="orientation-change-element half-second"
                  >
                    <span>
                      Drywall <br />
                      Repair
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.index_services_inner_main_side} ${styles.carpentry} col-lg-3 col-md-3 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.index_services_inner_main_side_cnt}`}>
                  <BackgroundImage
                    src={INDEX_CARPENTRY_BG}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <a
                    href="/contact#carpentry"
                    className="orientation-change-element half-second"
                  >
                    <span>
                      Carpentry/ <br />
                      Woodcraft
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
