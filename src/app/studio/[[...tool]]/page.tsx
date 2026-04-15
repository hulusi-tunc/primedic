/**
 * Sanity Studio embedded at /studio.
 * Client Component because Studio runs entirely in the browser.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
