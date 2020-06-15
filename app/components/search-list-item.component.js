import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class SearchListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFavorite: this.props.item.isFavorite
    };
  }

  render(){
    const isFirstItem = this.props.index === 0;
    const isLastItem = this.props.index + 1 === this.props.length;

    const enable = () => {
      console.log('pressed enable');
      this.setState({
        isFavorite:true 
      });
    }

    const disable = () => {
      console.log('pressed disable');
      this.setState({
        isFavorite:false 
      });
    }

    return(
      <View>
        {isFirstItem
          ? <View style={{height: this.props.listPadding}}></View>
          : 
          <View style={styles.container}>
            <Image style={styles.image} source={this.props.item.image}
              resizeMode="cover"/>

            <View style={styles.footerContainer}>
                <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.subTitle}>{this.props.item.description}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    {this.state.isFavorite
                    ?
                    <TouchableOpacity onPress={disable}>
                      <FAIcon name="heart" size={28}
                        color={UiColors.dark.hightEmphasis}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={enable}>
                      <FAIcon name="heart-o" size={28}
                        color={UiColors.dark.disabled}/>
                    </TouchableOpacity>
                    }
                  </View>
                </View>
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
    width: '100%',
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
  },
  image: {
    height: 214,
    width: '100%',
  },
  footerContainer:{
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10
  },
  contentContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1
  },
  iconContainer:{
    height:'100%',
    width:28, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontFamily: 'Nunito-Regular',
    color: UiColors.dark.hightEmphasis,
    fontSize:17
  },
  subTitle:{
    fontFamily: 'Nunito-Regular',
    color: UiColors.dark.mediumEmphasis,
    fontSize:15
  }
});