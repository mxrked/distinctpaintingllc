/**
 *
 *  This is the Footer
 *
 */
import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCopyright, FaFacebook, FaInstagram } from "react-icons/fa";

import { LOGO_CUT } from "@/assets/cdns/CDNIcons";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <footer className={`${styles.footer} overrides_Footer`}>
      <div className={`${styles.footer_top}`}>
        <motion.div
          className={`${styles.footer_top_inner} fm-motion fade-in fade-in-fix half-second`}
          ref={REF}
          initial="hidden"
          animate={CONTROLS}
          variants={FADE_IN}
        >
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  {props.disableLink == "/" ? (
                    <div
                      className={`${styles.logo} ${styles.deactive} deactive`}
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

                  <div
                    className={`${styles.copyright} orientation-change-element half-second`}
                  >
                    <FaCopyright className={`${styles.icon}`} />

                    <span>
                      2023 Distinct Painting LLC. All rights reserved.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <div className={`${styles.footer_links}`}>
                    <ul>
                      {props.disableLink == "/" ? (
                        <li>
                          <span
                            className={`${styles.deactive} deactive half-second orientation-change-element`}
                          >
                            Home
                          </span>
                        </li>
                      ) : (
                        <li>
                          <a
                            href="/"
                            className={`${styles.active} half-second orientation-change-element`}
                          >
                            <span>Home</span>
                          </a>
                        </li>
                      )}
                      {props.disableLink == "/gallery" ? (
                        <li>
                          <span
                            className={`${styles.deactive} deactive half-second orientation-change-element`}
                          >
                            Gallery
                          </span>
                        </li>
                      ) : (
                        <li>
                          <a
                            href="/gallery"
                            className={`${styles.active} half-second orientation-change-element`}
                          >
                            <span>Gallery</span>
                          </a>
                        </li>
                      )}
                      {props.disableLink == "/contact" ? (
                        <li>
                          <span
                            className={`${styles.deactive} deactive half-second orientation-change-element`}
                          >
                            Contact
                          </span>
                        </li>
                      ) : (
                        <li>
                          <a
                            href="/contact"
                            className={`${styles.active} half-second orientation-change-element`}
                          >
                            <span>Contact</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className={`${styles.footer_contact}`}>
                    <ul className={`${styles.socials}`}>
                      <li className="orientation-change-element half-second">
                        <FaFacebook
                          className={`${styles.icon}`}
                          onClick={() => {
                            window.open(
                              "https://www.facebook.com/Distinctpaintingllc",
                              "_self"
                            );
                          }}
                        />
                      </li>
                      <li>
                        <FaInstagram
                          onClick={() => {
                            window.open(
                              "https://www.instagram.com/distinctpaintingllc/?hl=en",
                              "_self"
                            );
                          }}
                          className={`${styles.icon} orientation-change-element half-second`}
                        />
                      </li>
                    </ul>

                    <ul className={`${styles.contact}`}>
                      <li>
                        <span className="orientation-change-element selected half-second">
                          (336) 500-7283
                        </span>
                      </li>
                      <li>
                        <span className="orientation-change-element selected half-second">
                          distinctpaintingllc@gmail.com
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <motion.div
          className={`${styles.footer_bottom_inner} fm-motion fade-in fade-in-fix half-second`}
          ref={REF}
          initial="hidden"
          animate={CONTROLS}
          variants={FADE_IN}
        >
          <span className="orientation-change-element half-second">
            Website created by{" "}
            <span
              onClick={() => {
                window.open("https://www.codingthefront.com/", "_blank");
              }}
            >
              codingthefront.com
            </span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
};
