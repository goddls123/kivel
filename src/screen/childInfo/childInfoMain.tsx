import React from 'react'

import { View, StyleSheet , SafeAreaView} from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { childInfo } from './childInfo';
import { inspectionRecord } from './inspectionRecord';
import { theraphistManage } from './theraphistManage';
import { Header } from './components/Header';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createMaterialTopTabNavigator();

export function childInfoMain() {
  return (
    <>
    <Header></Header>
    <Tab.Navigator >
      <Tab.Screen name="아이정보" component={childInfo} />
      <Tab.Screen name="검사기록" component={inspectionRecord} />
	    <Tab.Screen name="치료사관리" component={theraphistManage} />
    </Tab.Navigator>
    </>
  );
}