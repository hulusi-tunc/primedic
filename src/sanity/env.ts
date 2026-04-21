// Sanity env vars with fallback defaults so the build doesn't crash on
// environments where they aren't set (e.g. Vercel before env vars are added).
// These are NEXT_PUBLIC_ values (not secrets) and match the production project.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1389kln8";
