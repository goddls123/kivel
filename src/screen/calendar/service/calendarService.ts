import { schedule, weekInfo } from "../../../types/calendarTypes"



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
            kDay : getKoreanDay(i)
        })
    }
    
    return thisWeek
    
}

export function getKoreanDay(day : number){
    if(day == 0) 
        return "???"
    else if(day == 1)
        return "???"
    else if(day == 2)
        return "???"
    else if(day == 3)
        return "???"
    else if(day == 4)
        return "???"
    else if(day == 5)
        return "???"
    else if(day == 6)
        return "???"
    else 
        return "??????"
}

export function getHour(date : string){
    return date.split(":")[0]
}