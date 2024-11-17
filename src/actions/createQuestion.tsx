"use server";
import { client } from "@/sanity/lib/client";
import { z } from "zod";

const questionSchema = z.object({
	name: z.string().trim().max(100),
	email: z.string().trim().email(),
	subject: z.string().trim().max(100),
	text: z.string().trim().min(1).max(500),
	urgent: z.boolean().default(false),
});

export const createQuestion = async (_: unknown, formData: FormData) => {
	const { success, data, error } = questionSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		subject: formData.get("subject"),
		text: formData.get("message"),
		urgent: Boolean(formData.get("urgent")),
	});

	if (error || !success) {
		return { error: error?.errors };
	}

	const { name, email, subject, text, urgent } = data;

	const doc = {
		_type: "message",
		_id: `msg-${crypto.randomUUID()}`,
		name,
		email,
		subject,
		text,
		urgent,
		read: false,
		starred: false,
	};

	try {
		const res = await client
			.createIfNotExists(doc, {
				token: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN,
			})
			.catch((err) => console.log(err));
		console.log({ res });

		return { success: true, data: { name, email, subject, text, urgent } };
	} catch (error) {
		return { error: error };
	}
};
