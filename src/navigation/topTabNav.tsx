import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Diary } from '../screen/diary/Diary';
import { writeDiary } from '../screen/diary/writeDiary';
import { diaryTab } from '../screen/diary/diaryTab';


const Tab = createMaterialTopTabNavigator();

export function topTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="호소문제" component={diaryTab} />
      <Tab.Screen name="과제" component={writeDiary} />
	  <Tab.Screen name="성장노트" component={writeDiary} />
    </Tab.Navigator>
  );
}