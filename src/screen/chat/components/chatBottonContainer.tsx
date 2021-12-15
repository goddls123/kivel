import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import ChatBottomMenu from './chatBottomMenu';
import {ChatInput} from './chatInput';

interface chatBootomContainer {
  toggleMenu(): any;
  isMenuOn: boolean;
  setBottonMenu(flag: boolean): void;
  toggleScheduleVisible(): void;
}
export default function ChatBottonContainer(props: chatBootomContainer) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ChatInput
        toggleMenu={props.toggleMenu}
        isMenuOn={props.isMenuOn}
        setBottonMenu={props.setBottonMenu}
        toggleScheduleVisible={props.toggleScheduleVisible}
      />
      {props.isMenuOn ? (
        <ChatBottomMenu toggleScheduleVisible={props.toggleScheduleVisible} />
      ) : null}
    </KeyboardAvoidingView>
  );
}
