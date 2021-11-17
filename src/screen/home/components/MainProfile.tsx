import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    NativeSegmentedControlIOSChangeEvent,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import {FONT_COLOR_BLACK, SIZE_WIDTH} from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons'
import { childInfoHome } from '../../../types/types';

interface mainProfileProps {
    style: ViewStyle;
    data? : childInfoHome
    onPress(value : boolean) : void
}

export function MainProfile(props: mainProfileProps) {
    return (
        props.data 
        ?
        <View style={props.style}>
            {/* 헤더 텍스트 */}
            <TouchableOpacity style={styles.profileImage} onPress={() => props.onPress(true) }>
                <Image style={{height: SIZE_WIDTH * 0.22, width: SIZE_WIDTH * 0.22, borderRadius: props.data.imageURL ? 100 : 0 }}
                    source={
                        props.data.imageURL
                            ? {uri: props.data.imageURL}
                            : require('../../../assets/icons/ic_profile.png')
                    }
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.babyName}>
                    {props.data.name} {props.data.sex == 'W' ? <Icon style={styles.sexIcon} name='female-outline'></Icon> : <Icon style={styles.sexIcon} name='male-outline'></Icon>}{' '}
                </Text>
                <Text style={styles.birthDate}>{props.data.birthDate}</Text>
            </View>
        </View>
        : 
        <View style={props.style}>
            {/* 헤더 텍스트 */}
            <TouchableOpacity style={styles.profileImage} onPress={() => props.onPress(true) }>
                <Image style={{height: SIZE_WIDTH * 0.22, width: SIZE_WIDTH * 0.22 }} source={ require('../../../assets/icons/ic_profile.png') }/>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <Text style={styles.babyName}>
                        아이정보를 등록해주세요!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {},
    profileImage: {
        marginRight: 16,
    },
    profileText: {},
    babyName: {
        color: FONT_COLOR_BLACK,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    birthDate: {
        color: '#707070',
        fontSize: 12,
    },
    sexIcon : {
        fontSize :20,
        fontWeight : 'bold',
        color : 'black'
    }
});
