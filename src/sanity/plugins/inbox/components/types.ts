export type Message = {
	_id: string;
	name: string;
	email: string;
	subject: string;
	starred: boolean;
	read: boolean;
	fields: Array<{ name: string; value: string }>;
	text: string;
};
