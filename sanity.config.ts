import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { deskStructure, initialValueTemplates } from "./src/sanity/structure";

export default defineConfig({
  name: "primedic",
  title: "Primedic Studio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure: deskStructure }),
    ...(process.env.NODE_ENV === "development"
      ? [visionTool({ defaultApiVersion: apiVersion })]
      : []),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev, ...initialValueTemplates],
  },
});
