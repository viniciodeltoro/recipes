import React from 'react';
import {View, Platform, StyleSheet, Text, Animated} from 'react-native';
import SearchListItem from '../components/search-list-item.component';
import SearchTextInput from '../components/search-text-input.component';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

const largeTitleBarHeight = UiSizes[Platform.OS].largeTitleBarHeight;
const headerHeight =
  UiSizes[Platform.OS].navBarHeight + UiSizes[Platform.OS].statusBarHeight;
const movingContainerHeight =
  UiSizes[Platform.OS].searchInputContainerHeight + largeTitleBarHeight;
const flatListPaddingTop = movingContainerHeight + headerHeight;

const exampleData = [
  {id: 0, title: '', from: '', isFavorite: false, image: undefined},
  {
    id: 1,
    title: 'Antojitos Don Juan',
    description: 'Antojitos mexicanos y bebidas',
    isFavorite: false,
    image: require('../assets/images/tamales.jpg'),
  },
  {
    id: 2,
    title: 'Tacos al pastor',
    description: 'Tacolandia',
    isFavorite: false,
    image: require('../assets/images/tacos.jpg'),
  },
  {
    id: 3,
    title: 'Pizza hawaiiana',
    description: 'La pizzeria',
    isFavorite: false,
    image: require('../assets/images/pizza.jpg'),
  },
  {
    id: 4,
    title: 'Churros con chocolate',
    description: 'Churreria',
    isFavorite: false,
    image: require('../assets/images/churros.jpg'),
  },
  {
    id: 5,
    title: 'Champurrado',
    description: 'Churreria',
    isFavorite: false,
    image: require('../assets/images/champurrado.jpg'),
  },
];

const styles = StyleSheet.create({
  background: {
    backgroundColor: UiColors.dark.base,
    flex: 1,
  },
  header: {
    position: 'absolute',
    paddingTop: UiSizes[Platform.OS].statusBarHeight,
    height: headerHeight,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: UiColors.dark.bars,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  movingContainer: {
    position: 'absolute',
    height: movingContainerHeight + 1,
    left: 0,
    right: 0,
    top: headerHeight,
    zIndex: 2,
    paddingHorizontal: UiSizes[Platform.OS].searchInputContainerPadding,
    backgroundColor: UiColors.dark.bars,
    borderBottomWidth: 0.7,
    borderColor: UiColors.dark.line,
  },
  title: {
    fontSize: UiSizes[Platform.OS].largeTitleFontSize,
    fontFamily: 'Nunito-Bold',
    color: UiColors.dark.title,
  },
  smallTitle: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: UiSizes[Platform.OS].navBarFontSize,
    color: UiColors.dark.title,
  },
  smallTitleContainer: {
    opacity: 1,
  },
  flatlist: {
    flex: 1,
  },
});

const Search = props => {
  const scrollY = new Animated.Value(0);
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Animated.View
          style={[
            styles.smallTitleContainer,
            {
              opacity: scrollY.interpolate({
                inputRange: [-50, 0, 50, 100],
                outputRange: [0, 0, 1, 1],
              }),
            },
          ]}>
          <Text style={styles.smallTitle}>Browse</Text>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.movingContainer,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [
                    -largeTitleBarHeight,
                    0,
                    largeTitleBarHeight,
                    100,
                  ],
                  outputRange: [
                    0,
                    0,
                    -largeTitleBarHeight,
                    -largeTitleBarHeight,
                  ],
                }),
              },
            ],
          },
        ]}>
        <View style={{height: UiSizes[Platform.OS].largeTitleBarHeight}}>
          <Text style={styles.title}>Browse</Text>
        </View>
        <SearchTextInput />
      </Animated.View>
      <Animated.FlatList
        data={exampleData}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => (
          <SearchListItem
            item={item}
            index={index}
            length={exampleData.length}
            navigation={props.navigation}
            listPadding={flatListPaddingTop}
          />
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default Search;

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