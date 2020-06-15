import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

export default class SearchTextInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputIsFocused: false
    };
    this.onTextInputFocus = this.onTextInputFocus.bind(this);
    this.onTextInputBlur = this.onTextInputBlur.bind(this);
  }

  onTextInputFocus(){
    console.log('Text input is focused');
    this.setState({
      inputIsFocused: true
    });
  }

  onTextInputBlur(){
    console.log('Text input is blurred');
    this.setState({
      inputIsFocused:false 
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.searchInput}
          placeholderTextColor={UiColors.dark.inputText}
          onFocus={this.onTextInputFocus}
          onBlur={this.onTextInputBlur}
          placeholder="Search"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'transparent',
    height: UiSizes[Platform.OS].searchInputContainerHeight,
    paddingVertical: UiSizes[Platform.OS].searchInputContainerPadding
  },
  searchInput:{
    flex: 1, 
    backgroundColor: UiColors.dark.inputBackground,
    color: UiColors.dark.hightEmphasis,
    borderWidth: 0,
    fontFamily: 'Nunito-Regular',
    fontSize: UiSizes[Platform.OS].searchInputFontSize,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    ...Platform.select({
      ios: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      android: {
        paddingLeft: 5,
        paddingRight: 5,
      }
    })    
  },
});