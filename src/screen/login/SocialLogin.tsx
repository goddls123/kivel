import React from 'react';
import {View, SafeAreaView ,StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons'
import { SocialLoginButton } from './components/SocialLoginButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import {  logInWithKakao,  unlinkKakao } from '../login/service/loginService';
import { Divider } from '../common/divider';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client';

interface SocialLoginProps {
	navigation : StackNavigationProp<stackInterface,'SocialLogin'>;
}

export function SocialLogin(props : SocialLoginProps) {
	const query = gql`
	mutation userLogin($User : User!){
		userLogin(User : $User) {
			create_date
		}
	}`;
	const query1 = gql`
	mutation{
		userLogin{
		  create_date
		}
	  }`

	const [ mutationTest ] = useMutation(query1)
	return (
	<SafeAreaView style={styles.container}>
		<View style={styles.innerContainer}>

			<Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="close" style={{fontSize: 30}}></Icon>
                </TouchableOpacity>
			<Divider height={'5%'} color="white" />

			<View style={{alignItems : 'flex-start'}}>
				<Text style={styles.bigTextStyle}>간편로그인</Text>
				<View style={{height : SIZE_HEIGHT * 0.025}} />
				<Text style={styles.smallTextStyle}>키블은 SNS로 로그인하면 편리하게</Text>
				<Text style={styles.smallTextStyle}>서비스를 이용하실 수 있습니다.</Text>
			</View>

			<View style={{height : '25%'}} />
			<SocialLoginButton platform='kakao' onPress={logInWithKakao}/>
			<SocialLoginButton platform='naver' onPress={() => { props.navigation.navigate('Agreement')}}/>
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
	  textView: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	  },
	  imageStyle: {
		height: SIZE_HEIGHT * 0.1,
		width: SIZE_HEIGHT * 0.1,
		marginBottom: 10,
		alignSelf: 'center',
	  },
	  bigTextStyle: {
		fontFamily: 'Pretendard',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#111111',
	  },
	  smallTextStyle : {
		color : '#707070',
		fontSize : 17,
	  }

})