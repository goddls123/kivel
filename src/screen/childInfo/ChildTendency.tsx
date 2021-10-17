import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Text,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {stackInterface} from '../../types/navigationParam';
import { Button } from '../common/components/Button';
import {
    GLOBAL_MARGIN_HORIZON,
    GLOBAL_MARGIN_VERTICAL,
    MAIN_COLOR,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../common/constants';
import {Divider} from '../common/divider';

interface ChildTendencyProps {
    navigation: StackNavigationProp<stackInterface, 'SocialLogin'>;
}

export function ChildTendency(props: ChildTendencyProps) {
    const [tendency, setTendency] = React.useState<string>()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
                <TouchableOpacity
                    onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}>
                    <Icon name="arrow-back" style={{fontSize: 30}}></Icon>
                </TouchableOpacity>

                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextStyle}>아이 성향</Text>
                </View>
                <Text style={styles.guideText}>
                    우리 아이는 어떤 성향을 가지고 있나요?
                </Text>
                <Text style={styles.guideText}>
                    치료사 선생님이 참고 할만한 내용을 자유롭게{' '}
                </Text>
                <Text style={styles.guideText}>기입 해 주세요!</Text>

                <TextInput
                    style={styles.textBoxStyle}
                    placeholder="ex) 낯을 많이가려요 / 친해지는데 시간이필요해요 / 정돈되지 않은 환경에 있으면 혼란스러워 해요 등등..."
                    placeholderTextColor="#d5d5d5"
                    value={tendency}
                    onChangeText={(text) => setTendency(text)}
                    multiline
                ></TextInput>

                <Button
                    text={'입력완료'}
                    textColor={tendency ? 'white' : '#707070'}
                    style={{
                        backgroundColor: tendency ? MAIN_COLOR : '#ededed',
                        marginTop : SIZE_HEIGHT * 0.1
                    }}
                    onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}
                ></Button>
                <TouchableOpacity style={styles.underlineTextContainer} onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}>
                    <Text style={styles.underlineTextStyle}>건너뛰기</Text>
                </TouchableOpacity>
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
    headerTextContainer: {
        marginTop: SIZE_HEIGHT * 0.03,
        marginBottom: GLOBAL_MARGIN_VERTICAL,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111111',
    },
    guideText: {
        fontSize: 17,
        color: '#707070',
    },
    textBoxStyle: {
        textAlignVertical: 'top',
        height: SIZE_HEIGHT * 0.4,
        borderWidth: 1,
        borderColor: '#ededed',
        marginTop: GLOBAL_MARGIN_VERTICAL,
    },
    underlineTextContainer : {
        marginBottom : GLOBAL_MARGIN_VERTICAL
    },
    underlineTextStyle : {
        textAlign : 'center',
        textDecorationLine : 'underline',
        color : "#d5d5d5"
    }
});
