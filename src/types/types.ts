import { ReactNativeFile } from "apollo-upload-client"

export type noticeType = {
	title : string
	nickName : string,
	createDate : Date,
	content : string,
}

export type scheduleType = {
	id : number
	title : string
	scheduleDate : Date 	//DateTime	
	startTime : string 		//DateTime
	endTime : string 			//DateTime
	repeatCycle : string
	repeatDay : string
	period : Date			//DateTime
	theraphistId : number
	location : string
	latitude : number
	longitude : number
	memo : string
	notificationTime : Date	 //DateTime
	color : string
}
export type parsedScheduleType = scheduleType & {
	date : string, 
}

export type question = {
	content : string
}

export type alarm = {
	content : string
	createDate : Date
}

export type screeningResult = {
	// id : number
	images? : ReactNativeFile[]
	screeningName : string
	screeningDate : Date
	screeningInstitution : string
	memo : string | undefined
}

export type developmentRecordType = {
	
}