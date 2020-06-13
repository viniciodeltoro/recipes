import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

export default class SearchTextInput extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.searchInput} placeholderTextColor={UiColors.dark.inputText}
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
    fontFamily: 'Nunito-Bold',
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