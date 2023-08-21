// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

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

  return (
    <div id="PAGE" className="overrides_Index full-second">
      <PageHead />

      <main id="PAGE_MAIN"></main>
    </div>
  );
}
