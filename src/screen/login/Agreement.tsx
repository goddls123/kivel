import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {SocialLoginButton} from './components/SocialLoginButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {logInWithKakao, unlinkKakao} from '../login/service/loginService';
import {Divider} from '../common/divider';
import { AgreementList } from './components/agreementList';
import { Button } from './components/Button';

interface AgreementProps {
    navigation: StackNavigationProp<stackInterface, 'SocialLogin'>;
}

export function Agreement(props: AgreementProps) {

    const [agreeAll, setAgreeAll] = React.useState<boolean>(false);                  //전체 동의
    const [serviceUse, setServiceUse] = React.useState<boolean>(true);              //서비스 이용약관
    const [pInfoCollection, setPInfoCollection] = React.useState<boolean>(false);    //개인정보 수집 이용동의
    const [pInfoProvide, setPInfoProvide] = React.useState<boolean>(false);          //개인정보 제3자 제공 동의
    const [marketingInfo, setMarketingInfo] = React.useState<boolean>(false);        //마케팅 정보 수신동의

    console.log(serviceUse);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                
                <View style={{height: '10%', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icon name="close" style={{fontSize: 30}}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.bigTextStyle}>약관동의</Text>
                </View>

                <Divider height="30%" color="white" />

                <View style={styles.checkContainer}>
                    <TouchableOpacity style={styles.allCheckButton} onPress={() => setServiceUse(false)}>
                        <Icon name="checkmark" style={styles.allCheck} />
                    </TouchableOpacity>
                    <Text style={styles.allTextStyle}> 모두 확인, 동의합니다.</Text>
                </View>

                <Divider height={2} color="#ededed" style={{marginTop : 20, marginBottom :30}}></Divider>

				<AgreementList text="서비스 이용약관 (필수)" onPress={setServiceUse}></AgreementList>
				<AgreementList text="개인정보 수집 이용동의 (필수)" onPress={setServiceUse}></AgreementList>
				<AgreementList text="개인정보 제3자 제공 동의 (필수)" onPress={setServiceUse}></AgreementList>
				<AgreementList text="마케팅 정보 수신 동의 (선택)" onPress={setServiceUse}></AgreementList>
				
				<Divider height="5%" color="white" />

				<Button 
					text={'확인'} 
					textColor={'#707070'} 
					style={{backgroundColor : '#ededed' , borderColor : '#ededed'}} 
					onPress={() => {}}
                    disable = {true}
				/>
                {serviceUse ? <Text>sdaklfjalsdkf</Text> : null}
            </View>
        </View>
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
    bigTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#111111',
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    allCheckButton: {
        height: SIZE_HEIGHT * 0.04,
        width: SIZE_HEIGHT * 0.04,
        borderRadius: 5,
        backgroundColor: '#d5d5d5',
        alignItems: 'center',
        justifyContent: 'center',
		marginRight : 5
    },
    allCheck: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    allTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
	checkButton :{
		height: SIZE_HEIGHT * 0.04,
        width: SIZE_HEIGHT * 0.04,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
		marginRight : 5
	},
	check :{
		fontSize: 30,
        color: '#d5d5d5',
        fontWeight: 'bold',
	},
	textStyle :{
		fontFamily: 'Pretendard',
        fontSize: 17,
        color: '#707070',
        fontWeight: 'bold',
        fontStyle: 'normal',
		
	}
});
