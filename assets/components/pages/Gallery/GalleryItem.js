/**
 *
 *  This is the Gallery Main
 *
 *  @param {Object} item - This is the item
 *  @param {Object} id - This is the id of the gallery item
 *  @param {Object} img - This is the url for the gallery item img
 *
 */

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { FaHandPointer } from "react-icons/fa";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Gallery/Gallery.module.css";

export const GalleryItem = ({ item, type, id, img }) => {
  return (
    <div
      className={`${styles.gallery_item} item_${type} gallery-item col-lg-4 col-md-4 col-sm-6 col-xs-12`}
    >
      <div className={`${styles.gallery_item_inner}`}>
        <BackgroundImage
          src={img}
          className={`${styles.bg}`}
          width="100%"
          height="100%"
        />

        <button
          onClick={() => {
            if (document.getElementById(item)) {
              DeclareStorageVariable("session", "Modal Opened", true);

              document.body.style.pointerEvents = "none";
              document.body.style.overflowY = "hidden";

              document.getElementById(`MODAL_${item}`).style.display = "block";

              document.getElementById(`MODAL_${item}`).style.overflowY = "auto";
              document.getElementById(`MODAL_${item}`).style.pointerEvents =
                "auto";

              console.log(document.getElementById(`DARKEN_${item}`));

              document.getElementById(`DARKEN_${item}`).style.opacity = 1;
              document.getElementById(`DARKEN_${item}`).style.visibility =
                "visible";

              //   document
              //     .getElementById(item)
              //     .querySelector(".darken").style.opacity = 1;
              //   document
              //     .getElementById(item)
              //     .querySelector(".darken").style.visibility = "visible";
            }
          }}
          id={id}
          className={`${styles.darken} orientation-change-element half-second`}
        >
          <FaHandPointer className={`${styles.icon}`} />
        </button>
      </div>
    </div>
  );
};
