import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  // Keyboard.dismiss 가상 키보드를 내림
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
      {/*behavior={Platform.OS === 'android' ? 'position' : 'padding'}*/}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
