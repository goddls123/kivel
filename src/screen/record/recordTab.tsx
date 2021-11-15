import React from 'react'

import { View, StyleSheet , SafeAreaView} from 'react-native';


import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { record } from './record';
import { homeWork } from './homeWork';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../common/constants';



const Tab = createMaterialTopTabNavigator();

export function recordTab() {

  function screenOptionStyle() : MaterialTopTabNavigationOptions {
    return (
      {
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 22, fontWeight : '900' ,textAlignVertical : 'bottom', textAlign : 'center'},
        tabBarStyle: { height : SIZE_WIDTH * 0.2 },
        tabBarContentContainerStyle : { justifyContent : 'flex-start', width : SIZE_WIDTH * 0.2 , marginLeft : GLOBAL_MARGIN_HORIZON},
        tabBarItemStyle : {height : SIZE_WIDTH * 0.2 , width : SIZE_WIDTH * 0.2, justifyContent : 'flex-end' },
        tabBarIndicatorStyle : {width : SIZE_WIDTH * 0.2, marginLeft : GLOBAL_MARGIN_HORIZON , height : 4, backgroundColor : 'black'},
        tabBarInactiveTintColor : '#d5d5d5'
      }
    )
  }
  return (
    
    <Tab.Navigator screenOptions={screenOptionStyle()}>
      	<Tab.Screen name="기록" component={record} />
      	<Tab.Screen name="과제" component={homeWork} />
    </Tab.Navigator>
    
  );
}