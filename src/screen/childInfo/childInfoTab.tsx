import React from 'react'

import { View, StyleSheet , SafeAreaView} from 'react-native';


import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { childInfoDetail } from './childInfoDetail';
import { inspectionRecord } from './inspectionRecord';
import { theraphistManage } from './theraphistManage';
import { Header } from './components/Header';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../common/constants';
import { useQuery } from '@apollo/client';
import { GET_CHILD_INFO } from '../../connection/queries';
import { childInfo } from '../../types/types';



const Tab = createMaterialTopTabNavigator();

export function childInfoTab() {

	const {data, loading, error} = useQuery(GET_CHILD_INFO)
	const [childInfo, setChildInfo] = React.useState<childInfo>()
	React.useEffect(() => {
		if(data && data.userChild) {
			setChildInfo(data.userChild[0].child)
		}
	},[data,loading,error])


	function screenOptionStyle() : MaterialTopTabNavigationOptions {
		return (
		{
			tabBarActiveTintColor: 'black',
			tabBarLabelStyle: { fontSize: 16, fontWeight : '900' ,textAlignVertical : 'bottom', textAlign : 'center'},
			tabBarContentContainerStyle : { justifyContent : 'flex-start' },
			tabBarIndicatorStyle : { paddingHorizontal : GLOBAL_MARGIN_HORIZON , height : 4, backgroundColor : 'black'},
			tabBarInactiveTintColor : '#d5d5d5'
		}
		)
	}
  return (
    <>
    <Header
	data={childInfo}
    ></Header>
    <Tab.Navigator screenOptions={screenOptionStyle()}>
    	<Tab.Screen name="아이정보" component={childInfoDetail} />
    	<Tab.Screen name="검사기록" component={inspectionRecord} />
		<Tab.Screen name="치료사관리" component={theraphistManage} />
    </Tab.Navigator>
    </>
  );
}