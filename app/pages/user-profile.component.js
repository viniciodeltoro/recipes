import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import ItemSeparator from '../components/item-separator.component';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import {AppStateContext} from '../states/app.state.context';
import {observer} from 'mobx-react';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#031214',
    flex: 1,
  },
  banner: {
    backgroundColor: 'grey',
    height: 125,
    width: '100%',
    marginBottom: 185,
  },
  profilePhotoContainer: {
    position: 'absolute',
    height: 200,
    left: 0,
    right: 0,
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  photo: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: 'white',
    borderColor: '#031214',
    borderWidth: 3,
  },
  name: {
    padding: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  username: {
    padding: 5,
    fontSize: 18,
    color: 'white',
  },
  actionElement: {
    height: 55,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },
  actionElementText: {
    fontSize: 18,
    color: 'white',
  },
});

const UserProfile = observer(() => {
  const appState = useContext(AppStateContext);
  return (
    <View style={styles.background}>
      <Image
        style={styles.banner}
        source={require('../assets/images/london-eye.jpg')}
        resizeMode="cover"
      />
      <View style={styles.profilePhotoContainer}>
        <Image
          style={styles.photo}
          source={require('../assets/images/me.jpg')}
        />
        <Text style={styles.name}>{appState.getUser.user.name}</Text>
        <Text style={styles.username}>{appState.getUser.user.username}</Text>
      </View>
      <View>
        <ItemSeparator />
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.actionElement}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flex: 1,
            }}>
            <Text style={styles.actionElementText}>Saved items</Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <FAIcon name={'heart'} size={24} color={'#ffffff'} />
          </View>
        </TouchableOpacity>
        <ItemSeparator />
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.actionElement}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flex: 1,
            }}>
            <Text style={styles.actionElementText}>My purchases</Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <FAIcon name={'dollar'} size={24} color={'#ffffff'} />
          </View>
        </TouchableOpacity>
        <ItemSeparator />
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.actionElement}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flex: 1,
            }}>
            <Text style={styles.actionElementText}>Account settings</Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <OctIcon name={'gear'} size={24} color={'#ffffff'} />
          </View>
        </TouchableOpacity>
        <ItemSeparator />
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.actionElement}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flex: 1,
            }}>
            <Text style={styles.actionElementText}>Help</Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <FAIcon name={'question'} size={24} color={'#ffffff'} />
          </View>
        </TouchableOpacity>
        <ItemSeparator />
      </View>
    </View>
  );
});

export default UserProfile;
