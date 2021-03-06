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
import { NurseryCaution } from './NurseryCaution';

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
    console.log('nurseryCaution2 : ' ,props.route.params)


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <TouchableOpacity
                    onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}>
                    <Icon name="arrow-back" style={styles.iconStyle}></Icon>
                </TouchableOpacity>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextStyle}>????????? ????????????</Text>
                </View>
                <ScrollView
                    style={{marginTop: SIZE_HEIGHT * 0.02}}
                    showsVerticalScrollIndicator={false}>

                    <VanishTextInput 
                    headerText={'???????????? ???'} 
                    placeholder={'ex) ???????????? ??? ??? ???????????? ??? ??? ????????????'}
                    value={pill}
                    setValue={setPill}
                    ></VanishTextInput>
                    
                    <VanishTextInput 
                    headerText={'?????? ?????? ??? ????????? ??????'} 
                    placeholder={'ex) ?????? ????????? ?????? ?????? ???????????? ????????? ??????'}
                    value={diaper}
                    setValue={setDiaper}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'????????????'} 
                    placeholder={'ex) ????????? ??????????????? ?????????! ????????? ?????????'}
                    value={allergy}
                    setValue={setAlergy}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'?????? ??????'} 
                    placeholder={'ex) ????????? ????????? ?????? ????????? ????????? ????????????'}
                    value={seizure}
                    setValue={setSeizure}
                    ></VanishTextInput>

                    <VanishTextInput 
                    headerText={'??????'} 
                    placeholder={'ex) ????????? ??? ????????? ????????? ????????? ????????????'}
                    textInputStyle={styles.textBox}
                    value={etc}
                    setValue={setEtc}
                    ></VanishTextInput>


                    <Button
                        text={'????????????'}
                        textColor={checkEssential(pill,diaper,allergy,seizure,etc) ? 'white' : '#707070'}
                        style={{
                            backgroundColor: checkEssential(pill,diaper,allergy,seizure,etc) ? MAIN_COLOR : '#ededed',
                            marginTop : SIZE_HEIGHT * 0.1
                        }}
                        onPress={() => 
                            props.navigation.navigate('ChildTendency', {
                                ...props.route.params,
                                ...{ pill , diaper , allergy , seizure , etc }
                            })
                        }
                    ></Button>
                    <TouchableOpacity 
                    style={styles.underlineTextContainer} 
                    onPress={() =>
                        props.navigation.navigate('ChildTendency', {
                                ...props.route.params,
                                ...{ pill : undefined , diaper : undefined , allergy : undefined , seizure : undefined , etc : undefined }
                        })}>
                        <Text style={styles.underlineTextStyle}>????????????</Text>
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
