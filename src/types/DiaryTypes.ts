export interface diaryProps {
	note_id : number,
	date	: Date,
	title : string,
	share_YN : boolean,
	content : string,
	tag?	: string[],
	images? : string[],
}

