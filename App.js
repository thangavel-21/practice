import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/login/Login';
import front from './src/login/front';
import next from './src/login/next';
import Navkeys from './src/constant/Navkeys';
import signup from './src/signup/signup';
import forgot from './src/forgot/forgot';
import {ActivityIndicator, View} from 'react-native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Navkeys.FRONT}
          options={{headerShown: false}}
          component={front}
        />
        <Stack.Screen
          name={Navkeys.LOGIN}
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name={Navkeys.FORGOT}
          options={{headerShown: false}}
          component={forgot}
        />
        <Stack.Screen
          name={Navkeys.NEXTPAGE}
          options={{headerShown: false}}
          component={next}
        />
        <Stack.Screen
          name={Navkeys.SIGNUP}
          options={{headerShown: false}}
          component={signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
class Auth extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(
      isLoggedIn !== '1' ? Navkeys.FRONT : Navkeys.NEXTPAGE,
    );
  };
}
export default MyStack;
