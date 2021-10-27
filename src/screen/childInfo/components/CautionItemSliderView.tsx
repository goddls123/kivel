import React from 'react';
import {View, StyleSheet, Text, Image, TextInput, ViewStyle} from 'react-native';
import { SliderView } from '../../childEnroll/components/SliderView';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';



const ITEM : any = {
	snack : {
		image : require('../../../assets/icons/ic_snack_40.png'),
		headerText : '아이에게 간식은',
		contentLeft : ['먹이지않아요'],
		contentRight : ['원하면 주는 편이에요'],
		contentDegreeText : ['식사 외에는 전혀 주지 않아요.','거의 주지 않는 편이에요.','그때그때 달라요.','아이가 원한다면 주는 편이에요.','원한다면 항상 주어요.']
		
	},
	rule : {
		image : require('../../../assets/icons/ic_rule_40.png'),
		headerText : '아이가 규칙을 어기고 떼를 쓰면',
		contentLeft : ['받아주기 보단', '그 자리에서 훈육해요'],
		contentRight : ['아이가 진정될 때까지', '먼저 달래 주어요'],
		contentDegreeText : ['따끔하게 혼내요.','달래기보단 혼내는 편이에요.','그때그때 달라요.','혼내기보단 달래주는 편이에요.','진정될 때까지 달래주어요.']
	},
	meal : {
		image : require('../../../assets/icons/ic_meal_40.png'),
		headerText : '아이가 식사를 거부하면',
		contentLeft : ['강요하지 않고', '밥을 치워요'],
		contentRight : ['최대한 먹이려', '노력해요'],
		contentDegreeText : ['어떻게 해서든 먹이려 노력해요.','아이가 먹을 때까지 기다려주어요.','그때그때 달라요.','조금 기다렸다가 다시 주어요.','다음 끼니에 다시 주어요.']
	},
}



interface CautionItemSliderViewProps {
	item : 'rule' | 'snack' | 'meal' 
	revise : boolean
	sliderValue : number | undefined
	setSliderValue(value : number) : void
	text? : string
	setText?(value: string) : void
	style? : ViewStyle
}



export function CautionItemSliderView(props: CautionItemSliderViewProps) {

    return (
		<View style={[styles.container,props.style]}>
			{
				props.revise
				? 
					<SliderView
						style={styles.sliderViewContainer}
						headerText={ITEM[props.item].headerText}
						contentLeft={ITEM[props.item].contentLeft}
						contentRight={ITEM[props.item].contentRight}
						value={props.sliderValue}
						setValue={props.setSliderValue}
					></SliderView>
				: 
					<View style={{	flex : 1, flexDirection: 'row'}}>
						<View style={styles.imageContainer}>
							<Image 
							style={styles.imageStyle}
							source={ITEM[props.item].image} />
						</View>
						<View style={{ flex : 1, justifyContent : 'center'}}>
							<Text style={styles.fixedTextStyle}>{ITEM[props.item].headerText}</Text>
							<Text style={styles.userTextStyle}>{props.sliderValue? ITEM[props.item].contentDegreeText[props.sliderValue] : null}</Text>
						</View>
					</View>
			}
		</View>
    );
}
const styles = StyleSheet.create({
  	container: {
	  marginTop: 20,
	  justifyContent : 'center',
	},
	imageContainer: {
		borderRadius: 100,
		height: SIZE_WIDTH * 0.2,
		width: SIZE_WIDTH * 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffe3d8',
	},
	imageStyle : {height :SIZE_WIDTH * 0.125, width : SIZE_WIDTH * 0.125},
	sliderViewContainer: {marginBottom: SIZE_HEIGHT * 0.05},
	fixedTextStyle : {marginLeft : GLOBAL_MARGIN_HORIZON , marginVertical : 5 , fontSize: 17, textAlignVertical :'center', color : 'black'},
	userTextStyle : {marginLeft : GLOBAL_MARGIN_HORIZON , marginVertical : 5 ,width : SIZE_WIDTH * 0.5, fontSize: 15, textAlignVertical :'center', color : '#707070'},
});
