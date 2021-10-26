import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { ProgressBar } from 'react-native-paper'
import { Divider } from '../common/divider';
import { CautionItem } from './components/CautionItem';
import { childData } from '../../types/childInfoTypes';
import { SliderView } from '../childEnroll/components/SliderView';
interface childInfoProps {

}

export function childInfo(props : childInfoProps) {

		const [revise,setRevise] = React.useState<boolean>(false)

		////////////////////////////////////////////////////////////////////////
		const [degreeSnack, setDegreeSnack] = React.useState<number>(2);
		const [degreeRule, setDegreeRule] = React.useState<number>(2);
		const [degreeMeal, setDegreeMeal] = React.useState<number>(2);
		////////////////////////////////////////////////////////////////////////

		const [childData, setChildData] = React.useState<childData>()
		React.useEffect(()=>{
			// childinfo 받아오기
		})
		const [progress, setProgress] = React.useState<number>(0)
		React.useEffect(() =>{
			setProgress(0.9)
		},[])
		return (
		<ScrollView style={styles.container}>

			{/* 수정 , progress */}
			<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_VERTICAL}}>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => setRevise(!revise)}>
					<Text style={styles.buttonTextStyle}> 수정 </Text>
				</TouchableOpacity>

				<Text style={{marginVertical : 10, fontFamily : 'Cafe24Ssurround', color : MAIN_COLOR, fontSize : 18}}>90% 완성했어요</Text>
				<ProgressBar progress={progress} color={MAIN_COLOR} style={{height : 5, borderRadius : 5}} />
			</View>
			<Divider height={1} color={"#d5d5d5"}/>

			{/* 주의사항 */}
			<View style={{marginTop : GLOBAL_MARGIN_VERTICAL, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>
				<Text style={{fontSize:  17, fontWeight : '500', color : '#707070'}}>주의사항</Text>

				<CautionItem
				item="medicine"
				revise={revise}
				text={"aaa"}
				></CautionItem>

				<CautionItem
				item="poop"
				revise={revise}
				></CautionItem>

				<CautionItem
				item="allergy"
				revise={revise}
				></CautionItem>

				<CautionItem
				item="convulsion"
				revise={revise}
				></CautionItem>

				<CautionItem
				item="care"
				revise={revise}
				></CautionItem>
				
				<CautionItem
				item="check"
				revise={revise}
				style={{marginBottom : GLOBAL_MARGIN_VERTICAL * 2 }}
				></CautionItem>

				<SliderView
				style={styles.sliderViewContainer}
				headerText={'아이에게 간식은'}
				contentLeft={['먹이지않아요']}
				contentRight={['원하면 주는 편이에요']}
				value={degreeSnack}
				setValue={setDegreeSnack}></SliderView>

				<SliderView
				style={styles.sliderViewContainer}
				headerText={'아이가 규칙을 어기고 떼를 쓰면'}
				contentLeft={['받아주기 보단', '그 자리에서 훈육해요']}
				contentRight={['아이가 진정될 때까지', '먼저 달래 주어요']}
				value={degreeRule}
				setValue={setDegreeRule}></SliderView>

				<SliderView
				style={styles.sliderViewContainer}
				headerText={'아이가 식사를 거부하면'}
				contentLeft={['강요하지 않고', '밥을 치워요']}
				contentRight={['최대한 먹이려', '노력해요']}
				value={degreeMeal}
				setValue={setDegreeMeal}></SliderView>
			</View>
			<Divider height={1} color={"#d5d5d5"}/>

			<View style={{marginTop : GLOBAL_MARGIN_VERTICAL, marginHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_VERTICAL * 2}}>
				<Text style={{fontSize : 17, marginBottom : 10, color : 'black'}}>성향 <Image source={require('../../assets/icons/ic_memo_16.png')}></Image> </Text>
				<TextInput
				style={{flex : 1 , height : SIZE_WIDTH * 0.4, borderColor : '#d5d5d5', borderWidth : 1, borderRadius : 10, fontSize : 16, padding : GLOBAL_MARGIN_HORIZON , textAlignVertical : 'top'}}
				multiline
				placeholder="치료사 선생님이 참고할만한 키블(이)의 성향을 알려주세요!"
				placeholderTextColor="#d5d5d5"
				></TextInput>
			</View>
		</ScrollView>
		);
}
const styles = StyleSheet.create({
	container : {flex :1 , backgroundColor : 'white'},
	buttonStyle : { marginTop : GLOBAL_MARGIN_HORIZON ,alignSelf: 'flex-end' , width : SIZE_WIDTH * 0.15, height : SIZE_WIDTH * 0.07, borderWidth : 1, borderColor : '#707070', borderRadius : 5 , justifyContent : 'center', alignItems : 'center'},
	buttonTextStyle : { color : '#707070' },
	sliderViewContainer: {marginBottom: SIZE_HEIGHT * 0.08},
})