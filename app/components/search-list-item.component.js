import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SearchListItem extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.title.substring(0, 20)}</Text>
        <Text style={styles.description}>{this.props.item.body.substring(0, 20)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:60,
    marginTop:5,
    marginBottom:5,
    borderBottomColor: '#394a4d',
    borderBottomWidth: 0.5
  },
  title:{
    color: '#FFFFFF',
    fontSize:20
  },
  description: {
    color: '#394a4d',
    fontSize:15
  }
});