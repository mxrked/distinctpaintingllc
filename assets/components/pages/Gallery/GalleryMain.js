/**
 *
 *  This is the Gallery Main
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import { GalleryItem } from "./GalleryItem";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Gallery/Gallery.module.css";

export const GalleryMain = ({ galleryData }) => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  const ITEMS_PER_PAGE = 12;
  const [LOADED_ITEMS, SET_LOADED_ITEMS] = useState(
    galleryData.slice(0, ITEMS_PER_PAGE)
  );
  const [PAGE, SET_PAGE] = useState(1);
  const [HAS_MORE_ITEMS, SET_HAS_MORE_ITEMS] = useState(true);

  // Loading More Items
  const LOAD_MORE_ITEMS = () => {
    const START_INDEX = PAGE * ITEMS_PER_PAGE;
    const END_INDEX = START_INDEX + ITEMS_PER_PAGE;
    const NEW_ITEMS = galleryData.slice(START_INDEX, END_INDEX);

    if (NEW_ITEMS.length === 0) {
      SET_HAS_MORE_ITEMS(false);
    } else {
      SET_LOADED_ITEMS([...LOADED_ITEMS, ...NEW_ITEMS]);
      SET_PAGE(PAGE + 1);
    }
  };

  return (
    <section
      id="galleryMain"
      className={`${styles.gallery_main} overrides_GalleryMain`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
        className={`${styles.gallery_main_inner} fm-motion fade-in fade-in-fix full-second`}
      >
        <div className={`${styles.gallery_main_inner_box} container-fluid`}>
          <div className={`${styles.gallery_main_inner_row} row`}>
            {LOADED_ITEMS.map((item) => (
              <GalleryItem
                item={item._itemID}
                key={item._itemID}
                id={item._itemID}
                img={item._itemImgSrc}
              />
            ))}

            <button
              className={`${styles.load_more_btn} orientation-change-element half-second`}
              onClick={LOAD_MORE_ITEMS}
              style={{
                opacity: HAS_MORE_ITEMS ? 1 : 0.5,
                pointerEvents: HAS_MORE_ITEMS ? "auto" : "none",
              }}
            >
              <span>Load More Items</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
