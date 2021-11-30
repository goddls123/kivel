export function getDateYMD(date : Date, seperator : string) : string {
	let Y = date.getFullYear().toString()
	let M = (date.getMonth()+1).toString()
	let D = date.getDate().toString()
	if(M.length == 1){
		M = '0' + M
	}
	if(D.length == 1){
		D = '0' + D
	}
	return Y + seperator + M + seperator + D
}

export function getDateYMDHms(date : Date){
	let YMD = getDateYMD(date,'-')
	let H = date.getHours().toString()
	let m = date.getMinutes().toString()
	let s = date.getSeconds().toString()	
	if(H.length == 1 ){
		H = '0' + H
	}
	if(m.length == 1 ){
		m = '0' + m
	}
	if(s.length == 1 ){
		s = '0' + s
	}
	return YMD + 'T' + H + ':' + m + ':' + s
}

export function getDateFromYMDHmsString(date : string){
	let newDate = new Date((date + '+09:00').replace(' ','T'))
	return newDate
}

export function getDateYMDD(date : Date, seperator : string) : string {
	const day = ['일','월','화','수','목','금','토']
	return date.getFullYear().toString() + seperator + (date.getMonth()+1).toString() + seperator + date.getDate() + ' (' + day[date.getDay()] + ')'
}

export function getTimeHms(date : Date) : string {
	
	let hours = date.getHours().toString()
	let minutes = date.getMinutes().toString()
	let seconds = date.getSeconds().toString()

	if(hours.length == 1)
		hours = '0' + hours;
	
	if(minutes.length == 1)
		minutes = '0' + minutes;
	
	if(seconds.length ==1)
		seconds == '0' + seconds;
	
	return hours + ':' + minutes + ':' + seconds

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

export function repeatCycleString(repeatCycle? : string, repeatDay? : string){

	let result = ''
	if(repeatCycle == 'W') {
		result = '매주 '
	}
	else if(repeatCycle == '2W'){
		result = '격주 '
	}

	if(repeatDay){
		for(let i = 0; i < 7; i++){
			if(repeatDay[i] == '1'){
				result = result + getKoreanDay(i) +','
			}    
		}
	}
	
	
	result = result.substr(0,result.length-1)
	
	return result
}

export function getKoreanDay(day : number){
    if(day == 0) 
        return "일"
    else if(day == 1)
        return "월"
    else if(day == 2)
        return "화"
    else if(day == 3)
        return "수"
    else if(day == 4)
        return "목"
    else if(day == 5)
        return "금"
    else if(day == 6)
        return "토"
    else 
        return "버그"
}