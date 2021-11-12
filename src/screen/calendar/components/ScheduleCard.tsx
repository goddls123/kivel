import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { schedule } from '../../../types/calendarTypes'
import Icon from 'react-native-vector-icons/FontAwesome';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { parsedScheduleType } from '../../../types/types';
import { getKoreanDay } from '../service/calendarService';


interface ScheduleCardProps {
    data? : parsedScheduleType | undefined
}

const CARD_WIDTH = SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2;
const CARD_HEIGHT = (SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.55;

export function ScheduleCard(props : ScheduleCardProps) {
    
        // 매주 언제언제 반복
        function repeatCycleString(){
            let data = props.data
            let result = ''
            if(data?.repeatCycle == 'W') {
                result = '매주'
            }
            else if(data?.repeatCycle == '2W'){
                result = '격주'
            }

            for(let i = 0; i < 7; i++){
                if(data?.repeatDay[i] == '1'){
                    result = result +' '+ getKoreanDay(i)
                }    
            }
            
            result = result + '요일 반복'
            
            return result
        }

        return (
            <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={{height : 10, width :14, alignSelf :'center', }} source={require('../../../assets/icons/tick_2.png')} />
                    </View>

                    <View style={{justifyContent : 'center', marginLeft : 10}}>
                        <Text style={{color : '#01b399', fontSize : 17}}>{props.data?.title}</Text>
                    </View>

                    <TouchableOpacity style={{justifyContent : 'center', marginLeft : 10}}>
                        <Image style={styles.imageStyle} source={require('../../../assets/icons/ic_alert_16.png')} />
                    </TouchableOpacity>

                    <View style={{flex : 1, flexDirection : 'row', justifyContent : 'flex-end'}}>
                        <TouchableOpacity style={{justifyContent : 'center', marginLeft : 10}}>
                            <Image style={styles.imageStyle} source={require('../../../assets/icons/ic_delete_16.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent : 'center', marginLeft : 12}}>
                            <Image style={styles.imageStyle} source={require('../../../assets/icons/ic_edit_16.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginLeft : 35, marginBottom :10}}>
                    <Text style={{color : '#555555', fontSize : 15, marginBottom : 4}}>매주 화요일 / {props.data?.startTime + ' - ' + props.data?.endTime}</Text>
                    <Text style={{color : '#555555', fontSize : 15, marginBottom : 4}}>치료사 : {props.data?.theraphistId}</Text>
                    <Text style={{color : '#555555', fontSize : 15, marginBottom : 4}}>장소 : {props.data?.location}</Text>
                </View>
				<Divider height={1} color={'#ededed'}></Divider>
				
				<View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
				<TouchableOpacity
                disabled={props.data?.theraphistId ? false : true}
                >
					<View style={[styles.button,{backgroundColor : props.data?.theraphistId ? MAIN_COLOR : '#ededed'}]}>
							<Image style={styles.imageStyle} source={require('../../../assets/icons/ic_chat_16.png')}></Image>
							<Text style={{color : props.data?.theraphistId ? 'white' : '#d5d5d5' }}> 치료사에게 연락하기</Text>
					</View>
				</TouchableOpacity>
				</View>
            </View> 
        );
}
const styles = StyleSheet.create({
    cardContainer :   {
        marginHorizontal : GLOBAL_MARGIN_HORIZON,
		marginBottom : GLOBAL_MARGIN_HORIZON,
        paddingHorizontal : '5%', 
        borderRadius : 10,
        backgroundColor : 'white',
        alignSelf : 'center',
        width : CARD_WIDTH,
        height : CARD_HEIGHT,
    },
    headerContainer : {flexDirection : 'row', marginVertical : 15, alignItems : 'center', width : '100%'},
    imageContainer : {  
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#01b399",
        justifyContent : 'center'
    },
    imageStyle : {height : 20, width : 20},
    button : {flexDirection : 'row', width : CARD_WIDTH * 0.66 , height : CARD_WIDTH * 0.1 ,borderRadius : 8, justifyContent : 'center', alignItems : 'center'},
})