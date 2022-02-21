import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

export default function Complete() {
  const [count, setCount] = useState(1);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}
