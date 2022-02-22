import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

// 화면에 나타나는 조건이 다르므로 별도로 분리
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function App() {
  // 로그인 상태는 리덕스에서 관리 (앱 전역에 사용되는 상태 이므로)

  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
