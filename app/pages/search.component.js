import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';
import Animated from "react-native-reanimated";
import SearchListItem from '../components/search-list-item.component';
import SearchTextInput from '../components/search-text-input.component';
import {UiSizes} from '../helpers/ui-sizes';

const { event, Value } = Animated;
const largeTitleBarHeight = UiSizes[Platform.OS].largeTitleBarHeight;
const flatListMarginTop = UiSizes[Platform.OS].navBarHeight +
  UiSizes[Platform.OS].statusBarHeight +
  UiSizes[Platform.OS].largeTitleBarHeight +
  UiSizes[Platform.OS].searchInputContainerHeight;
const scrolledFlatListMarginTop = UiSizes[Platform.OS].navBarHeight +
  UiSizes[Platform.OS].statusBarHeight +
  UiSizes[Platform.OS].searchInputContainerHeight;
 
const styles = StyleSheet.create({
  background:{
    backgroundColor: '#031214',
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
    flex: 1
  },
  header:{
    position: 'absolute',
    paddingTop: UiSizes[Platform.OS].statusBarHeight,
    height: UiSizes[Platform.OS].navBarHeight +
      UiSizes[Platform.OS].statusBarHeight,
    left:0,
    right: 0,
    top: 0,
    backgroundColor: '#031214',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:3
  },
  movingContainer:{
    position: 'absolute',
    height: UiSizes[Platform.OS].largeTitleBarHeight +
      UiSizes[Platform.OS].searchInputContainerHeight,
    left:0,
    right: 0,
    top: UiSizes[Platform.OS].navBarHeight +
      UiSizes[Platform.OS].statusBarHeight,
    zIndex:2,
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
    backgroundColor: '#031214'
  },
  title:{
    fontSize: UiSizes[Platform.OS].largeTitleFontSize,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  smallTitle:{
    fontSize: UiSizes[Platform.OS].navBarFontSize,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  smallTitleContainer:{
    opacity: 1
  },
  flatlist:{
    paddingTop: flatListMarginTop,
    flex: 1
  }
});

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exampleData: []
    };
    this.scrollY = new Value(0);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
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

        <Animated.View style={[styles.flatlist, {
          paddingTop: this.scrollY.interpolate({
            inputRange: [-largeTitleBarHeight, 0, largeTitleBarHeight, 100],
            outputRange: [flatListMarginTop, flatListMarginTop,
              scrolledFlatListMarginTop, scrolledFlatListMarginTop]
          })
        }]}>
          <FlatList data={this.state.exampleData}
            style={{flex: 1}}
            renderItem={({item}) => <SearchListItem item={item}/>}
            keyExtractor={(item, index) => item.id.toString()}
            renderScrollComponent={(props) => <Animated.ScrollView {...props}
              onScroll={event([
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.scrollY
                    }
                  }
                }], { useNativeDriver: true }
              )}
            />}
          />
        </Animated.View>
      </View>    
    );
  }
}
