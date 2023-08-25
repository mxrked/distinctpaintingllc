/**
 *
 *  This is the Index Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import { GALLERY_TOP_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Gallery/Gallery.module.css";

export const GalleryTop = () => {
  return (
    <motion.section
      id="galleryTop"
      className={`${styles.gallery_top} overrides_GalleryTop fm-motion fade-in fade-in-fix full-second`}
    >
      <BackgroundImage
        src={GALLERY_TOP_BG}
        className={`${styles.bg}`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.gallery_top_overlay}`}>
        <div className={`${styles.gallery_top_overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Our Work/Gallery.
          </h1>

          <p className="orientation-change-element half-second">
            Below you can get a view of the work we have done during the years
            Distinct Painting LLC has been in business.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
