import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, Switch, TextInput, ScrollView, BackHandler } from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from '../common/divider';
import { Development } from './components/Development';
import { Memo } from './components/Memo';
import { RouteProp } from '@react-navigation/native';
import { WarningModal } from '../common/components/WarningModal';
import { ChallengingBehavior } from './components/ChallengingBehavior';

interface addRecordProps {
	navigation: StackNavigationProp<stackInterface>;
	route: RouteProp<stackInterface>;
}

export function addRecord(props : addRecordProps) {
		const [warningModal, setWarningModal] = React.useState<boolean>(false)
		const handleBackButtonClick = () => {
			if(!props.navigation.isFocused()){
				return false
			}
			setWarningModal(true)
			return true
		}
		BackHandler.addEventListener("hardwareBackPress" , () => handleBackButtonClick());
	
		console.log(props.route.params?.radioState)
		const [radioState, setRadioState] = React.useState(props.route.params? props.route.params.radioState : [true, false, false])
		function renderRadioButton() {
			let viewArr : any = []
			radioState.map((e : boolean, id : number) => {
				let textArr = ['발달기록', '문제행동', '메모']
				let newState = [false, false, false]
				newState[id] = true
				viewArr.push(
					<View key={id} style={{flexDirection : 'row'}}>
						<TouchableOpacity style={{flexDirection : 'row'}} onPress={() => {setRadioState(newState)}}>
						{
							e 
							? <Image style={{height: 20, width : 20}} source={require('../../assets/icons/btn_radio_on.png')} />
							: <View    style={{height : 20, width : 20, borderRadius : 100, borderWidth : 1 }} />
						}
						<Text style={{marginLeft : 10, marginRight : 20}}>{textArr[id]}</Text>
						</TouchableOpacity>		
						
					</View>
				)
			})
			return viewArr
		}

		function renderComponent() {
			if(radioState[0]){
				return <Development data={props.route.params?.developmentData}/> 
			}
			else if(radioState[1]) {
				return <ChallengingBehavior />
			}
			else if(radioState[2]) {
				return <Memo />
			}
		}
		
		return (
			<SafeAreaView style={styles.container}>
				
				{/* header */}
				<View style={styles.headerContainer}>
					<TouchableOpacity style={styles.closeContainer}
						onPress={() => handleBackButtonClick()}>
						<Icon name="close-outline" style={styles.closeIcon}></Icon>
					</TouchableOpacity>
					<Text style={styles.headerTextStyle}>기록하기</Text>
					<View style={styles.closeContainer} />
				</View>


				<ScrollView>
					{/* RadioButtonContainer */}
					<View style={styles.radioButtonContainer}>
						<Text style={styles.boldText}> 기록 유형을 선택해주세요 </Text>
						<View style={{flexDirection : 'row', }}>
							{ renderRadioButton() }
						</View>
					</View>
					<Divider height={4} color={'#ededed'}></Divider>

					{ renderComponent() }
					
				</ScrollView>
				
				<WarningModal
				isVisible={warningModal}
				setIsVisible={setWarningModal}
				onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}
				></WarningModal> 

			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container : {flex : 1 , backgroundColor : 'white'},
	headerContainer: {height: SIZE_WIDTH * 0.16, marginHorizontal : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'},
	headerTextStyle : {flex : 1, textAlign : 'center', textAlignVertical : 'center', fontSize : 18, fontWeight : 'bold'},
	closeContainer : {width : SIZE_WIDTH * 0.1},
	closeIcon : {fontSize: 30, fontWeight : 'bold', color : 'black'},
	radioButtonContainer : { height : SIZE_WIDTH * 0.24, padding : GLOBAL_MARGIN_HORIZON , justifyContent : 'space-between'},
	boldText : {fontSize : 18, color : 'black'},
	
})