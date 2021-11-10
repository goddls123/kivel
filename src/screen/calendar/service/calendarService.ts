import { schedule, weekInfo } from "../../../types/calendarTypes"
import { getDateYMD } from "../../common/service/dateService"
import { scheduleTypeTest } from "../../test/testData"



export function holidayTextColor(day : Date, state : "" | "disabled" | "selected" | "today" ) {

    if (state === "disabled")
        return '#d9e1e8'

    else if ( day.getDay() === 0 ) 
        return 'red'
    
    else if ( day.getDay() === 6 ) 
        return 'blue'

    else 
        return 'black'

}

export function scheduleCheck(date : Date, schedule : schedule) {
    

    if(schedule.repeat_cycle === 'D'){
        return true
    }
    else if(schedule.repeat_cycle === 'W'){
        if(schedule.schedule_date[date.getDay()] === "1")
            return true
    }
    else if(schedule.repeat_cycle === 'M'){
        if(date.getDate().toString() === schedule.schedule_date)
            return true
    }
    else if(schedule.repeat_cycle === 'Y'){
        if((date.getMonth().toString() + '-' + date.getDate.toString()) === schedule.schedule_date)
        return true
    }
    else return false
}

export function getThisWeek(selectedDay : Date = new Date()) : weekInfo[] {
    let currentDay = new Date(selectedDay);  
    let currentYear  = currentDay.getFullYear();
    let currentMonth = currentDay.getMonth();
    let currentDate  = currentDay.getDate();
    let currentDayOfWeek = currentDay.getDay();
    
    let thisWeek : weekInfo[] = [];
    
    for(let i=0; i<7; i++) {
        let resultDay = new Date(currentYear, currentMonth, currentDate + (i - currentDayOfWeek));
        let yyyy = resultDay.getFullYear().toString();
        let mm  = (Number(resultDay.getMonth()) + 1).toString();
        let dd = resultDay.getDate().toString();
        
        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;
        let kday
        


        thisWeek.push({
            year : yyyy,
            month : mm,
            date : dd,
            day : i ,
            fullDateString : yyyy + '-' + mm + '-' + dd,
            kDay : getKoreanDay(i)
        })
    }
    
    return thisWeek
    
}

export function getLastWeek(selectedDay : Date = new Date()) : weekInfo[] {
    let currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() - 7);
    return getThisWeek(currentDay)
}
export function getNextWeek(selectedDay : Date = new Date()) : weekInfo[] {
    let currentDay = new Date(selectedDay);
    currentDay.setDate(currentDay.getDate() + 7);
    return getThisWeek(currentDay)
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

export function getHour(date : string){
    return date.split(":")[0]
}

export function scheduleDataParser(data : scheduleTypeTest[]){
    let schedule : any = []
      data?.map((item) => {
        let dateIndex = new Date(item.scheduleDate)
        
            while(dateIndex < item.period){
                // 매주    
                if(item.repeatCycle == 'W'){
                    if(item.repeatDay[dateIndex.getDay()] == '1'){
                        schedule.push({
                        ...item,
                        date : new Date(dateIndex.getTime()),
                        })
                    }
                    dateIndex.setDate(dateIndex.getDate() + 1)
                }

                else if(item.repeatCycle == '2W'){
                    if(item.repeatDay[dateIndex.getDay()] == '1'){
                        schedule.push({
                            ...item,
                            date : new Date(dateIndex.getTime()),
                        })
                    }

                    if(dateIndex.getDay() == 6){
                        dateIndex.setDate(dateIndex.getDate() + 7)
                    }
                    dateIndex.setDate(dateIndex.getDate() + 1)
                }

                else if(item.repeatCycle == 'D'){
                    schedule.push({
                        ...item,
                        date : new Date(dateIndex.getTime()),
                    })
                    break;
                }

                else if(item.repeatCycle =='M'){
                    schedule.push({
                        ...item,
                        date : new Date(dateIndex.getTime()),
                    })
                    dateIndex.setMonth(dateIndex.getMonth() + 1)
                }		
            }
        
    })

  return schedule
}



