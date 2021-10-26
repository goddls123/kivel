import React from 'react';
import {View, StyleSheet, Text, Image, TextInput, ViewStyle} from 'react-native';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../../common/constants';



const ITEM : any = {
	medicine : {
		image : require('../../../assets/icons/ic_medicine_40.png'),
		placeHolder : '복약 정보를 입력해주세요'
	},
	allergy : {
		image : require('../../../assets/icons/ic_allergy_40.png'),
		placeHolder : '알레르기 정보를 입력해주세요'
	},
	care : {
		image : require('../../../assets/icons/ic_care_40.png'),
		placeHolder : '키블이를 보호할 때 주의사항이 있나요?'
	},
	convulsion : {
		image : require('../../../assets/icons/ic_convulsion_40.png'),
		placeHolder : '경기 정보를 입력해주세요'
	},
	poop : {
		image : require('../../../assets/icons/ic_poop_40.png'),
		placeHolder : '배변 정보를 입력해주세요'
	},
	check : {
		image : require('../../../assets/icons/ic_check_40.png'),
		placeHolder : '배변 정보를 입력해주세요'
	},
}



interface CautionItemProps {
	item : 'medicine' | 'allergy' | 'care' | 'convulsion' | 'poop' | 'check'
	revise : boolean
	text? : string
	setText?(value: string) : void
	style? : ViewStyle
}

export function CautionItem(props: CautionItemProps) {

    return (
		<View style={[styles.container,props.style]}>

			<View style={styles.imageContainer}>
				<Image 
				style={{height :SIZE_WIDTH * 0.125, width : SIZE_WIDTH * 0.125}}
				source={ITEM[props.item].image} />
			</View>

			{
				props.revise
				? <TextInput
				style={styles.textInputStyle}
				placeholder={ITEM[props.item].placeHolder}
				placeholderTextColor={"#d5d5d5"}
				></TextInput>
				: <Text style={{marginLeft : GLOBAL_MARGIN_HORIZON ,width : SIZE_WIDTH * 0.5, fontSize: 20, textAlignVertical :'center', color : 'black'}}>{props.text}</Text>
			}

		</View>
    );
}
const styles = StyleSheet.create({
  	container: {
	  flexDirection: 'row', 
	  marginTop: 20,
	  alignItems : 'center'
	},
	imageContainer: {
		borderRadius: 100,
		height: SIZE_WIDTH * 0.2,
		width: SIZE_WIDTH * 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffe3d8',
	},
	textInputStyle: {marginLeft: 20, flex : 1, height : SIZE_WIDTH * 0.2 , borderRadius : 10, borderColor : '#d5d5d5', borderWidth: 1, padding : 10, textAlignVertical : 'top'},
	
});
