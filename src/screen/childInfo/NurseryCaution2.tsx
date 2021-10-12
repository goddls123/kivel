import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, SafeAreaView ,StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderView } from './components/SliderView';
import { Button } from '../common/components/Button';


interface NurseryCaution2Props {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function NurseryCaution2(props : NurseryCaution2Props) {
	
    const [snack, setSnack] = React.useState<number | number[]>([2])
    const [rule, setRule] = React.useState<number | number[]>([2])
    const [meal, setMeal] = React.useState<number | number[]>([2])
    const [rearer, setRearer] = React.useState<string>()
    console.log('nurser')
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
                <ScrollView style={{marginTop : SIZE_HEIGHT * 0.02}} showsVerticalScrollIndicator={false}>
                    
                    <Button 
                    text={'다음으로'} 
                    textColor={rearer? 'white' : '#707070'}
                    style={{backgroundColor : rearer? MAIN_COLOR : '#ededed', marginBottom : GLOBAL_MARGIN_VERTICAL}}
                    // onPress={() => props.navigation.navigate()}
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


})