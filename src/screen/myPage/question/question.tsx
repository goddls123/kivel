import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../../types/navigationParam';
import { RouteProp } from '@react-navigation/native';
import { Button } from '../../common/components/Button';

interface questionProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function question(props : questionProps) {
	const getByteLengthOfString : any = function(s : any,b : any, i : any, c : any){
		for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
		return b;
	};

	const [text,setText] = React.useState<string>()	
	const [textByte,setTextByte] = React.useState<number>(0)	


		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
				<View style={styles.innerContainer}>
					<Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
					<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
					<TouchableOpacity
						onPress={() => props.navigation.goBack()}>
						<Icon name="arrow-back" style={styles.iconStyle}></Icon>
					</TouchableOpacity>

					</View>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerTextStyle}>문의하기</Text>
					</View>

					<View>
						<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
							<Text style={styles.text1}>문의내용</Text>
							<Text style={styles.text2}> {textByte}/2000</Text>
						</View>
						<TextInput
						style={styles.textInputStyle}
						placeholder="문의사항을 입력해주세요"
						placeholderTextColor="#aaaaaa"
						multiline
						onChangeText={(text) => (
							setTextByte(getByteLengthOfString(text)),
							setText(text)
						)}
						></TextInput>
					</View>
					
					<Button text={'보내기'} 
					textColor={textByte > 30 ? 'white' : '#aaaaaa'} 
					style={{backgroundColor : textByte > 30 ? MAIN_COLOR : '#ededed', marginTop : 30, marginBottom : GLOBAL_MARGIN_VERTICAL}}></Button>
				</View>
				</ScrollView>
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
	iconStyle : {fontSize: 30, color : 'black'},
	textInputStyle : {height : SIZE_HEIGHT * 0.5, borderColor : '#d5d5d5', borderWidth : 1, borderRadius : 5, textAlignVertical : 'top', padding : 20},
	text1 : {fontSize : 18, color : 'black' , marginBottom : 15},
	text2 : {fontSize : 18, color : '#d5d5d5' , marginBottom : 15},

})