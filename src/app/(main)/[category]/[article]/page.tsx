import CustomPortableText from "@/components/PortableText"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getArticle } from "./api"
import Link from "next/link"
import Script from "next/script"
import toJson from "@/lib/toJson"
import type { FaqPageType } from "@root/sanity.types"

export default async function Page(props: { params: Promise<{ category: string; article: string }> }) {
	const { category, article } = await props.params
	if (!category || !article) return null

	const { title, body, category: categoryData, schemaMarkup } = await getArticle({ article })

	const schemas = schemaMarkup?.map((schema: FaqPageType, index) => (
		<Script
			type="application/ld+json"
			id="FAQPage"
			key={index}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={toJson(schema.type ?? "FAQPage", schema)}
		/>
	))

	if (!title || !body) return null

	return (
		<>
			{schemas}
			<div className="container mx-auto flex max-w-prose flex-auto flex-col p-4">
				<Breadcrumb className="my-2 pb-2 text-lg">
					<BreadcrumbList
						className="flex-nowrap overflow-x-hidden"
						itemType="https://schema.org/BreadcrumbList"
						itemScope
					>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild itemProp="item">
								<Link href={`/${categoryData?.slug}`}>
									<span itemProp="name">{categoryData?.title}</span>
								</Link>
							</BreadcrumbLink>
							<meta itemProp="position" content="1" />
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem className="overflow-x-hidden">
							<BreadcrumbPage className="truncate" itemProp="item">
								<span itemProp="name">{title}</span>
							</BreadcrumbPage>
							<meta itemProp="position" content="2" />
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="prose">
					<CustomPortableText value={body} />
				</div>
			</div>
		</>
	)
}
