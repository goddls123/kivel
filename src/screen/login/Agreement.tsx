import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Platform,
} from 'react-native';
import {
    GLOBAL_MARGIN_HORIZON,
    MAIN_COLOR,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {SocialLoginButton} from './components/SocialLoginButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {logInWithKakao, unlinkKakao} from '../login/service/loginService';
import {Divider} from '../common/divider';
import {AgreementList} from './components/AgreementList';
import {Button} from '../common/components/Button';
import { checkEssential } from '../common/service/check';

interface AgreementProps {
    navigation: StackNavigationProp<stackInterface, 'SocialLogin'>;
}

export function Agreement(props: AgreementProps) {    

    const [agreeAll, setAgreeAll] = React.useState<boolean>(false); //전체 동의
    const [serviceUse, setServiceUse] = React.useState<boolean>(false); //서비스 이용약관
    const [pInfoCollection, setPInfoCollection] = React.useState<boolean>(false); //개인정보 수집 이용동의
    const [pInfoProvide, setPInfoProvide] = React.useState<boolean>(false); //개인정보 제3자 제공 동의
    const [marketingInfo, setMarketingInfo] = React.useState<boolean>(false); //마케팅 정보 수신동의

    // 약관동의
    function setEntireState(value: boolean) {
        setAgreeAll(value);
        setServiceUse(value);
        setPInfoCollection(value);
        setPInfoProvide(value);
        setMarketingInfo(value);
    }
    // 필수동의항목 체크 확인
    const essentialOptionCheck = (): boolean => {
        return checkEssential(serviceUse && pInfoCollection && pInfoProvide)
    };

    // 전체 항목 체크 확인
    const entireOptionCheck = (): boolean => {
        return checkEssential(serviceUse && pInfoCollection && pInfoProvide && marketingInfo)
    };
    
    React.useEffect(()=>{
        if(!entireOptionCheck()){
            setAgreeAll(false)
        }
    },[serviceUse,pInfoCollection,pInfoProvide,marketingInfo])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                {Platform.OS == 'android' ? (
                    <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                ) : null}
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name="close" style={styles.closeIcon}></Icon>
                </TouchableOpacity>
                <Divider height={'5%'} color="white" />

                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.bigTextStyle}>약관동의</Text>
                </View>

                <Divider height="30%" color="white" />

                <TouchableOpacity
                    style={styles.checkContainer}
                    onPress={() => setEntireState(!agreeAll)}>
                    <View
                        style={[
                            styles.allCheckButton,
                            {backgroundColor: entireOptionCheck() ? MAIN_COLOR : '#d5d5d5'},
                        ]}>
                        <Icon name="checkmark" style={styles.allCheck} />
                    </View>
                    <View>
                        <Text style={styles.allTextStyle}> 모두 확인, 동의합니다.</Text>
                    </View>
                </TouchableOpacity>

                <Divider
                    height={2}
                    color="#ededed"
                    style={{marginTop: 20, marginBottom: 30}}></Divider>

                <AgreementList
                    text="서비스 이용약관 (필수)"
                    state={serviceUse}
                    onPress={setServiceUse}></AgreementList>
                <AgreementList
                    text="개인정보 수집 이용동의 (필수)"
                    state={pInfoCollection}
                    onPress={setPInfoCollection}></AgreementList>
                <AgreementList
                    text="개인정보 제3자 제공 동의 (필수)"
                    state={pInfoProvide}
                    onPress={setPInfoProvide}></AgreementList>
                <AgreementList
                    text="마케팅 정보 수신 동의 (선택)"
                    state={marketingInfo}
                    onPress={setMarketingInfo}></AgreementList>

                <Divider height="5%" color="white" />

                <Button
                    text={'확인'}
                    textColor={!essentialOptionCheck() ? '#707070' : '#FFFFFF'}
                    style={{
                        backgroundColor: essentialOptionCheck() ? MAIN_COLOR : '#ededed',
                    }}
                    onPress={() => props.navigation.navigate('LoginSplash')}
                    disable={!essentialOptionCheck()}
                />
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
        marginHorizontal: GLOBAL_MARGIN_HORIZON,
    },
    closeIcon: {
        fontSize: 30,
        color: '#111111',
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
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
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
    checkButton: {
        height: SIZE_HEIGHT * 0.04,
        width: SIZE_HEIGHT * 0.04,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    check: {
        fontSize: 30,
        color: '#d5d5d5',
        fontWeight: 'bold',
    },
    textStyle: {
        fontFamily: 'Pretendard',
        fontSize: 17,
        color: '#707070',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
});
