/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  GALLERY_KWS,
  CONTACT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Distinct Painting LLC: Trusted Triad NC painters. Residential, commercial, interiors, exteriors. Drywall, pressure washing, carpentry. Contact for estimates & exceptional service.";
  const GALLERY_DESC =
    "Explore Distinct Painting LLC's Gallery: Completed projects, transformations, craftsmanship displayed.";
  const CONTACT_DESC =
    "Contact Distinct Painting LLC: Reach out via form for questions or projects. We offer painting, pressure washing, drywall, carpentry services.";
  const DESCS = [INDEX_DESC, GALLERY_DESC, CONTACT_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "Distinct Painting LLC - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // Gallery Page
  if (router.pathname == "/gallery") {
    title = "Distinct Painting LLC - Gallery";
    robots = "index, follow";
    url = router.pathname;

    if (GALLERY_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = GALLERY_KWS;
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "Distinct Painting LLC - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = CONTACT_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "Distinct Painting LLC - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
      <meta
        name="google-site-verification"
        content="aPd101rbxmZ5gRWC4D6m_kW5i3UVNrrgnmA6CrJWz20"
      />
      */}
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/distinct-painting-llc/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
