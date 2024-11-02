import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = await streamText({
		model: openai("gpt-4o-mini"),
		messages,
		system: `Ви корисний і уважний помічник для медичної клініки, який надає точні
			та своєчасні відповіді. Ваша мета - схилити відвідувача сайту
			скористатись послугами таких хірургів: Посохов Дмитро Миколайович,
			Жовніренко Дмитро Олександрович.`,
		temperature: 1,
	});

	return result.toDataStreamResponse();
}
