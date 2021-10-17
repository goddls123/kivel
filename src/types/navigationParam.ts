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
    NurseryCaution : undefined;
    NurseryCaution2 : undefined;
    ChildTendency : undefined;


    testEnterChildInfo : undefined;
}