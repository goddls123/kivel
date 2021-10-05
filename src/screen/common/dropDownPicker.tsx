import React from 'react'
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface dropDownPickerProps {

}

export function dropDownPicker(props : dropDownPickerProps) {
        const [open, setOpen]   = React.useState(false);
        const [value, setValue] = React.useState(null);
        const [items, setItems] = React.useState([
            {label: 'Apple', value: 'apple'},
            {label: 'Banana', value: 'banana'}
        ]);

        return (
        <View>
            <DropDownPicker
                searchable={true}
                searchTextInputProps={{
                    maxLength: 25
                  }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
        );
}
const styles = StyleSheet.create({})