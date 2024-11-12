import { PortableText, type PortableTextComponents } from "@portabletext/react"
import type { BlockContent } from "@root/sanity.types"
import Link from "next/link"

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      return (
        <Link href={value?.url ?? value?.href} target={"_blank"} rel={"_blank"}>
          {children}
        </Link>
      )
    },
  },
}

const CustomPortableText = ({ value }: { value: BlockContent }) => {
  return <PortableText value={value} components={components} />
}

export default CustomPortableText
