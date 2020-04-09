import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  background:{
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  title:{
    fontSize: 20,
    color: '#000000'
  }
});

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.background}>
        <Text style={styles.title}>User's profile page</Text>
     </View>    
    );
  }
}