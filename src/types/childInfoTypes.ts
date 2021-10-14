export type essentialChildInfo = {
        name : string | undefined, 
        birthDate : Date | undefined, 
        sex : 'M' | 'W' | undefined, 
        diagnosis : string | undefined, 
        directInputDiag : string | undefined,
        birthWeekNum : number | undefined,
        birthDateNum : number | undefined,
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