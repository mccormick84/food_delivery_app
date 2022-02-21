import React, {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

export default function Settings() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <Pressable onPress={onPress} style={styles.block}>
      <Text style={styles.text}>{count}</Text>
    </Pressable>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
