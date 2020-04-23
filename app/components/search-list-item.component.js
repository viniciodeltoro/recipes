import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class SearchListItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.item.image}
          resizeMode="cover"/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.subTitle}>{this.props.item.from}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 5
  },
  textContainer: {
    width: '100%'
  },
  title:{
    fontFamily: 'Nunito',
    color: '#FFFFFF',
    fontSize:17
  },
  subTitle:{
    fontFamily: 'Nunito',
    color: '#FFFFFF',
    fontSize:15
  }
});