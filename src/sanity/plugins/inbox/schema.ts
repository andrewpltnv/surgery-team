import { defineArrayMember, defineField, defineType } from "sanity";

export const messageType = defineType({
	type: "document",
	name: "message",
	title: "Messages",
	fields: [
		defineField({
			type: "string",
			name: "name",
			title: "Name",
		}),
		defineField({
			type: "string",
			name: "email",
			title: "Email",
		}),
		defineField({
			type: "text",
			name: "subject",
			title: "Subject",
		}),
		defineField({
			type: "text",
			name: "text",
			title: "Message Text",
		}),
		defineField({
			type: "array",
			name: "fields",
			title: "Fields",
			of: [
				defineArrayMember({
					type: "object",
					name: "field",
					title: "Field",
					fields: [
						defineField({
							type: "string",
							name: "name",
							title: "Name",
						}),
						defineField({
							type: "string",
							name: "value",
							title: "Value",
						}),
					],
				}),
			],
		}),
		defineField({
			type: "boolean",
			name: "read",
			title: "Read",
			initialValue: false,
		}),
		defineField({
			type: "boolean",
			name: "starred",
			title: "Starred",
			initialValue: false,
		}),
	],
});
