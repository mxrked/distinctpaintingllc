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
import Slider from "react-slick";

import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import {
  INDEX_TOP_SLIDE_1,
  INDEX_TOP_SLIDE_2,
  INDEX_TOP_SLIDE_3,
  INDEX_TOP_SLIDE_4,
} from "@/assets/data/variables/OBJECTS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  const TOP_SLIDES = [
    INDEX_TOP_SLIDE_1,
    INDEX_TOP_SLIDE_2,
    INDEX_TOP_SLIDE_3,
    INDEX_TOP_SLIDE_4,
  ];

  const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 419,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
        className={`${styles.motion_holder} fm-motion fade-in fade-in-fix half-second`}
      >
        <Slider {...SLIDER_SETTINGS} className={`${styles.index_top_slider}`}>
          {TOP_SLIDES.map((slide) => (
            <div
              key={slide.getSlideID}
              className={`${styles.index_top_slider_slide}`}
            >
              <BackgroundImage
                src={slide.getSlideBg}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
              />

              <div className={`${styles.darken}`}>
                <div className={`${styles.index_top_slider_slide_cnt}`}>
                  <h1 className="orientation-change-element half-second">
                    {slide.getSlideTopTextA} <br /> {slide.getSlideTopTextB}
                  </h1>

                  <p className="orientation-change-element half-second">
                    {slide.getSlideBottomText}
                  </p>

                  <div>
                    <a
                      href="/gallery"
                      className={`${styles.gallery_link} orientation-change-element half-second`}
                    >
                      <span>View Gallery</span>
                    </a>

                    <a
                      href={slide.getSlideServiceLink}
                      className={`${styles.contact_link} orientation-change-element half-second`}
                    >
                      <span>Book A Service</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};
