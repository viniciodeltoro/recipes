import React from 'react';
import { StyleSheet,View } from 'react-native';

const styles = StyleSheet.create({
  line:{
    borderBottomColor: '#394a4d',
    borderBottomWidth: 0.5,
    height: 1
  }
});

export default class ItemSeparator extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.line}></View>    
    );
  }
}