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
import { MobileNav } from "@/assets/components/global/Navigation/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Navigation/Mobile/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import ContactMain from "@/assets/components/pages/Contact/ContactMain";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Contact full-second">
      <PageHead />
      <NavTop disableLink="/contact" />
      <DesktopNav disableLink="/contact" />
      <MobileNav disableLink="/contact" />
      <MobileNavMenu disableLink="/contact" />
      <PaymentRequiredWall />

      <main id="PAGE_MAIN">
        <ContactTop />
        <ContactMain />
      </main>

      <Footer disableLink="/contact" />
    </div>
  );
}
