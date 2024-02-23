// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Navigation/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Navigation/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Navigation/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Navigation/Mobile/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

import { GalleryTop } from "@/assets/components/pages/Gallery/GalleryTop";
import { GalleryMain } from "@/assets/components/pages/Gallery/GalleryMain";
import { GalleryModals } from "@/assets/components/pages/Gallery/GalleryModals";

// Style Imports
import "../assets/styles/modules/Gallery/Gallery.module.css";

export const getServerSideProps = async () => {
  // const GALLERY_RES = await fetch(
  //   "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/json/GALLERY.json"
  // );

  // const GALLERY_RES_DATA = await GALLERY_RES.json();

  const GALLERY_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/",
    "GALLERY.json"
  );

  const GALLERY_FILE_CONTENTS = fs.readFileSync(GALLERY_FILE_PATH, "utf-8");

  const GALLERY_DATA = JSON.parse(GALLERY_FILE_CONTENTS);

  return {
    props: {
      gallery_data: GALLERY_DATA,
    },
  };
};

export default function Gallery({ gallery_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Gallery full-second">
      <PageHead />
      <NavTop disableLink="/gallery" />
      <DesktopNav disableLink="/gallery" />
      <MobileNav disableLink="/gallery" />
      <MobileNavMenu disableLink="/gallery" />
      <PaymentRequiredWall />

      <main id="PAGE_MAIN">
        <GalleryTop />
        <GalleryMain galleryData={gallery_data} />
        <GalleryModals galleryData={gallery_data} />
      </main>

      <Footer disableLink="/gallery" />
    </div>
  );
}
