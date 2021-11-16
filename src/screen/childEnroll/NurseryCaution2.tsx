import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import {stackInterface} from '../../types/navigationParam';
import {
    GLOBAL_MARGIN_HORIZON,
    GLOBAL_MARGIN_VERTICAL,
    MAIN_COLOR,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../common/constants';
import {Divider} from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderView} from './components/SliderView';
import {Button} from '../common/components/Button';
import {VanishTextInput} from './components/VanishTextInput';
import { RouteProp } from '@react-navigation/native';
import { essentialChildInfo, nurseryCaution } from '../../types/childInfoTypes';
import { NurseryCaution } from './NurseryCaution';
import { childInfo } from '../../types/types';
import { createIconSetFromFontello } from 'react-native-vector-icons';

interface NurseryCaution2Props {
    navigation: StackNavigationProp<stackInterface, 'NurseryCaution2'>;
    route: RouteProp<stackInterface, 'NurseryCaution2'>;
}

export function NurseryCaution2(props: NurseryCaution2Props) {
    const [childInfo, setChildInfo] = React.useState<childInfo>({...props.route.params})
    console.log(childInfo)
    
    const setPill = (value : string) => {
        setChildInfo({...childInfo, pill : value})
    }
    const setDiaper = (value : string) => {
        setChildInfo({...childInfo, diaper : value})
    }
    const setAlergy = (value : string) => {
        setChildInfo({...childInfo, allergy : value})
    }
    const setSeizure = (value : string) => {
        setChildInfo({...childInfo, seizure : value})
    }
    const setEtc = (value : string) => {
        setChildInfo({...childInfo, etc : value})
    }
    const checkEssential = () => {
        if(childInfo.pill && childInfo.diaper && childInfo.allergy && childInfo.seizure && childInfo.etc){
            return true
        }
        return false
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <TouchableOpacity
                    onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}>
                    <Icon name="arrow-back" style={styles.iconStyle}></Icon>
                </TouchableOpacity>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextStyle}>보육시 주의사항</Text>
                </View>
                <ScrollView
                    style={{marginTop: SIZE_HEIGHT * 0.02}}
                    showsVerticalScrollIndicator={false}>

                    <VanishTextInput 
                    headerText={'복용중인 약'} 
                    placeholder={'ex) 점심식사 직 후 항생제를 한 알 복용해요'}
                    value={childInfo.pill}
                    setValue={setPill}
                    ></VanishTextInput>
                    
                    <VanishTextInput 
                    headerText={'배변 활동 시 필요한 도움'} 
                    placeholder={'ex) 배변 활동시 계속 배를 쓰다듬어 주어야 해요'}
                    value={childInfo.diaper}
                    setValue={setDiaper}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'알레르기'} 
                    placeholder={'ex) 갑각류 알레르기가 있어요! 조심해 주세요'}
                    value={childInfo.allergy}
                    setValue={setAlergy}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'경기 유무'} 
                    placeholder={'ex) 초록색 물건을 보면 울면서 경기를 일으켜요'}
                    value={childInfo.seizure}
                    setValue={setSeizure}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'기타'} 
                    placeholder={'ex) 아이가 큰 소리에 굉장히 민감한 편이에요'}
                    textInputStyle={styles.textBox}
                    value={childInfo.etc}
                    setValue={setEtc}
                    ></VanishTextInput>


                    <Button
                        text={'다음으로'}
                        textColor={checkEssential() ? 'white' : '#707070'}
                        style={{
                            backgroundColor: checkEssential() ? MAIN_COLOR : '#ededed',
                            marginTop : SIZE_HEIGHT * 0.1
                        }}
                        disable={!checkEssential()}
                        onPress={() => props.navigation.navigate('ChildTendency', { ...childInfo }) }
                    ></Button>
                    <TouchableOpacity 
                    style={styles.underlineTextContainer} 
                    onPress={() =>
                        props.navigation.navigate('ChildTendency', {
                                ...props.route.params,
                                ...{ pill : undefined , diaper : undefined , allergy : undefined , seizure : undefined , etc : undefined }
                        })}>
                        <Text style={styles.underlineTextStyle}>건너뛰기</Text>
                    </TouchableOpacity>
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
    iconStyle : {fontSize : 30, color : "#111111"},
    headerTextContainer : {
        marginTop: SIZE_HEIGHT * 0.03,
        marginBottom: GLOBAL_MARGIN_VERTICAL,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111111',
    },
    textBox : {
        borderColor : '#ededed',
        borderWidth : 1,
        height : SIZE_HEIGHT * 0.1,
        textAlignVertical : 'top'
    },
    underlineTextContainer : {
        marginBottom : GLOBAL_MARGIN_VERTICAL
    },
    underlineTextStyle : {
        textAlign : 'center',
        textDecorationLine : 'underline',
        color : "#aaaaaa"
    }
});
