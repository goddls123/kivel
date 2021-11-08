import { SchemaExtensionNode } from "graphql";
import { essentialChildInfo, nurseryCaution, nurseryCaution2 } from "./childInfoTypes";
import { diary } from "./DiaryTypes";
import { screeningResult } from "./types";
import { noticeType } from "./types";

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
    ScreeningResultEnroll : undefined | screeningResult
    InviteTheraphist : undefined
    // calendar
    AddCalendarPage : undefined
    
    map : undefined


    // 알람,공지사항,myPage,문의하기
    AlarmList : undefined
    Notice : undefined
    NoticeDetail : noticeType
    Question : undefined
}