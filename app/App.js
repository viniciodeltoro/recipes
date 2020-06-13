import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './pages/search.component';
import UserProfile from './pages/user-profile.component';
import Chat from './pages/chat.component';
import TabBar from './components/tab-bar.component';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#031214"/>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <TabBar {...props}></TabBar>}>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="User" component={UserProfile} />
          </Tab.Navigator>        
        </NavigationContainer>
      </View>
    );
  }
}
