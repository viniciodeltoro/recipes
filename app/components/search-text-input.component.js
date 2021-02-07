import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');
const containerXPos =
  width - UiSizes[Platform.OS].searchInputContainerPadding * 2 - 10;

const SearchTextInput = () => {
  const [inputIsFocused, changeInputIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const onTextInputFocus = () => {
    changeInputIsFocused(true);
    Animated.timing(animation, {
      toValue: -67,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onTextInputBlur = () => {
    changeInputIsFocused(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onCancel = () => {
    Keyboard.dismiss();
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.cancelContainer,
          {transform: [{translateX: animation}]},
        ]}>
        <View style={styles.inputRightPadding} />
        <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FAIcon name="search" size={16} color={UiColors.dark.inputText} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={UiColors.dark.inputText}
          onFocus={onTextInputFocus}
          onBlur={onTextInputBlur}
          placeholder="Search"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    height: UiSizes[Platform.OS].searchInputContainerHeight,
    width: '100%',
    paddingVertical: UiSizes[Platform.OS].searchInputContainerPadding,
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 1,
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
  searchInput: {
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
      },
    }),
  },
  cancelContainer: {
    position: 'absolute',
    height: UiSizes[Platform.OS].searchInputContainerHeight,
    width: 85,
    top: 0,
    left: containerXPos,
    paddingVertical: UiSizes[Platform.OS].searchInputContainerPadding,
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 3,
    backgroundColor: UiColors.dark.bars,
  },
  inputRightPadding: {
    height: '100%',
    width: 10,
    backgroundColor: UiColors.dark.inputBackground,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginRight: UiSizes[Platform.OS].searchInputContainerPadding,
  },
  cancelText: {
    fontFamily: 'Nunito-Regular',
    fontSize: UiSizes[Platform.OS].searchInputFontSize,
    color: UiColors.dark.primary,
  },
});

export default SearchTextInput;
