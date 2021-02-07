import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
  },
  image: {
    height: 214,
    width: '100%',
  },
  footerContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    height: '100%',
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito-Regular',
    color: UiColors.dark.hightEmphasis,
    fontSize: 17,
  },
  subTitle: {
    fontFamily: 'Nunito-Regular',
    color: UiColors.dark.mediumEmphasis,
    fontSize: 15,
  },
});

const SearchListItem = props => {
  const [isFavorite, setIsFavorite] = useState(props.item.isFavorite);
  const isFirstItem = props.index === 0;
  const isLastItem = props.index + 1 === props.length;

  const goToMenu = () => {
    props.navigation.push('VendorMenu', {...props.item});
  };
  return (
    <View>
      {isFirstItem ? (
        <View style={{height: props.listPadding}} />
      ) : (
        <TouchableOpacity onPress={goToMenu}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={props.item.image}
              resizeMode="cover"
            />
            <View style={styles.footerContainer}>
              <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{props.item.title}</Text>
                  <Text style={styles.subTitle}>{props.item.description}</Text>
                </View>
                <View style={styles.iconContainer}>
                  {isFavorite ? (
                    <TouchableOpacity onPress={() => setIsFavorite(false)}>
                      <FAIcon
                        name="heart"
                        size={28}
                        color={UiColors.dark.hightEmphasis}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setIsFavorite(true)}>
                      <FAIcon
                        name="heart-o"
                        size={28}
                        color={UiColors.dark.disabled}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {!isFirstItem && !isLastItem && <View style={{height:30}} />}
    </View>
  );
};

export default SearchListItem;
