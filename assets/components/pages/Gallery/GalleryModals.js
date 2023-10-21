/**
 *
 *  This is the Gallery Modals
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Gallery/Gallery.module.css";

export const GalleryModals = (props) => {
  return (
    <div>
      {props.galleryData.map((item) => (
        <div className={`${styles.modal} modal`} id={`MODAL_${item._itemID}`}>
          <div
            className={`${styles.darken} darken`}
            id={`DARKEN_${item._itemID}`}
            onClick={() => {
              document.querySelectorAll(".modal").forEach((modal) => {
                modal.style.display = "none";
              });

              RemoveStorageVariable("session", "Modal Opened");

              document.body.style.pointerEvents = "auto";
              document.body.style.overflowY = "auto";
            }}
          />

          <div className={`${styles.modal_inner} modal-inner`}>
            <div className={`${styles.bg_holder}`}>
              {/**
              <BackgroundImage
                src={item._itemImgSrc}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
                style={{ imageRendering: "auto" }}
              />
              */}

              <LazyLoadImage
                src={item._itemImgSrc}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
