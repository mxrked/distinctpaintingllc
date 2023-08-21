// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Navigation/Both/NavTop";

// Style Imports
import "../assets/styles/modules/Gallery/Gallery.module.css";

export const getStaticProps = async () => {
  const GALLERY_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/json/GALLERY.json"
  );

  const GALLERY_RES_DATA = await GALLERY_RES.json();

  return {
    props: {
      gallery_data: GALLERY_RES_DATA,
    },
  };
};

export default function Contact({ gallery_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Gallery page full-second">
      <PageHead />
      <NavTop disableLink="/gallery" />

      <main id="PAGE_MAIN"></main>
    </div>
  );
}
