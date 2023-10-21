// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/websiteVisitsCounter_CONNECTION";
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Navigation/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Navigation/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Navigation/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Navigation/Mobile/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexServices } from "@/assets/components/pages/Index/IndexServices";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
import { IndexModals } from "@/assets/components/pages/Index/IndexModals";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getServerSideProps = async ({ req }) => {
  const INDEX_GALLERY_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/json/INDEX_GALLERY.json"
  );

  const INDEX_GALLERY_RES_DATA = await INDEX_GALLERY_RES.json();

  try {
    // Database activities
    const DB = await connectDatabase();

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    const current_ip = req.socket.remoteAddress;

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          current_ip: null,
          index_gallery_data: null,
        },
      };
    }

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        current_ip,
        index_gallery_data: INDEX_GALLERY_RES_DATA,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        current_ip: null,
        index_gallery_data: INDEX_GALLERY_RES_DATA,
      },
    };
  }
};

export default function Home({
  TOTAL_NUMBER_OF_IPS,
  current_ip,
  index_gallery_data,
}) {
  const router = useRouter();

  const [ON_LOCAL_HOST, SET_ON_LOCALHOST] = useState(null);

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  //! DB Activities
  // Checking if connected to DB
  console.log("Total number of website visits: " + TOTAL_NUMBER_OF_IPS);

  // Triggering getWebsiteVisitsByIps.js
  useEffect(() => {
    // Fetching the api route
    const FETCH_DATA = async () => {
      try {
        const response = await fetch("/api/getWebsiteVisitsByIps");
        const data = await response.json();

        // Handle the data
        console.log("API response: " + data);
      } catch (error) {
        console.error("Error fetching data: " + error);
      }
    };

    FETCH_DATA();
  }, []);

  // Displaying the current website visits when on localhost
  useEffect(() => {
    const IPS = ["127.0.0.1", "::1"];

    if (current_ip === IPS[0] || current_ip === IPS[1]) {
      SET_ON_LOCALHOST(true);
    }
  }, []);

  return (
    <div id="PAGE" className="overrides_Index full-second">
      <PageHead />

      {/**
      {ON_LOCAL_HOST && (
        <div
          id="websitesVisitCounter"
          style={{
            padding: "15px",
            fontFamily: "sans-serif",
            backgroundColor: "#e3e3e3",
            textAlign: "center",
          }}
        >
          <span>
            Total number of website visits:{" "}
            <span
              id="websitesVisitCounterIndicator"
              style={{ fontWeight: "bold", marginLeft: "10px" }}
            >
              {" "}
              {TOTAL_NUMBER_OF_IPS}{" "}
            </span>
          </span>
        </div>
      )}
      */}

      <NavTop disableLink="/" />
      <DesktopNav disableLink="/" />
      <MobileNav disableLink="/" />
      <MobileNavMenu disableLink="/" />

      <main id="PAGE_MAIN">
        <IndexTop />
        <IndexAbout />
        <IndexServices />
        <IndexGallery galleryData={index_gallery_data} />
        <IndexModals galleryData={index_gallery_data} />
        <IndexContact />
      </main>

      <Footer disableLink="/" />
    </div>
  );
}
