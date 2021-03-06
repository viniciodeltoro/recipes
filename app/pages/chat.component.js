import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  title: {
    fontSize: 20,
    color: '#000000',
  },
});

const Chat = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Chat page</Text>
    </View>
  );
};

export default Chat;
