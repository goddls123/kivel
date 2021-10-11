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
                
                <View>
                    <Text>아이에게 간식은</Text>
                    <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbImage={{uri : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE"}}
                    />
                    <Slider
                        // value={value}
                        minimumValue={0}
                        maximumValue={50}
                        // onValueChange={(value) => setValue(value)}
                        // thumbStyle={}
                        // customThumb={
                        //     <View
                        //         style={{
                        //             width: 35,
                        //             height: 20,
                        //             overflow: 'hidden',
                        //             borderTopLeftRadius: 10,
                        //             borderTopRightRadius: 10,
                        //             borderBottomLeftRadius: 10,
                        //             borderBottomRightRadius: 10,
                        //             backgroundColor: 'gold' 
                        //         }}
                        //     />
                        // }
                    />
                </View>
                
                    
                
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