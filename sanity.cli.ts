/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import * as dotenv from "dotenv"
dotenv.config()
import { defineCliConfig } from "sanity/cli"

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "lu5enl2l"
const dataset = process.env.SANITY_STUDIO_API_DATASET || "production"

export default defineCliConfig({ api: { projectId, dataset } })
