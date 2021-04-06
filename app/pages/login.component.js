import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react';
import {AppStateContext} from '../states/app.state.context';
import {saveData, loginRequest} from '../services/session.service';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {UiSizes} from '../helpers/ui-sizes';
import {UiColors} from '../helpers/ui-colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: UiColors.dark.bars,
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    backgroundColor: UiColors.dark.primary,
    width: 40,
    height: 40,
    marginTop: 30,
    marginBottom: 30,
  },
  username: {
    padding: 5,
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  searchInput: {
    height: UiSizes[Platform.OS].searchInputContainerHeight,
    width: '90%',
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
    marginBottom: 30,
  },
});

const Login = observer(() => {
  const appState = useContext(AppStateContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      const response = await loginRequest(username, password);
      const sessionData = {
        ...response.data.session,
        id: response.data.session._id,
        token: response.data.token,
      };
      const userData = {
        ...response.data.user,
        id: response.data.user._id,
      };
      saveData(sessionData, 'session');
      saveData(userData, 'user');
      appState.setSession(sessionData);
      appState.setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.logo} />
      <Text style={styles.username}>{appState.getSession.sessionUsername}</Text>
      <TextInput
        name="username"
        style={styles.searchInput}
        textContentType="username"
        placeholderTextColor={UiColors.dark.inputText}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        name="password"
        style={styles.searchInput}
        textContentType="password"
        secureTextEntry={true}
        placeholderTextColor={UiColors.dark.inputText}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />
      <Button
        onPress={onSubmit}
        title="Log in"
        color="#841584"
        accessibilityLabel="Log in with your username and password"
      />
    </View>
  );
});

export default Login;
