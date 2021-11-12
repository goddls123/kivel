import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../../common/constants';

interface recordCardProps {
	
}

export function RecordCard(props : recordCardProps) {
    
    function getBadgeStyle() {
        let data = '문제행동'
        let style : any = [styles.badgeText]
        if(data=='문제행동')
            style.push({ color: '#e63464', backgroundColor: '#ffebee' })
        else if(data == '발달지연')
            style.push({ color: '#0fafe9', backgroundColor: '#d1f3ff' })
        else if(data == '자유메모')
            style.push({ color: '#707070', backgroundColor: '#ededed' })
        
        return style
    }

    function getLabelStyle(){
        let data = '문제행동'
        let style : any = [{width : '1%'}]
        if(data=='문제행동')
            style.push({ backgroundColor: '#e63464' })
        else if(data == '발달지연')
            style.push({ backgroundColor: '#0fafe9' })
        else if(data == '자유메모')
            style.push({ backgroundColor: '#707070' })
        
        return style
    }

		return (
			<View style={styles.container}>
				<View style={getLabelStyle()}></View>
				<View style={styles.textBoxContainer}>
					<View style={styles.titleBadge}>
						<Text>소리지르며 떼쓰기</Text>
						<Text style={getBadgeStyle()}>문제행동</Text>
					</View>
					<Text>약 주2회 발생</Text>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
    container: {
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
});