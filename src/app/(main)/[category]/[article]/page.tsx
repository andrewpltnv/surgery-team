import CustomPortableText from "@/components/PortableText";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getArticle } from "./api";
import Link from "next/link";
import Script from "next/script";

export default async function Page(props: {
	params: Promise<{ category: string; article: string }>;
}) {
	const { category, article } = await props.params;
	if (!category || !article) return null;

	const { title, body, category: categoryData } = await getArticle({ article });
	if (!title || !body) return null;

	return (
		<>
			<Script type="application/ld+json" id="FAQPage">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "How to find an apprenticeship?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>",
							},
						},
						{
							"@type": "Question",
							name: "Whom to contact?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days.",
							},
						},
					],
				})}
			</Script>

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
								<Link href={`/${categoryData?.slug}`} itemProp="name">
									{categoryData?.title}
								</Link>
							</BreadcrumbLink>
							<meta itemProp="position" content="1" />
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem itemProp="item" className="overflow-x-hidden">
							<BreadcrumbPage className="truncate" itemProp="name">
								{title}
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
	);
}
