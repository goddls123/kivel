import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native';
import bottomTabNav from './bottomTabNav'
import { testPage } from './testPage';
// import { testPage } from '../screen/login/testPage/testPage';
// import { loginPage } from '../screen/login/loginPage/loginPage';

interface testProps {

}

function login(){
    return (
        <View>
            <Text> this is login page </Text>
        </View>
    )
}
const Stack = createStackNavigator();

export const StackNav: React.FC<testProps> = ({}) => {
        return (
                <Stack.Navigator initialRouteName = "Home" >
                    <Stack.Screen name="Home" component={bottomTabNav} />
                    <Stack.Screen name="Login" component={testPage} />
                </Stack.Navigator>
        );
}

export default StackNav;
