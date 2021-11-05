export interface schedule {
    schedule_id : number,
    user_id : number,
    schedule_date : string,
    title : string,
    location : string,
    memo : string,
    color : string,
    theraphist_name? : string,
    start_time : any,
    end_time : any,
    notify_time : any,
    repeat_cycle : string
}

export interface weekInfo{
    year : string,
    month : string,
    date : string,
    day : Number,
    fullDateString : string,
    kDay : string
}

export interface scheduleFront {
    schedule_date : string,
    title : string,
    location : string,
    memo : string,
    color : string,
    theraphist_name? : string,
    start_time : any,
    end_time : any,
}

export interface DateObject {
    day: number;
    dateString: string;
    month: number;
    timestamp: number;
    year: number;
}
