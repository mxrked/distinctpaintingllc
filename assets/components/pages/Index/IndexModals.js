/**
 *
 *  This is the Index Modals
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexModals = (props) => {
  return (
    <div>
      {props.galleryData.map((item) => (
        <div className={`${styles.modal} modal`} id={item._itemID}>
          <div
            className={`${styles.darken} darken`}
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
              <BackgroundImage
                src={item._itemImgSrc}
                className={`${styles.bg}`}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
