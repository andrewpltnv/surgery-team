import { NextSchemaScript, type Schema } from "@operationnation/sanity-plugin-schema-markup/nextSchemaScript"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lu5enl2l"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

const SchemaMarkup = ({ schema }: { schema: Schema[] }) => {
  return <NextSchemaScript schema={schema} projectId={projectId as string} dataset={dataset as string} />
}

export default SchemaMarkup
