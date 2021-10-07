export function getDateYMD(date : Date, seperator : string) : string {
	return date.getFullYear().toString() + seperator + (date.getMonth()+1).toString() + seperator + date.getDate()
}