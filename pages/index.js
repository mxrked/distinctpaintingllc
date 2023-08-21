// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Navigation/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Navigation/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
export const getStaticProps = async () => {
  const INDEX_GALLERY_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/json/INDEX_GALLERY.json"
  );

  const INDEX_GALLERY_RES_DATA = await INDEX_GALLERY_RES.json();

  return {
    props: {
      index_gallery_data: INDEX_GALLERY_RES_DATA,
    },
  };
};

export default function Home({ index_gallery_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Index full-second">
      <PageHead />
      <NavTop disableLink="/" />
      <DesktopNav disableLink="/" />

      <main id="PAGE_MAIN"></main>
    </div>
  );
}
