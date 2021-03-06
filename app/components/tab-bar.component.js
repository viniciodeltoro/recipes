import React from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

const totalTabBarHeight =
  UiSizes[Platform.OS].tabBarHeight + UiSizes[Platform.OS].homeIndicatorHeight;

const styles = StyleSheet.create({
  background: {
    backgroundColor: UiColors.dark.bars,
    paddingBottom: UiSizes[Platform.OS].homeIndicatorHeight,
    height: totalTabBarHeight,
    flexDirection: 'row',
    borderTopWidth: 0.7,
    borderColor: UiColors.dark.line,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const TabBar = props => {
  const getIcon = (label, isFocused) => {
    if (label === 'Search' || label === 'User') {
      return (
        <FAIcon
          name={label.toLowerCase()}
          size={UiSizes[Platform.OS].tabBarIconHeight}
          color={isFocused ? UiColors.dark.primary : UiColors.dark.disabledIcon}
        />
      );
    } else {
      return (
        <MCIcon
          name={label.toLowerCase()}
          size={UiSizes[Platform.OS].tabBarIconHeight}
          color={isFocused ? UiColors.dark.primary : UiColors.dark.disabledIcon}
        />
      );
    }
  };

  return (
    <View style={styles.background}>
      {props.state.routes.map((route, index) => {
        const {options} = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
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
};

export default TabBar;
