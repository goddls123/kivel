import React from 'react';
import {View, StyleSheet, Text, TextInput, ViewStyle, TouchableOpacity, KeyboardTypeOptions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
interface textInputViewProps {
    placeholder: string;
    style?: ViewStyle;
	icon? : string
	unitText? : string
	keyboardType? : KeyboardTypeOptions 
}

export function TextInputView(props: textInputViewProps) {

    return (
        <View style={[{borderBottomWidth: 1, borderBottomColor: '#ededed'},props.style]}>
            {/* <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>{props.text} </Text>
                <Text style={{color: '#ff8a5c'}}>*</Text>
            </View> */}
            <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems :'center'}}>
                <TextInput 
				placeholder={props.placeholder} 
				keyboardType={props.keyboardType ? props.keyboardType : 'default'}
				></TextInput>
				{
					props.icon
					? 		
					<TouchableOpacity>
						<Icon name={props.icon} style={{fontSize: 25, color : '#ff8a5c'}}></Icon>
					</TouchableOpacity>
					: null
				}
				{
					props.unitText
					?
					<View>
						<Text style={{fontSize : 20, color : '#aaaaaa', fontWeight : 'bold'}}>{props.unitText}</Text>
					</View>
					: null
				}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        color: '#111111',
    },
});
