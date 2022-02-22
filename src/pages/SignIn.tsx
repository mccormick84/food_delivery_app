import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import DismissKeyboardView from '../components/DismissKeyboardView';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignIn({navigation}: SignInScreenProps) {
  // const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요');
    }
    Alert.alert('로그인 완료');
  }, [email, password]);

  // 조건은 가능하면 변수로 해결 > 코드 가독성이 높아지고 주석 필요성 감소
  const canGoNext = email && password;

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <DismissKeyboardView>
      <View style={styles.inputWrapper}>
        <View>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            placeholder={'이메일을 입력해주세요'}
            value={email}
            onChangeText={onChangeEmail}
            style={styles.textInput}
            autoComplete={'email'}
            importantForAutofill={'yes'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }} // 입력 완료 시 포커스 이동 경로 지정
            ref={emailRef}
            blurOnSubmit={false} // 옮겨 갈 때 키보드 사라짐 여부
            clearButtonMode={'while-editing'} // ios 입력폼 내용 전체 삭제
          />
        </View>
        <View>
          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            placeholder={'비밀번호를 입력해주세요'}
            value={password}
            onChangeText={onChangePassword}
            style={styles.textInput}
            secureTextEntry
            autoComplete={'password'}
            importantForAutofill={'yes'}
            textContentType={'password'}
            ref={passwordRef}
            onSubmitEditing={onSubmit}
          />
        </View>
        <View style={styles.buttonZone}>
          <Pressable
            onPress={onSubmit}
            style={
              !canGoNext
                ? styles.loginButton
                : [styles.loginButton, styles.loginButtonActive]
              // 또는 Stylesheet.compose(styles.loginButton, styles.loginButtonActive)
            }
            disabled={!canGoNext}>
            <Text style={styles.loginButtonText}>로그인</Text>
          </Pressable>
          <Pressable onPress={toSignUp}>
            <Text>회원가입하기</Text>
          </Pressable>
        </View>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  loginButtonActive: {
    backgroundColor: '#1d66d6',
  },
  loginButtonText: {
    color: 'white',
  },
  buttonZone: {
    alignItems: 'center',
  },
});
