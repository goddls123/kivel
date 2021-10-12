import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, SafeAreaView ,StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderView } from './components/SliderView';
import { Button } from '../common/components/Button';


interface NurseryCautionProps {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function NurseryCaution(props : NurseryCautionProps) {
	
    const [snack, setSnack] = React.useState<number | number[]>([2])
    const [rule, setRule] = React.useState<number | number[]>([2])
    const [meal, setMeal] = React.useState<number | number[]>([2])
    const [rearer, setRearer] = React.useState<string>()
    console.log(snack, rule, meal, rearer)
	return (
	<SafeAreaView style={styles.container}>
		<View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
				<TouchableOpacity onPress={() => props.navigation.reset({routes : [{name : 'Home'}]})}>
					<Icon name="arrow-back" style={{fontSize : 30}}></Icon>
				</TouchableOpacity>
				
				<View style={{marginTop : SIZE_HEIGHT * 0.03 , marginBottom : GLOBAL_MARGIN_VERTICAL}}>
						<Text style={styles.headerTextStyle}>보육시 주의사항</Text>
				</View>

                <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                    <SliderView 
                    style={styles.sliderViewContainer}
                    headerText={'아이에게 간식은'}
                    contentLeft={["먹이지않아요"]}
                    contentRight={["원하면 주는 편이에요"]}
                    value={snack}
                    setValue={setSnack}
                    ></SliderView>

                    <SliderView
                    style={styles.sliderViewContainer}
                    headerText={'아이가 규칙을 어기고 떼를 쓰면'}
                    contentLeft={["받아주기 보단","그 자리에서 훈육해요"]}
                    contentRight={["아이가 진정될 때까지","먼저 달래 주어요"]}
                    value={rule}
                    setValue={setRule}
                    ></SliderView>
                    
                    <SliderView
                    style={styles.sliderViewContainer}
                    headerText={'아이가 식사를 거부하면'}
                    contentLeft={["강요하지 않고","밥을 치워요"]}
                    contentRight={["최대한 먹이려","노력해요"]}
                    value={meal}
                    setValue={setMeal}
                    ></SliderView>
                        
                    <Text style={styles.rearTextStyle}>
                        아이를 주로 누가 양육하나요?    
                    </Text>
                    <TextInput 
                    multiline
                    placeholder="ex) 엄마와 외할머니 또는 보육시설(유치원)"
                    style={styles.textBoxStyle}
                    value={rearer}
                    onChangeText={(text) => setRearer(text)}
                    ></TextInput>
                    <Button 
                    text={'다음으로'} 
                    textColor={rearer? 'white' : '#707070'}
                    style={{backgroundColor : rearer? MAIN_COLOR : '#ededed', marginBottom : GLOBAL_MARGIN_VERTICAL}}
                    onPress={() => props.navigation.navigate('NurseryCaution2')}
                    ></Button>

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
        marginHorizontal: SIZE_WIDTH * 0.05,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111111',
    },
    scrollViewContainer : {marginTop : SIZE_HEIGHT * 0.02},
    sliderViewContainer : {marginBottom : SIZE_HEIGHT * 0.08},
    rearTextStyle : {fontSize : 20, color : '#111111', fontWeight : '500' , marginBottom : SIZE_HEIGHT * 0.02},
    textBoxStyle : {borderRadius :5 , borderWidth : 1, borderColor : "#ededed", height: SIZE_HEIGHT * 0.08, textAlignVertical : 'top', marginBottom : SIZE_HEIGHT * 0.07},


})