"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { media } from "sanity-plugin-media";
import { schemaMarkup } from "@operationnation/sanity-plugin-schema-markup";
import { inboxPlugin } from "@/sanity/plugins/inbox/plugin";

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	token: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
	schema,
	plugins: [
		structureTool({ structure }),
		visionTool({ defaultApiVersion: apiVersion }),
		media(),
		schemaMarkup(),
		inboxPlugin(),
	],
	graphql: [
		{
			playground: false,
			tag: "experiment",
			workspace: "staging",
			id: "schema-experiment",
		},
	],
});
