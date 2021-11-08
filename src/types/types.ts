import { ReactNativeFile } from "apollo-upload-client"

export type noticeType = {
	title : string
	nickName : string,
	createDate : Date,
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