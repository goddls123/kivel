import  React  from  'react';
import  {createStackNavigator}  from  '@react-navigation/stack';
import  bottomTabNav  from  './bottomTabNav';
import  calendar  from  '../screen/calendar/calendar';
import  {stackInterface}  from  '../types/navigationParam';
import  {writeDiary}  from  '../screen/diary/writeDiary';
import  {Diary}  from  '../screen/diary/Diary';
import  {NavigationContainer}  from  '@react-navigation/native';

const  Stack  =  createStackNavigator<stackInterface>();

export  const  StackNav:  React.FC  =  ({})  =>  {
    return  (
            <Stack.Navigator  initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={bottomTabNav}
                    options={{headerShown:  false}}
                />
                <Stack.Screen  name="Calendar"  component={calendar}  />
                <Stack.Screen  name="Diary"  component={Diary}  />

                {/*  <Stack.Screen  name="Register"  component={register}  />  */}
            </Stack.Navigator>
    );
};

export  default  StackNav;
