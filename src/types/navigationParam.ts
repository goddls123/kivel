import { SchemaExtensionNode } from "graphql";
import { essentialChildInfo, nurseryCaution, nurseryCaution2 } from "./childInfoTypes";
import { diary } from "./DiaryTypes";
import { childInfo, developmentRecordType, screeningResult } from "./types";
import { noticeType } from "./types";

export type stackInterface = {
    AuthCheck : undefined;

    Home : undefined;
    Calendar : undefined;
    WriteDiary : diary | undefined;
    Diary : diary;

    // 로그인 페이지들
    SocialLogin : undefined;
    Register : undefined;
    Agreement : undefined;
    LoginSplash : undefined;

    
    //아이 정보 입력
    EnterChildInfo : undefined;
    NurseryCaution : childInfo
    NurseryCaution2 : childInfo
    ChildTendency : childInfo
    

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
    AddRecord : any
    AddHomeWork : any
    ServerProblem : undefined

    // 기록
    EditDevelopment? : developmentRecordType
    EditChallenging? : developmentRecordType
    EditMemo? : developmentRecordType

}