import { developmentRecordType, scheduleType } from "../../types/types";
import { diary } from "../../types/DiaryTypes";


export type scheduleTypeTest = {
	id : number
	title : string
	scheduleDate : string 	//DateTime	
	startTime : string 		//DateTime
	endTime : string 			//DateTime
	repeatCycle : string
	repeatDay : string
	period : string			//DateTime
	theraphistId? : number
	location? : string
	latitude? : number
	longitude? : number
	memo? : string
	notificationTime? : string	 //DateTime
	color : string
}



export const record_data : developmentRecordType[] = [
	{
		id : 1,
		kind : '발달기록',
		occurenceDate : '2021-11-17 21:51:51.000',
		title : '소떼',
		problem : '소근육',
		emergency : true,
		detail : '키블이가 걷다가 자꾸 넘어져요 키블이가 걷다가 자꾸 넘어져요',
		image : ['https://www.walkerhillstory.com/wp-content/uploads/2020/09/2-1.jpg','https://www.walkerhillstory.com/wp-content/uploads/2020/09/2-1.jpg','https://www.walkerhillstory.com/wp-content/uploads/2020/09/2-1.jpg']
	},
]