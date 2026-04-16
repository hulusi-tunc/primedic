import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { post } from "./post";
import { category } from "./category";

export const schemaTypes: SchemaTypeDefinition[] = [
  post,
  category,
  blockContent,
];
