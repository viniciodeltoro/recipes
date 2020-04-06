import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  Animated
} from 'react-native';
import SearchListItem from '../components/search-list-item.component';

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#031214',
    paddingTop: Platform.OS === 'ios' ? 40: 0,
    paddingLeft: 20,
    paddingRight:20,
    flex: 1
  },
  header:{
    height: 50,
    backgroundColor: '#031214',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1
  },
  movingContainer:{
    //height: 105,
    backgroundColor:'transparent'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  smallTitle:{
    fontSize: 20,
    color: '#FFFFFF',
  },
  smallTitleContainer:{
    opacity: 1
  },
  searchInput:{
    borderColor: '#394a4d',
    backgroundColor: '#394a4d',
    color: '#FFFFFF',
    borderWidth: 1,
    fontSize: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    ...Platform.select({
      ios: {
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        marginBottom: 20,
      },
      android: {
        height: 45,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 15,
        marginBottom: 15,
      }
    })    
  },
  resultListContainer:{
    backgroundColor: 'transparent',
    flex: 1
  },
  flatlist:{
    flex: 1
  }
});

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exampleData: []
    };
    this.scrollY = new Animated.Value(0);
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
        <StatusBar barStyle="light-content" backgroundColor="#031214"/>
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
                inputRange: [-50, 0, 50, 100],
                outputRange: [0, 0, -50, -50]
              })
            }],
            /*height: this.scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [105, 105, 55, 55]
            })*/
          }]
        }>
          <Text style={styles.title}>Browse</Text>
          <TextInput style={styles.searchInput}
            placeholderTextColor="#9bacb6"
            placeholder="Search recipes"/>
        </Animated.View>
        <View style={styles.resultListContainer}>
        <Animated.FlatList data={this.state.exampleData}
          style={styles.flatlist}
          renderItem={({item}) => <SearchListItem item={item}/>}
          keyExtractor={(item, index) => item.id.toString()}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.scrollY
                }
              }
            }
            ], { useNativeDriver: true }
          )}
          scrollEventThrottle={1}/>
        </View>
     </View>    
    );
  }
}
