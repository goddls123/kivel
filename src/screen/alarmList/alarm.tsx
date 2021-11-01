import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { RouteProp } from '@react-navigation/native';
import { Button } from '../common/components/Button';
import { AlarmList } from './components/AlarmList';

interface alarmProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function alarm(props : alarmProps) {

    const [alarms, setAlarms] = React.useState<{title : string, date : Date}[]>(
        [
            {
                title : '치료사와 ‘계절_감각치료’ 일정 조율이 확정되었어요!',
                date : new Date('2021-10-24')
            },
            {
                title : '주 호소 문제 기록에 치료사의 피드백이 달렸어요!',
                date : new Date('2021-10-24')
            },
            {
                title : '치료사와 ‘계절_감각치료’ 일정 조율이 확정되었어요!',
                date : new Date('2021-10-24')
            },
            {
                title : '치료사와 ‘계절_감각치료’ 일정 조율이 확정되었어요!',
                date : new Date('2021-10-24')
            },
            {
                title : '치료사와 ‘계절_감각치료’ 일정 조율이 확정되었어요!',
                date : new Date('2021-10-24')
            },
            {
                title : '치료사와 ‘계절_감각치료’ 일정 조율이 확정되었어요!',
                date : new Date('2021-10-24')
            },
        ]
    )
    
		return (
			<SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" style={{fontSize: 30, color : 'black'}}></Icon>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('AlarmList')}>
                        <IconFA name='bell' style={{fontSize : 20, color : 'black'}}></IconFA>
                </TouchableOpacity>

                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextStyle}>키블이 보호자님</Text>
                    <Text style={styles.headerTextStyle}>아래 알림을 확인해주세요</Text>
                </View>
            </View>
            
            
            {
                alarms 
                ?   
                    <ScrollView>
                        {
                            alarms?.map((item,id) => {
                                return(
                                    <View>
                                    <Divider height={1} color={'#ededed'} />
                                    <AlarmList
                                    key={id}
                                    title={item.title}
                                    date={item.date}
                                    ></AlarmList>
                                    </View>
                                    
                                )
                            })
                            
                        }
                    </ScrollView>
                : 
                    <View style={{ flex :1 , alignItems : 'center' , marginTop : SIZE_WIDTH * 0.2}}>
                        <Image style={{ height : SIZE_WIDTH * 0.17, width : SIZE_WIDTH * 0.17 }}
                        source={require('../../assets/icons/ic_empty_56.png')}></Image>
                        <Text style={{fontSize: 16, marginTop : 10, color : '#aaaaaa'}}>알림이 없습니다.</Text>
                    </View>
                
            }
                

			
			</SafeAreaView>

		);
}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        marginHorizontal: SIZE_WIDTH * 0.05,
    },
    headerTextContainer: {
        marginTop: SIZE_HEIGHT * 0.03,
        marginBottom: GLOBAL_MARGIN_VERTICAL,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111111',
    },
	
})