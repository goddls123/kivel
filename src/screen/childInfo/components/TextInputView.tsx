import {valueFromAST} from 'graphql';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ViewStyle,
    TouchableOpacity,
    KeyboardTypeOptions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR} from '../../common/constants';
import {getDateYMD} from '../../common/service/dateService';

interface textInputViewProps {
    placeholder: string;
    style?: ViewStyle;
    icon?: string;
    unitText?: string;
    keyboardType?: KeyboardTypeOptions;
    onChangeText?(value: any): void;
    editable?: boolean;
    iconOnPress?(value: any): void;
    value?: string | Date;
    parseFloat? : boolean
}

export function TextInputView(props: textInputViewProps) {
    let value;
    if (typeof props.value == 'string') {
        value = props.value;
    } else if (typeof props.value == 'undefined') {
        value = undefined;
    } else {
        value = getDateYMD(props.value, '-');
    }

    function onChangeTextHandler(text : string) {
        console.log(text, props.parseFloat);
        if(props.parseFloat && props.onChangeText ){
            props.onChangeText(parseFloat(text))
        }
        else if (!props.parseFloat && props.onChangeText ){
            props.onChangeText(text);
        }
    }

    
    return (
        <View
            style={[
                {borderBottomWidth: 1, borderBottomColor: '#ededed'},
                props.style,
            ]}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <TextInput
                    placeholderTextColor={"#d5d5d5"}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                    onChangeText={text => onChangeTextHandler(text)}
                    editable={props.editable}
                    value={props.value ? value : undefined}
                    style={{color: 'black', flex: 1}}
                ></TextInput>

                {props.icon ? (
                    <TouchableOpacity
                        onPress={() =>
                            props.iconOnPress ? props.iconOnPress(true) : null
                        }>
                        <Icon name={props.icon} style={styles.icon}></Icon>
                    </TouchableOpacity>
                ) : null}
                {props.unitText ? (
                    <View>
                        <Text style={styles.unitText}>{props.unitText}</Text>
                    </View>
                ) : null}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        color: '#111111',
    },
    icon: {
        fontSize: 25,
        color: MAIN_COLOR,
    },
    unitText: {
        fontSize: 20,
        color: '#aaaaaa',
        fontWeight: 'bold',
    },
});
