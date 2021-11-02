export type noticeType = {
	title : string
	nickName : string,
	date : Date,
	content : string,
}

export type scheduleType = {
	title : string
	scheduleDate : Date 	//DateTime	
	startTime : Date 		//DateTime
	endTime : Date 			//DateTime
	repeatCycle : string
	repeatDay : string
	period : Date			//DateTime
	theraphistId : number
	location : string
	latitude : number
	longitude : number
	memo : string
	notificationTime : Date	 //DateTime
}