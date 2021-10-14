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
import { checkEssential } from '../common/service/check';
import { RouteProp } from '@react-navigation/native';
import { essentialChildInfo, nurseryCaution } from '../../types/childInfoTypes';

interface NurseryCaution2Props {
    navigation: StackNavigationProp<stackInterface, 'NurseryCaution2'>;
    route: RouteProp<stackInterface, 'NurseryCaution2'>;
}

export function NurseryCaution2(props: NurseryCaution2Props) {
    const [pill, setPill] = React.useState<string>()
    const [diaper, setDiaper] = React.useState<string>()
    const [allergy, setAlergy] = React.useState<string>()
    const [seizure, setSeizure] = React.useState<string>()
    const [etc, setEtc] = React.useState<string>()

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
                    value={pill}
                    setValue={setPill}
                    ></VanishTextInput>
                    
                    <VanishTextInput 
                    headerText={'배변 활동 시 필요한 도움'} 
                    placeholder={'ex) 배변 활동시 계속 배를 쓰다듬어 주어야 해요'}
                    value={diaper}
                    setValue={setDiaper}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'알레르기'} 
                    placeholder={'ex) 갑각류 알레르기가 있어요! 조심해 주세요'}
                    value={allergy}
                    setValue={setAlergy}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'경기 유무'} 
                    placeholder={'ex) 초록색 물건을 보면 울면서 경기를 일으켜요'}
                    value={seizure}
                    setValue={setSeizure}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'기타'} 
                    placeholder={'ex) 아이가 큰 소리에 굉장히 민감한 편이에요'}
                    textInputStyle={styles.textBox}
                    value={etc}
                    setValue={setEtc}
                    ></VanishTextInput>


                    <Button
                        text={'다음으로'}
                        textColor={checkEssential(pill,diaper,allergy,seizure,etc) ? 'white' : '#707070'}
                        style={{
                            backgroundColor: checkEssential(pill,diaper,allergy,seizure,etc) ? MAIN_COLOR : '#ededed',
                            marginTop : SIZE_HEIGHT * 0.1
                        }}
                        onPress={() => {
                            if(props.route.params){
                            const prevPageState : (essentialChildInfo & nurseryCaution) = props.route.params
                            props.navigation.navigate('ChildTendency', {
                                ...prevPageState,
                                pill : pill,
                                diaper : diaper,
                                allergy : allergy,
                                seizure : seizure,
                                etc : etc,
                            })
                        }}}
                    ></Button>
                    <TouchableOpacity style={styles.underlineTextContainer} onPress={() => {props.navigation.navigate('ChildTendency')}}>
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
