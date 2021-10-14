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
    NurseryCaution : essentialChildInfo | undefined;
    NurseryCaution2 : (essentialChildInfo & (nurseryCaution | undefined)) | undefined
    ChildTendency : (essentialChildInfo & (nurseryCaution | undefined) & (nurseryCaution2 | undefined)) | undefined;


    testEnterChildInfo : undefined;
}