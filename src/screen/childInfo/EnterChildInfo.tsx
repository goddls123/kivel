import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GLOABL_MARGIN_HORIZON, GLOABL_MARGIN_VERTICAL, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { Divider } from '../common/divider';
import { TextInputView } from './components/TextInputView';
import { TextView } from './components/TextView';
import { Button } from '../common/components/Button';

interface enterChildInfoProps {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function EnterChildInfo(props : enterChildInfoProps) {
		
	const essentialOptionCheck = () : boolean => {
		return false
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>

				<Divider height={GLOABL_MARGIN_HORIZON} color="white" />
				<TouchableOpacity onPress={() => props.navigation.reset({routes : [{name : 'Home'}]})}>
					<Icon name="arrow-back" style={{fontSize : 30}}></Icon>
				</TouchableOpacity>
				
				<View style={{marginTop : SIZE_HEIGHT * 0.03 , marginBottom : SIZE_HEIGHT * 0.1}}>
						<Text style={styles.headerTextStyle}>우리아이등록</Text>
				</View>

				<ScrollView style={{flex : 1}}>
					
					<TextView text='이름'/>
					<TextInputView 
					placeholder={'우리 아이 이름을 한글로 입력해주세요. ex) 김키블'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					></TextInputView>

					<TextView text='출생일'/>
					<TextInputView 
					placeholder={'출생일을 선택해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					icon="calendar"
					></TextInputView>

					{/* 성별 */}
					<View style={{marginBottom : SIZE_HEIGHT * 0.06}}>
						<View style={{flexDirection: 'row', marginBottom : SIZE_HEIGHT * 0.02}}>
							<Text style={styles.text}>성별 </Text>
							<Text style={{color: '#ff8a5c'}}>*</Text>
						</View>
						<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
							<TouchableOpacity style={styles.buttonSex}>
								<Text>여아</Text>
							</TouchableOpacity>
						
							<TouchableOpacity style={styles.buttonSex}>
								<Text>남아</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TextView text='진단명'/>
					<TextInputView 
					placeholder={'진단명을 선택해 주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					icon="chevron-down"
					></TextInputView>

					{/* 출생시 주수 */}
					<TextView text='출생시 주수'/>
					<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
						<TextInputView 
							placeholder={'ex) 23'}
							style={{marginBottom : SIZE_HEIGHT * 0.06, width : SIZE_WIDTH * 0.40}}
							unitText="주"
							keyboardType='numeric'
						></TextInputView>
						<TextInputView 
							placeholder={'ex) 10'}
							style={{marginBottom : SIZE_HEIGHT * 0.06, width : SIZE_WIDTH * 0.40}}
							unitText="일"
							keyboardType='numeric'
						></TextInputView>
					</View>

					<TextView text='키'/>
					<TextInputView 
					placeholder={'키를 입력해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					unitText="cm"
					></TextInputView>

					<TextView text='몸무게'/>
					<TextInputView 
					placeholder={'몸무게를 입력해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.1}}
					unitText="kg"
					></TextInputView>

					<Button 
					text={'다음으로'} 
					textColor={!essentialOptionCheck() ? '#707070' : '#FFFFFF'} 
					style={{backgroundColor : essentialOptionCheck() ? "#ff8a5c" : '#ededed' }} 
					onPress={() => {}}
                    disable = {!essentialOptionCheck()}
					/>
				</ScrollView>

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
        marginHorizontal: GLOABL_MARGIN_HORIZON,
    },
	headerTextStyle: {
		fontFamily: 'Pretendard',
		fontSize: 28,
		fontWeight: 'bold',
		color: '#111111',
	},
	text : {
		fontFamily: 'Pretendard',
		fontSize: 20,
		color: '#111111',
	},
	buttonSex : {
		width : SIZE_WIDTH * 0.40,
		paddingVertical : SIZE_HEIGHT * 0.017,
		borderRadius: 20,
		borderColor : '#ededed',
		borderWidth : 2,
		justifyContent : 'center', 
		alignItems : 'center'
	}
})