import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

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
        <View style={styles.iconContainer}>
          <FAIcon name="search" size={16} color={UiColors.dark.inputText}/>
        </View>
        <TextInput style={styles.searchInput}
          placeholderTextColor={UiColors.dark.inputText}
          onFocus={this.onTextInputFocus}
          onBlur={this.onTextInputBlur}
          placeholder="Search"/>
        <View style={styles.cancelContainer}>
          <View style={styles.inputRightPadding}></View>
          <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'transparent',
    height: UiSizes[Platform.OS].searchInputContainerHeight,
    width: '100%',
    paddingVertical: UiSizes[Platform.OS].searchInputContainerPadding,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  iconContainer: {
    height: '100%',
    width: 35,
    backgroundColor: UiColors.dark.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  searchInput:{
    flex: 1, 
    height: '100%',
    backgroundColor: UiColors.dark.inputBackground,
    color: UiColors.dark.hightEmphasis,
    borderWidth: 0,
    fontFamily: 'Nunito-Regular',
    fontSize: UiSizes[Platform.OS].searchInputFontSize,
    ...Platform.select({
      ios: {
        paddingRight: 10,
      },
      android: {
        paddingRight: 5,
      }
    })    
  },
  cancelContainer: {
    height: '100%',
    width: 100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: UiColors.dark.bars
  },
  inputRightPadding: {
    height: '100%',
    width: 30,
    backgroundColor: UiColors.dark.inputBackground,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginRight: UiSizes[Platform.OS].searchInputContainerPadding
  },
  cancelText: {
    fontFamily: 'Nunito-Regular',
    fontSize: UiSizes[Platform.OS].searchInputFontSize,
    color: UiColors.dark.primary
  }
});