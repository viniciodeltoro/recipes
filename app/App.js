import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './pages/search.component';
import UserProfile from './pages/user-profile.component';
import TabBar from './components/tab-bar.component';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
  }

  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props}></TabBar>}>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="User" component={UserProfile} />
        </Tab.Navigator>        
      </NavigationContainer>
    );
  }
}
