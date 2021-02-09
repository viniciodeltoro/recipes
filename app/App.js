import 'react-native-gesture-handler';
import React from 'react';
import AppState from './states/app.state';
import AppStateContext from './states/app.state.context';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './pages/search.component';
import UserProfile from './pages/user-profile.component';
import Chat from './pages/chat.component';
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

const App = () => {
  return (
    <AppStateContext.Provider>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={UiColors.dark.bars}
        />
        <NavigationContainer>
          <Stack.Navigator headerMode="none" mode="card">
            <Stack.Screen name="TabScreen" component={TheTabNavigation} />
            <Stack.Screen name="VendorMenu" component={VendorMenu} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </AppStateContext.Provider>
  );
};

export default App;
