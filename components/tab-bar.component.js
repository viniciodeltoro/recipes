import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#031214',
    paddingBottom:20,
    height: 80,
    flexDirection: 'row'
  },
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default class TabBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.background}>
      {this.props.state.routes.map((route, index) => {
        const { options } = this.props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = this.props.state.index === index;

        const onPress = () => {
          const event = this.props.navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            this.props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          this.props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconContainer}
          >
            <Icon name={label === 'Search' ? 'search': 'user'} size={30}
              color={isFocused ? '#ffffff' : '#666666'}/>
          </TouchableOpacity>  
        );
      })}
    </View>      
    );
  }
}