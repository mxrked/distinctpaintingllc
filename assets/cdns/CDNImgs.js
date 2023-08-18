/**
 *
 *  This holds the urls/srcs for the imgs
 *
 */

import { CDNImgReturn } from "./CDNReturns";

const PLACEHOLDER = CDNImgReturn("dogs", "placeholder", "png");
const PLACEHOLDER_BLUE = ("placeholders", "blue", "webp");
const PLACEHOLDER_RED = ("placeholders", "red", "webp");
const PLACEHOLDER_GREEN = ("placeholders", "green", "webp");
const PLACEHOLDER_PURPLE = ("placeholders", "purple", "webp");

const MERLIN_1 = CDNImgReturn("dogs", "merlin-1", "webp");
const PHOENIX_1 = CDNImgReturn("dogs", "phoenix-1", "webp");
const PHOENIX_2 = CDNImgReturn("dogs", "phoenix-2", "webp");
const SOPHIE_1 = CDNImgReturn("dogs", "sophie-1", "webp");
const SOPHIE_2 = CDNImgReturn("dogs", "sophie-2", "webp");
const SOPHIE_3 = CDNImgReturn("dogs", "sophie-3", "webp");

const DOG_ART_1 = CDNImgReturn("dog-art", "dog-art-1", "webp");
const DOG_ART_2 = CDNImgReturn("dog-art", "dog-art-2", "webp");

export {
  PLACEHOLDER,
  PLACEHOLDER_BLUE,
  PLACEHOLDER_GREEN,
  PLACEHOLDER_PURPLE,
  PLACEHOLDER_RED,
};
export { MERLIN_1, PHOENIX_1, PHOENIX_2, SOPHIE_1, SOPHIE_2, SOPHIE_3 };
export { DOG_ART_1, DOG_ART_2 };
