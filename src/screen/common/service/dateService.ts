export function getDateYMD(date : Date, seperator : string) : string {
	return date.getFullYear().toString() + seperator + (date.getMonth()+1).toString() + seperator + date.getDate()
}

export function getDateYMDD(date : Date, seperator : string) : string {
	const day = ['일','월','화','수','목','금','토']
	return date.getFullYear().toString() + seperator + (date.getMonth()+1).toString() + seperator + date.getDate() + ' (' + day[date.getDay()] + ')'
}

export function getTime(date : Date, seperator : string) : string {
	let time
	let minutes = date.getMinutes().toString()
	if(minutes.length == 1){
		minutes = '0' + minutes;
	}
	if(date.getHours() == 12) {
		time = "오후 " + date.getHours() + seperator + minutes
	}
	else if(date.getHours() > 12) {
		time = "오후 " + (date.getHours() - 12) + seperator + minutes
	}
	else {
		time = "오전 " + date.getHours() + seperator + minutes
	}
		
		return time
}

export function getDayKorean(value : number) : string {
	const day = ['일','월','화','수','목','금','토']
	return day[value]
}