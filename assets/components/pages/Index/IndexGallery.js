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
import { FaHandPointer } from "react-icons/fa";

import { FADE_UP } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = (props) => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexGallery"
      className={`${styles.index_gallery} overrides_IndexGallery`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_UP}
        className={`${styles.index_gallery_inner} fm-motion fade-up fade-up-fix full-second`}
      >
        <div className={`${styles.index_gallery_inner_top}`}>
          <h2 className="orientation-change-element half-second">
            A Look At
            <br />
            <span> </span>Our Work.
          </h2>

          <p className="orientation-change-element half-second">
            Below you can get a view of the work we have done during the years
            Distinct Painting LLC has been in business. All of which can be
            viewed on our Gallery page.
          </p>

          <a href="/gallery" className="orientation-change-element half-second">
            <span>View Gallery</span>
          </a>
        </div>

        <div className={`${styles.index_gallery_inner_main}`}>
          <div
            className={`${styles.index_gallery_inner_main_box} container-fluid`}
          >
            <div className={`${styles.index_gallery_inner_main_row} row`}>
              {props.galleryData.map((item) => (
                <div
                  className={`${styles.index_gallery_inner_main_side} ${styles.gallery_item} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                  key={item._itemID}
                >
                  <div className={`${styles.gallery_item_inner}`}>
                    <BackgroundImage
                      src={item._itemImgSrc}
                      className={`${styles.bg}`}
                      width="100%"
                      height="100%"
                    />

                    <button
                      onClick={() => {
                        if (document.getElementById(item._itemID)) {
                          DeclareStorageVariable(
                            "session",
                            "Modal Opened",
                            true
                          );

                          document.body.style.pointerEvents = "none";
                          document.body.style.overflowY = "hidden";

                          document.getElementById(item._itemID).style.display =
                            "block";

                          document.getElementById(
                            item._itemID
                          ).style.overflowY = "auto";
                          document.getElementById(
                            item._itemID
                          ).style.pointerEvents = "auto";

                          document
                            .getElementById(item._itemID)
                            .querySelector(".darken").style.opacity = 1;
                          document
                            .getElementById(item._itemID)
                            .querySelector(".darken").style.visibility =
                            "visible";
                        }
                      }}
                      className={`${styles.darken} half-second orientation-change-element`}
                    >
                      <FaHandPointer className={`${styles.icon}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
