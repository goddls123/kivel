export type essentialChildInfo = {
        name : string | undefined, 
        birthDate : Date | undefined, 
        sex : 'M' | 'W' | undefined, 
        diagnosis : string | undefined, 
        birthWeekNum : number | undefined,
        birthDayNum : number | undefined,
        height : number | undefined,
        weight : number | undefined,
}

export type nurseryCaution = {
	degreeSnack : number | number[] | undefined
	degreeRule : number | number[] | undefined
	degreeMeal : number | number[] | undefined
        rearer : string | undefined
}

export type nurseryCaution2 = {
        pill : string | undefined
        diaper : string | undefined
        allergy : string | undefined
        seizure : string | undefined
        etc : string | undefined
}

export type childTendency = {
        tendency : string | undefined
}

export type childData = {
        id : number
        name : string
        birthdate : Date
        sex : string | undefined
        diagnosis : string | undefined
        birthWeekNum : number | undefined
        birthDayNum : number | undefined
        height : number | undefined
        weight : number | undefined
        degreeSnack : number | undefined
        degreeRule : number | undefined
        degreeMeal : number | undefined
        rearer : string | undefined
        pill : string | undefined
        diaper : string | undefined
        allergy : string | undefined
        seizure : string | undefined
        etc : string | undefined
        tendency : string | undefined
}