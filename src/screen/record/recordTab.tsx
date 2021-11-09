import React from 'react'

import { View, StyleSheet , SafeAreaView} from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { record } from './record';
import { homeWork } from './homeWork';



const Tab = createMaterialTopTabNavigator();

export function recordTab() {
  return (
    
    
    <Tab.Navigator >
      	<Tab.Screen name="기록" component={record} />
      	<Tab.Screen name="과제" component={homeWork} />
    </Tab.Navigator>
    
  );
}