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
	scheduleDate : string 	//DateTime	
	startTime : string 		//DateTime
	endTime : string 			//DateTime
	repeatCycle : string
	repeatDay : string
	period : string			//DateTime
	theraphistId : number
	location : string
	latitude : number
	longitude : number
	memo : string
	notificationTime : string	 //DateTime
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


export type childInfo = {
	name : string
	birthDate : string
	sex : 'M' | 'W'
	diagnosis? : string 
	birthWeekNum? : number 
	birthDayNum? : number 
	height? : number
	weight? : number
	degreeSnack? : number 
	degreeRule? : number 
	degreeMeal? : number 
	rearer? : string 
	pill? : string 
	diaper? : string 
	allergy? : string 
	seizure? : string 
	etc? : string 
	tendency? : string 
}

export type childInfoHome = {
	name : string,
	birthDate : string,
	sex : string,
	imageURL? : string,
}

export type developmentRecordType = {
	id? : number
	kind? : string
	occurenceDate : string
	emergency : boolean
	title : string
	problem : string
	detail : string
	image? : string[]
}

export type challengingBehaviorType = {
	id ? : number
	occurenceDate : string
	title : string
	content : string
	fixedMethod : string
}