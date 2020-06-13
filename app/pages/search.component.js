import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Animated
} from 'react-native';
import SearchListItem from '../components/search-list-item.component';
import SearchTextInput from '../components/search-text-input.component';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

const largeTitleBarHeight = UiSizes[Platform.OS].largeTitleBarHeight;
const headerHeight = UiSizes[Platform.OS].navBarHeight +
  UiSizes[Platform.OS].statusBarHeight;
const movingContainerHeight = UiSizes[Platform.OS].searchInputContainerHeight +
  largeTitleBarHeight;
const flatlistpaddingtop = movingContainerHeight + headerHeight;
 
const styles = StyleSheet.create({
  background:{
    backgroundColor: UiColors.dark.base,
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
    flex: 1
  },
  header:{
    position: 'absolute',
    paddingTop: UiSizes[Platform.OS].statusBarHeight,
    height: headerHeight,
    left:0,
    right: 0,
    top: 0,
    backgroundColor: UiColors.dark.bars,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:3
  },
  movingContainer:{
    position: 'absolute',
    height: movingContainerHeight,
    left:0,
    right: 0,
    top: headerHeight,
    zIndex:2,
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
    backgroundColor: UiColors.dark.bars,
    borderBottomWidth: 0.7,
    borderColor: UiColors.dark.line 
  },
  title:{
    fontSize: UiSizes[Platform.OS].largeTitleFontSize,
    fontFamily: 'Nunito-Bold',
    color: UiColors.dark.title
  },
  smallTitle:{
    fontFamily: 'Nunito-SemiBold',
    fontSize: UiSizes[Platform.OS].navBarFontSize,
    color: UiColors.dark.title
  },
  smallTitleContainer:{
    opacity: 1
  },
  flatlist:{
    flex: 1
  }
});

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exampleData: [],
      flatlistHeight: 1
    };
    this.scrollY = new Animated.Value(0);
  }

  componentDidMount(){
    this.setState({
      exampleData: [
        {id:1, title: 'Tamales de elote (orden)', from: 'Antojitos Maria', price: 30,
          image: require('../assets/images/tamales.jpg')},
        {id:2, title: 'Tacos al pastor', from: 'Tacolandia', price: 30,
          image: require('../assets/images/tacos.jpg')},
        {id:3, title: 'Pizza hawaiiana', from: 'La pizzeria', price: 45,
          image: require('../assets/images/pizza.jpg')},
        {id:4, title: 'Churros con chocolate', from: 'Churreria', price: 30,
          image: require('../assets/images/churros.jpg')},
        {id:5, title: 'Champurrado', from: 'Churreria', price: 15,
          image: require('../assets/images/champurrado.jpg')},
      ]
    });
  }

  render(){
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Animated.View style={[styles.smallTitleContainer, {
            opacity: this.scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [0, 0, 1, 1]
            })
          }]}>
            <Text style={styles.smallTitle}>
              Browse
            </Text>
          </Animated.View>
        </View>
        <Animated.View style={
          [styles.movingContainer,{
            transform: [{ translateY:
              this.scrollY.interpolate({
                inputRange: [-largeTitleBarHeight, 0, largeTitleBarHeight, 100],
                outputRange: [0, 0, -largeTitleBarHeight, -largeTitleBarHeight]
              })
            }],
          }]}>
          <View style={{height: UiSizes[Platform.OS].largeTitleBarHeight}}>
            <Text style={styles.title}>Browse</Text>
          </View>
          <SearchTextInput></SearchTextInput>
        </Animated.View>
        <Animated.FlatList data={this.state.exampleData}
          style={{flex: 1}}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.scrollY
                }
              }
            }], { useNativeDriver: true }
          )}
          renderItem={({item, index}) =>
            <SearchListItem item={item} index={index}
              length={this.state.exampleData.length}
              listPadding={flatlistpaddingtop} />
          }
          keyExtractor={(item, index) => item.id.toString()}/>
      </View>    
    );
  }
}

  /*getData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        exampleData: json
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }*/