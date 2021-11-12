import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import { GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_WIDTH } from '../constants';
import { Button } from './Button';

interface WarningModalProps {
	isVisible : boolean
	setIsVisible(value : boolean) : void
	onPress(): void
}


export function WarningModal(props : WarningModalProps) {

	// set set 한번에 두개하면 메모리 leak 발생
	async function onPressHandler() {
		props.setIsVisible(false)
	}

		return (
			<Modal
			isVisible={props.isVisible}
			>
				<View style={{ height : SIZE_WIDTH * 0.75, backgroundColor : 'white', alignItems : 'center' , borderRadius : 20}}>
					<Image style={{marginTop : GLOBAL_MARGIN_VERTICAL ,height : SIZE_WIDTH * 0.12, width : SIZE_WIDTH * 0.12 }} source={require('../../../assets/icons/ic_noti_40.png')} />
					<Text style={{marginTop : GLOBAL_MARGIN_VERTICAL * 0.5, fontSize : 20, color : 'black'}}>내용이 저장되지 않았습니다.</Text>
					<Text style={{fontSize : 20, color : 'black'}}>나가시겠습니까?</Text>
					
					<View style={{flex : 1 , flexDirection :'row', alignItems : 'flex-end', paddingBottom : '5%', paddingTop : '5%'}}>
						<View style={{flex : 1, marginLeft : '12%', marginRight : '3%' }}>
							<Button text={'취소'} textColor={'#707070'} style={{backgroundColor : '#ededed', borderRadius : 50}}
							onPress={() => {
								props.setIsVisible(false)
							}}></Button>
						</View>
						<View style={{flex : 1, marginRight : '12%', marginLeft : '3%'}}>
							<Button text={'확인'} textColor={'white'} style={{backgroundColor : MAIN_COLOR, borderRadius : 50}}
							// onPress={ async () => onPressHandler().then(() => props.onPress())}
							onPress={ async () => onPressHandler().then(() => props.onPress())}
							></Button>
						</View>
					</View>
				</View>
			</Modal>
		);
}
const styles = StyleSheet.create({})