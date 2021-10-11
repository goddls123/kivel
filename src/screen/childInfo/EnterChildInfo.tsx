import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { Divider } from '../common/divider';
import { TextInputView } from './components/TextInputView';
import { TextView } from './components/TextView';
import { Button } from '../common/components/Button';
import Modal from 'react-native-modal'
import { DateScroller } from './components/DateScroller';
import { DiagSelector } from './components/DiagSelector';


interface enterChildInfoProps {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function EnterChildInfo(props : enterChildInfoProps) {
		
	

	const [name, setName] = React.useState<string>();
	const [birthDate, setBirthDate] = React.useState<Date>();
	const [sex, setSex] = React.useState<'M'|'W'>();
	const [diagnosis, setDiagnosis] = React.useState<string>();
	const [directInputDiag, setDirectInputDiag] = React.useState<string>();
	const [weekNum,setWeekNum] = React.useState<number>();
	const [dateNum,setdateNum] = React.useState<number>();
	const [height, setHeight] = React.useState<number>();
	const [weight, setWeight] = React.useState<number>();
	

	//modal visible
	const [dateModalVisible, setdateModalVisible] = React.useState<boolean>(false);
	const [diagModalVisible, setDiagModalVisible] = React.useState<boolean>(false);


	// 필수항목 체크
	const essentialOptionCheck = () : boolean => {
		if(name && birthDate && sex && weekNum && dateNum && height && weight){
			if(diagnosis == "직접입력"){
				if(directInputDiag){
					return true;
				}
			} else if(diagnosis != undefined){
				return true;
			} else {
				return false;
			}
		}

		return false
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>

				<Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
				<TouchableOpacity onPress={() => props.navigation.reset({routes : [{name : 'Home'}]})}>
					<Icon name="arrow-back" style={{fontSize : 30}}></Icon>
				</TouchableOpacity>
				
				<View style={{marginTop : SIZE_HEIGHT * 0.03 , marginBottom : SIZE_HEIGHT * 0.1}}>
						<Text style={styles.headerTextStyle}>우리아이등록</Text>
				</View>

				<ScrollView 
					style={{flex : 1}}
					showsVerticalScrollIndicator={false}
				>
					
					<TextView text='이름'/>
					<TextInputView 
					placeholder={'우리 아이 이름을 한글로 입력해주세요. ex) 김키블'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					onChangeText={setName}
					></TextInputView>

					<TextView text='출생일'/>
					<TextInputView 
					placeholder={'출생일을 선택해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					icon="calendar"
					editable={false}
					iconOnPress={setdateModalVisible}
					value={birthDate}
					></TextInputView>

					{/* 성별 */}
					<View style={{marginBottom : SIZE_HEIGHT * 0.06}}>
						<View style={{flexDirection: 'row', marginBottom : SIZE_HEIGHT * 0.02}}>
							<Text style={styles.text}>성별 </Text>
							<Text style={{color: '#ff8a5c'}}>*</Text>
						</View>
						<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
							<TouchableOpacity style={[styles.buttonSex,{borderColor : sex == 'M' ? '#ff8a5c' : '#ededed'}]}
							onPress={() => setSex('M')}
							>
								<Text style={{color : sex == 'M' ? '#ff8a5c' : '#aaaaaa'}}>남</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[styles.buttonSex,{borderColor : sex == 'W' ? '#ff8a5c' : '#ededed'}]}
							onPress={() => setSex('W')}
							>
								<Text style={{color : sex == 'W' ? '#ff8a5c' : '#aaaaaa'}}>여</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TextView text='진단명'/>
					<TextInputView 
					placeholder={'진단명을 선택해 주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					icon="chevron-down"
					iconOnPress={setDiagModalVisible}
					editable={false}
					value={diagnosis}
					></TextInputView>
					{
						diagnosis === "직접입력"
						?
						<TextInputView 
						placeholder={'진단명을 입력해 주세요'}
						style={{marginBottom : SIZE_HEIGHT * 0.06 , marginTop : - SIZE_HEIGHT * 0.05 }}
						value={directInputDiag}
						onChangeText={setDirectInputDiag}
						></TextInputView>
						: null
					}
					{/* 출생시 주수 */}
					<TextView text='출생시 주수'/>
					<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
						<TextInputView 
						placeholder={'ex) 23'}
						style={{marginBottom : SIZE_HEIGHT * 0.06, width : SIZE_WIDTH * 0.40}}
						unitText="주"
						keyboardType='numeric'
						onChangeText={setWeekNum}
						></TextInputView>
						<TextInputView 
						placeholder={'ex) 10'}
						style={{marginBottom : SIZE_HEIGHT * 0.06, width : SIZE_WIDTH * 0.40}}
						unitText="일"
						keyboardType='numeric'
						onChangeText={setdateNum}
						></TextInputView>
					</View>

					<TextView text='키'/>
					<TextInputView 
					placeholder={'키를 입력해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.06}}
					unitText="cm"
					keyboardType='numeric'
					onChangeText={setHeight}
					></TextInputView>

					<TextView text='몸무게'/>
					<TextInputView 
					placeholder={'몸무게를 입력해주세요'}
					style={{marginBottom : SIZE_HEIGHT * 0.1}}
					unitText="kg"
					keyboardType='numeric'
					onChangeText={setWeight}
					></TextInputView>

					<Button 
					text={'다음으로'} 
					textColor={!essentialOptionCheck() ? '#707070' : '#FFFFFF'} 
					style={{backgroundColor : essentialOptionCheck() ? "#ff8a5c" : '#ededed' }} 
					onPress={() => {props.navigation.navigate('NurseryCaution')}}
                    disable = {!essentialOptionCheck()}
					/>
				</ScrollView>


				{/* 출생일 dateScroller */}
				<Modal isVisible={dateModalVisible}>
					<DateScroller 
						setDate={setBirthDate} 
						date={birthDate}
						setModalVisible={setdateModalVisible}
					></DateScroller>
				</Modal>

				<Modal isVisible={diagModalVisible}
					onBackdropPress={()=>setDiagModalVisible(false)}
					style={{margin : 0}}
				>
					<DiagSelector
						setModalVisible={setDiagModalVisible}
						setDiagnosis={setDiagnosis}
					></DiagSelector>
				</Modal>

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
        marginHorizontal: GLOBAL_MARGIN_HORIZON,
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
		// borderColor : '#ededed',
		borderWidth : 2,
		justifyContent : 'center', 
		alignItems : 'center'
	}
})