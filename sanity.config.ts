"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schema } from "./src/sanity/schemaTypes"
import { structure } from "./src/sanity/structure"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  token:
    "sk8qjg93Dm6wCNfMqzNw9LaFh1t9seMfEq08fa8jnBYNQjXG24UPA4r9LAnH1pFMQeJJU1R1fRiX0bDLxo6FEsuPMKERcGzFb3ht0d5quoVnmyMze8XB0G2uPSd73BOK5D26IY7SNQUWLeIEv4asW2cyxu8r2PFdOS3JxtJMKdMuxf6QjOcq",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
