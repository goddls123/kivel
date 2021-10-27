import { SchemaExtensionNode } from "graphql";
import { essentialChildInfo, nurseryCaution, nurseryCaution2 } from "./childInfoTypes";
import { diary } from "./DiaryTypes";

export type stackInterface = {
    Home : undefined;
    Calendar : undefined;
    WriteDiary : diary | undefined;
    Diary : diary;

    // 로그인 페이지들
    SocialLogin : undefined;
    Register : undefined;
    Agreement : undefined;
    LoginSplash : undefined;

    //
    EnterChildInfo : undefined;
    NurseryCaution : essentialChildInfo
    // 이거 왜 안됌?
    // NurseryCaution2 : essentialChildInfo & (nurseryCaution | undefined)
    // ChildTendency : essentialChildInfo & (nurseryCaution | undefined) & (nurseryCaution2 | undefined)
    NurseryCaution2 : essentialChildInfo & nurseryCaution
    ChildTendency : essentialChildInfo | (essentialChildInfo & nurseryCaution ) | (essentialChildInfo & nurseryCaution2 ) | (essentialChildInfo & nurseryCaution & nurseryCaution2)
    

    // childInfo
    ChildInfo : undefined


    // calendar
    AddCalendarPage : undefined
    
    map : undefined
}