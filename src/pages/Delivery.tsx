import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complete from './Complete';
import Ing from './Ing';

export default function Delivery() {
  const Stack = createNativeStackNavigator();

  // 완료 처리 화면이 지도 위에 쌓이도록 하기 위함
  return (
    <Stack.Navigator initialRouteName={'Ing'}>
      <Stack.Screen
        name={'Ing'}
        component={Ing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Complete'}
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
