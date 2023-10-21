/**
 *
 *  This is the Gallery Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import { GALLERY_TOP_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Gallery/Gallery.module.css";

export const GalleryTop = () => {
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
      id="galleryTop"
      className={`${styles.gallery_top} overrides_GalleryTop fm-motion fade-in fade-in-fix full-second`}
    >
      {/**
      <BackgroundImage
        src={GALLERY_TOP_BG}
        className={`${styles.bg}`}
        width="100%"
        height="100%"
      />
      */}

      <LazyLoadImage
        src={GALLERY_TOP_BG}
        className={`${styles.bg}`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.gallery_top_overlay}`}>
        <div className={`${styles.gallery_top_overlay_cnt}`}>
          <h2 className="orientation-change-element half-second">
            Our Work/Gallery.
          </h2>

          <p className="orientation-change-element half-second">
            Discover Distinct Painting LLC's journey through our gallery.
            Witness years of diverse projects reflecting vibrant colors,
            enduring craftsmanship, and transformative beauty in every space we
            touch.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
