import  React  from  'react';
import  {createStackNavigator, TransitionPresets }  from  '@react-navigation/stack';
import  bottomTabNav  from  './bottomTabNav';
import  calendar  from  '../screen/calendar/calendar';
import  {stackInterface}  from  '../types/navigationParam';
import  {writeDiary}  from  '../screen/diary/writeDiary';
import  {Diary}  from  '../screen/diary/Diary';
import  {NavigationContainer}  from  '@react-navigation/native';
import { Register } from '../screen/login/Register';
import { SocialLogin } from '../screen/login/SocialLogin';
import { Agreement } from '../screen/login/Agreement';
import { LoginSplash } from '../screen/login/LoginSplash';
import { EnterChildInfo } from '../screen/childEnroll/EnterChildInfo';
import { NurseryCaution } from '../screen/childEnroll/NurseryCaution';
import { NurseryCaution2 } from '../screen/childEnroll/NurseryCaution2';
import { ChildTendency } from '../screen/childEnroll/ChildTendency';
import { Map } from '../screen/map/map';
import { childInfoTab } from '../screen/childInfo/childInfoTab';
import { addCalendarPage } from '../screen/calendar/addCalendarPage';
import { screeningResultEnroll } from '../screen/childInfo/screeningResultEnroll';
import { inviteTheraphist } from '../screen/childInfo/inviteTheraphist';
import { alarm } from '../screen/alarmList/alarm';
import { notice } from '../screen/myPage/noticeList/notice';
import { noticeDetail } from '../screen/myPage/noticeList/noticeDetail';
import { question } from '../screen/myPage/question/question';
import { addRecord } from '../screen/record/addRecord';
import { Splash } from '../screen/common/components/Splash';
import { authCheck } from '../screen/common/authCheck';


const  Stack  =  createStackNavigator<stackInterface>();


export  const  StackNav:  React.FC  =  ({})  =>  {
    const [login,setLogin] = React.useState(false)


    return  (

            <Stack.Navigator  initialRouteName={"AuthCheck"}>

                <Stack.Screen name="AuthCheck" component={authCheck} options={{headerShown:  false}}/>
                <Stack.Screen name="Home" component={bottomTabNav} options={{headerShown:  false}}/>
                <Stack.Screen name="Calendar" component={calendar} options={{headerShown:  false}} />
                <Stack.Screen name="Diary" component={Diary} options={{headerShown:  false}} />
                <Stack.Screen name="SocialLogin" component={SocialLogin} options={{headerShown:  false}} />
                <Stack.Screen name="Register"  component={Register} options={{headerShown:  false}} /> 
                <Stack.Screen name="Agreement"  component={Agreement} options={{headerShown:  false}} /> 
                <Stack.Screen name="LoginSplash"  component={LoginSplash} options={{headerShown:  false}} /> 
                <Stack.Screen name="EnterChildInfo"  component={EnterChildInfo} options={{headerShown:  false}} />  
                <Stack.Screen name="NurseryCaution"  component={NurseryCaution} options={{headerShown:  false , ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="NurseryCaution2"  component={NurseryCaution2} options={{headerShown:  false, ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="ChildTendency"  component={ChildTendency} options={{headerShown:  false, ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name="ChildInfo"  component={childInfoTab} options={{headerShown:  false}} />
                <Stack.Screen name="AddCalendarPage"  component={addCalendarPage} options={{headerShown:  false}} />
                <Stack.Screen name='ScreeningResultEnroll'  component={screeningResultEnroll} options={{headerShown:  false}} />
                <Stack.Screen name='InviteTheraphist'  component={inviteTheraphist} options={{headerShown:  false}} />

                <Stack.Screen name='AlarmList'  component={alarm} options={{headerShown:  false}} />
                <Stack.Screen name='Notice'  component={notice} options={{headerShown:  false}} />
                <Stack.Screen name='NoticeDetail'  component={noticeDetail} options={{headerShown:  false}} />
                <Stack.Screen name='Question'  component={question} options={{headerShown:  false}} />
                <Stack.Screen name='AddRecord'  component={addRecord} options={{headerShown:  false}} />

                <Stack.Screen name="map"  component={Map} options={{headerShown:  false}} />
                
            </Stack.Navigator>
    );
};

export  default  StackNav;
