import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UiSizes} from '../helpers/ui-sizes';

const totalTabBarHeight = UiSizes[Platform.OS].tabBarHeight +
  UiSizes[Platform.OS].homeIndicatorHeight;

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#031214',
    paddingBottom: UiSizes[Platform.OS].homeIndicatorHeight,
    height: totalTabBarHeight,
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
    const getIcon = (label, isFocused) =>{
      if(label === 'Search' || label === 'User'){
        return <FAIcon name={label.toLowerCase()}
        size={UiSizes[Platform.OS].tabBarIconHeight}
        color={isFocused ? '#ffffff' : '#666666'}/>
      } else{
        return <MCIcon name={label.toLowerCase()}
        size={UiSizes[Platform.OS].tabBarIconHeight}
        color={isFocused ? '#ffffff' : '#666666'}/>
      }
    }

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
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconContainer}>
            
            {getIcon(label, isFocused)}
          </TouchableOpacity>  
        );
      })}
    </View>      
    );
  }
}