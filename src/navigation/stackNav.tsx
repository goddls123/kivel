import  React  from  'react';
import  {createStackNavigator}  from  '@react-navigation/stack';
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
import { EnterChildInfo } from '../screen/childInfo/EnterChildInfo';
import { NurseryCaution } from '../screen/childInfo/NurseryCaution';
import { NurseryCaution2 } from '../screen/childInfo/NurseryCaution2';
import { ChildTendency } from '../screen/childInfo/ChildTendency';
import { testEnterChildInfo } from '../screen/test/testEnterChildInfo'
const  Stack  =  createStackNavigator<stackInterface>();


export  const  StackNav:  React.FC  =  ({})  =>  {
    const [login,setLogin] = React.useState(false)
    return  (

            <Stack.Navigator  initialRouteName={login? "Home" : "Register"}>
                <Stack.Screen name="Home" component={bottomTabNav} options={{headerShown:  false}}/>
                <Stack.Screen name="Calendar" component={calendar} options={{headerShown:  false}} />
                <Stack.Screen name="Diary" component={Diary} options={{headerShown:  false}} />
                <Stack.Screen name="SocialLogin" component={SocialLogin} options={{headerShown:  false}} />
                <Stack.Screen name="Register"  component={Register} options={{headerShown:  false}} /> 
                <Stack.Screen name="Agreement"  component={Agreement} options={{headerShown:  false}} /> 
                <Stack.Screen name="LoginSplash"  component={LoginSplash} options={{headerShown:  false}} /> 
                <Stack.Screen name="EnterChildInfo"  component={EnterChildInfo} options={{headerShown:  false}} />
                <Stack.Screen name="NurseryCaution"  component={NurseryCaution} options={{headerShown:  false}} />
                <Stack.Screen name="NurseryCaution2"  component={NurseryCaution2} options={{headerShown:  false}} />
                <Stack.Screen name="ChildTendency"  component={ChildTendency} options={{headerShown:  false}} />
                
                <Stack.Screen name="testEnterChildInfo"  component={testEnterChildInfo} options={{headerShown:  false}} />
            </Stack.Navigator>
    );
};

export  default  StackNav;
