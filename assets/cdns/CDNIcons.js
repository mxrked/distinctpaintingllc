/**
 *
 *  This holds the urls/srcs for the icons
 *
 */

import { CDNIconReturn } from "./CDNReturns";

const FAVICON = CDNIconReturn("tab-icons", "favicon", "ico");
const FAVICON_32 = CDNIconReturn("tab-icons", "favicon-32x32", "png");
const FAVICON_16 = CDNIconReturn("tab-icons", "favicon-16x16", "png");
const ATI = CDNIconReturn("tab-icons", "apple-touch-icon", "png");

const LOGO = CDNIconReturn("logo", "logo", "webp");
const LOGO_WITHOUT_TEXT = CDNIconReturn("logo", "logo-without-text", "webp");

export { FAVICON, FAVICON_16, FAVICON_32, ATI };
export { LOGO, LOGO_WITHOUT_TEXT };
