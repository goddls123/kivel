import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { developmentRecordType, recordCardType } from '../../../types/types';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../../common/constants';

interface recordCardProps {
	data : recordCardType
}

export function RecordCard(props : recordCardProps) {
    
    function getBadgeStyle(value : string | undefined) {
        let style : any = [styles.badgeText]
        if(value=='발달기록')
            style.push({ color: '#0fafe9', backgroundColor: '#d1f3ff' })
        else if(value == '문제행동')
            style.push({ color: '#e63464', backgroundColor: '#ffebee' })
        else if(value == '메모')
            style.push({ color: '#707070', backgroundColor: '#ededed' })
        
        return style
    }

    function getLabelStyle(value : string | undefined){
        let style : any = [{width : '1%'}]
        if(value=='발달기록')
            style.push({ backgroundColor: '#0fafe9' })
        else if(value == '문제행동')
            style.push({ backgroundColor: '#e63464' })
        else if(value == '메모')
            style.push({ backgroundColor: '#707070' })
        
        return style
    }

		return (
			<View style={styles.container}>
				<View style={getLabelStyle(props.data.tableName)}></View>
				<View style={styles.textBoxContainer}>
					<View style={styles.titleBadge}>
						<Text style={styles.titleText}>{props.data.title.length > 15 ? props.data.title.substr(0,15) + '...' : props.data.title }</Text>
						<Text style={getBadgeStyle(props.data.tableName)}>{props.data.tableName}</Text>
					</View>
					<Text>약 주2회 발생</Text>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
    container: {
        marginTop : 10,
        flexDirection: 'row',
        width: SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2,
        height: SIZE_WIDTH * 0.22,
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 8,
        overflow: 'hidden',
    },
    textBoxContainer: {
        justifyContent: 'center',
        marginLeft: GLOBAL_MARGIN_HORIZON,
        width: SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 4,
    },
    titleBadge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 5,
        textAlign: 'center',
        marginRight: 10,
    },
    titleText : {fontSize : 16,color : '#707070'}
});