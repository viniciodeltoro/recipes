import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class SearchListItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const isFirstItem = this.props.index === 0;
    const isLastItem = this.props.index + 1 === this.props.length;
    return(
      <View>
        {isFirstItem
          ? <View style={{height: this.props.listPadding}}></View>
          : 
          <View style={styles.container}>
            <Image style={styles.image} source={this.props.item.image}
              resizeMode="cover"/>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.subTitle}>{this.props.item.from}</Text>
            </View>
          </View>
        }
        {!isFirstItem && !isLastItem && <View style={{height:30}}></View>}
      </View>
    );
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
    fontFamily: 'Nunito-Regular',
    color: '#FFFFFF',
    fontSize:17
  },
  subTitle:{
    fontFamily: 'Nunito-Regular',
    color: '#FFFFFF',
    fontSize:15
  }
});