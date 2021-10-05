import { schedule, } from "../../../types/calendarTypes";
import { scheduleFront } from "../../../types/calendarTypes";

export function getScheduleArray(schedule : schedule[]){
	

	let scheduleArray : scheduleFront[] = [];

	schedule.map((data)=>{
		if(data.repeat_cycle == "D"){

			
			
			scheduleArray.push({
				color : data.color,
				title : data.title,
				start_time : data.start_time,
				theraphist_name : data.theraphist_name,
				end_time : data.end_time,
				location : data.location,
				memo : data.memo,
				schedule_date : "여기에 실제 일자 박혀야됌"
			})
		}
	})
	
}

