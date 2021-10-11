import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, SafeAreaView ,StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';

interface NurseryCautionProps {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function NurseryCaution(props : NurseryCautionProps) {
	
	return (
	<SafeAreaView style={styles.container}>
		<View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
				<TouchableOpacity onPress={() => props.navigation.reset({routes : [{name : 'Home'}]})}>
					<Icon name="arrow-back" style={{fontSize : 30}}></Icon>
				</TouchableOpacity>
				
				<View style={{marginTop : SIZE_HEIGHT * 0.03 , marginBottom : SIZE_HEIGHT * 0.1}}>
						<Text style={styles.headerTextStyle}>보육시 주의사항</Text>
				</View>
                <Slider>
                    
                </Slider>
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