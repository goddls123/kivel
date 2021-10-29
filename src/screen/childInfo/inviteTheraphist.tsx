import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { RouteProp } from '@react-navigation/core';
import { Button } from '../common/components/Button';

interface inviteTheraphistProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function inviteTheraphist(props : inviteTheraphistProps) {
		return (
			<SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" style={{fontSize: 30}}></Icon>
                </TouchableOpacity>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextStyle}>치료사 등록하기</Text>
                </View>
				<View style={{flex : 1 ,justifyContent : 'center', alignItems:'center'}}>
					<Image source={require('../../assets/icons/ic_link.png')} style={{height : SIZE_WIDTH * 0.33 ,width : SIZE_WIDTH * 0.33, marginBottom : GLOBAL_MARGIN_VERTICAL}} ></Image>
					<Text style={{fontSize :20,fontWeight : 'bold', color: 'black', marginBottom : 5}}>치료사에게</Text>
					<Text style={{fontSize :20,fontWeight : 'bold', color: 'black', marginBottom : GLOBAL_MARGIN_VERTICAL}}>초대 코드 보내기</Text>

					<Button text={'카카오톡으로 초대하기'} textColor={'black'} style={{backgroundColor : '#fee500', marginBottom : 10}}></Button>
					<Button text={'문자로 초대하기'} textColor={'white'} style={{backgroundColor : 'black', marginBottom : 10}}></Button>
				</View>
			</View>
			</SafeAreaView>

		);
}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        flex: 1,
        marginHorizontal: SIZE_WIDTH * 0.05,
    },
    headerTextContainer: {
        marginTop: SIZE_HEIGHT * 0.03,
        marginBottom: GLOBAL_MARGIN_VERTICAL,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111111',
    },
	
})