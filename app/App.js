import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {observer} from 'mobx-react';
import {AppStateContext, appState} from './states/app.state.context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './pages/search.component';
import UserProfile from './pages/user-profile.component';
import Chat from './pages/chat.component';
import Login from './pages/login.component';
import VendorMenu from './pages/vendor-menu.component';
import TabBar from './components/tab-bar.component';
import {UiColors} from './helpers/ui-colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TheTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="User" component={UserProfile} />
    </Tab.Navigator>
  );
};

const Navigation = observer(() => {
  // eslint-disable-next-line no-shadow
  const apppState = useContext(AppStateContext);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="card">
        {apppState.getSession.session.id == null ? (
          <>
            <Stack.Screen name="LoginScreen" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="TabScreen" component={TheTabNavigation} />
            <Stack.Screen name="VendorMenu" component={VendorMenu} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

const App = () => {
  return (
    <AppStateContext.Provider value={appState}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={UiColors.dark.bars}
      />
      <Navigation />
    </AppStateContext.Provider>
  );
};

export default App;
