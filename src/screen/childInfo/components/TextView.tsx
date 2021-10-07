import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

interface TextViewProps {
	text : string
}

export function TextView(props : TextViewProps) {
		return (
			<View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>{props.text} </Text>
                <Text style={{color: '#ff8a5c'}}>*</Text>
            </View> 
		);
}
const styles = StyleSheet.create({
	text: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        color: '#111111',
    },
	
})