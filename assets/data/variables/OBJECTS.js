// This file is used to hold some objects

import SliderSlide from "../classes/SliderSlide";
import {
  INDEX_TOP_BG_1,
  INDEX_TOP_BG_2,
  INDEX_TOP_BG_3,
  INDEX_TOP_BG_4,
} from "../../cdns/CDNBgs";

const INDEX_TOP_SLIDE_1 = new SliderSlide(
  "I_T001",
  INDEX_TOP_BG_1,
  "Bringing Homes",
  "To Canvas.",
  "Expert house painting that revitalizes spaces with vibrant colors and enduring craftsmanship for transformative beauty.",
  "/contact#painting"
);
const INDEX_TOP_SLIDE_2 = new SliderSlide(
  "I_T002",
  INDEX_TOP_BG_2,
  "Revealing Clean",
  "Surfaces Boldly.",
  "Our pressure washing service rejuvenates surfaces, eliminating dirt and grime to reveal their true splendor.",
  "/contact#pressure_washing"
);
const INDEX_TOP_SLIDE_3 = new SliderSlide(
  "I_T003",
  INDEX_TOP_BG_3,
  "Seamless Walls,",
  "Flawless Homes.",
  "Transforming homes through meticulous drywall repair, we erase imperfections to create seamless, impeccable living spaces.",
  "/contact#drywall_repair"
);
const INDEX_TOP_SLIDE_4 = new SliderSlide(
  "I_T004",
  INDEX_TOP_BG_4,
  "Crafting Dreams,",
  "Building Reality.",
  "Mastering woodcraft, we shape exquisite designs, from custom furniture to intricate structures, bringing imagination to life.",
  "/contact#carpentry"
);

export {
  INDEX_TOP_SLIDE_1,
  INDEX_TOP_SLIDE_2,
  INDEX_TOP_SLIDE_3,
  INDEX_TOP_SLIDE_4,
};
