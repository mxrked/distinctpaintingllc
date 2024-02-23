// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NotFoundMain } from "@/assets/components/pages/404/NotFoundMain";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_404 full-second">
      <PageHead />
      <PaymentRequiredWall />

      <main id="PAGE_MAIN">
        <NotFoundMain />
      </main>
    </div>
  );
}
