import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, SIZE_HEIGHT } from '../../common/constants';
import { Divider } from '../../common/divider';

interface DiagSelectorProps {
	setModalVisible(value : boolean) : void
	setDiagnosis(value : string) : void
}

export function DiagSelector(props : DiagSelectorProps) {

		function onPressHandler(text : string) {
			props.setDiagnosis(text)
			props.setModalVisible(false)
		}
		const data = ["직접입력", "자폐", "학습장애", "행동장애", "뇌성마비", "지적장애", "주의력결핍"]
		return (
			<View style={{flex : 1, justifyContent : 'flex-end'}}>
				<View style={{height : SIZE_HEIGHT * 0.65, backgroundColor : 'white', borderTopLeftRadius : 15 , borderTopRightRadius : 15,}}>
					<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON}}>

						<Divider height={GLOBAL_MARGIN_VERTICAL} color={"white"} />
						<Text style={{ fontSize: 20,fontWeight: "bold", color : "black"}}>진단명</Text>
						<Divider height={GLOBAL_MARGIN_VERTICAL} color={"white"} />
						<ScrollView>
						{
							data.map((diagnosis, id)=>{
								return (
									<TouchableOpacity key={id} style={{height : SIZE_HEIGHT * 0.06 }} onPress={() => onPressHandler(diagnosis)}>
										<Text style={{ fontSize: 18,fontWeight: "bold", color : "#aaaaaa"}}>{diagnosis}</Text>
									</TouchableOpacity>
								)
							})
						}
						</ScrollView>
					</View>					
				</View>
			</View>
		);
}
const styles = StyleSheet.create({})