import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const headerHeight = UiSizes[Platform.OS].navBarHeight;

const styles = StyleSheet.create({
  background: {
    backgroundColor: UiColors.dark.base,
    flex: 1,
  },
  presentationCard: {
    width: '100%',
    height: 270,
    backgroundColor: 'orange',
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
    height: 270,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: UiSizes[Platform.OS].pageSidePadding,
    paddingTop: UiSizes[Platform.OS].statusBarHeight,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: headerHeight,
    flexDirection: 'row',
  },
  backContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleContainer: {
    width: '100%',
    height: 52,
  },
  title: {
    fontSize: UiSizes[Platform.OS].largeTitleFontSize,
    fontFamily: 'Nunito-Bold',
    color: UiColors.dark.title,
  },
});

const VendorMenu = props => {
  return (
    <View style={styles.background}>
      <View style={styles.presentationCard}>
        <Image
          style={styles.image}
          source={props.route.params.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#FFFFFF00', UiColors.dark.base]}
          style={styles.linearGradient}>
          <View style={styles.cardContent}>
            <View style={styles.header}>
              <View style={styles.backContainer}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                  <FAIcon
                    name="chevron-left"
                    size={28}
                    color={UiColors.dark.hightEmphasis}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.menuIconContainer}>
                <TouchableOpacity>
                  <FAIcon
                    name="ellipsis-h"
                    size={28}
                    color={UiColors.dark.hightEmphasis}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.route.params.title}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default VendorMenu;
