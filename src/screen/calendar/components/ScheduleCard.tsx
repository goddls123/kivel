import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { schedule } from '../../../types/calendarTypes'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';

interface ScheduleCardProps {
    data : schedule | undefined
}

export function ScheduleCard(props : ScheduleCardProps) {
    
        return (
            <View style={[styles.cardContainer,{backgroundColor : 'pink'}]}>

            </View> 
        );
}
const styles = StyleSheet.create({
    cardContainer :   {
        marginTop : SIZE_HEIGHT / 36 ,
        width : SIZE_WIDTH * 0.8 ,
        height : SIZE_HEIGHT * 0.18,
        borderRadius : 20,
        backgroundColor : 'gray',
        justifyContent : 'center'
    },

})