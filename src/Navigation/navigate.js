import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../login/Login';
import front from '../login/front';
import next from '../login/next';
import Navkeys from '../constant/Navkeys';
import signup from '../signup/signup';
import forgot from '../forgot/forgot';
import image from '../updates/image';

const Stack = createStackNavigator();

function navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Navkeys.FRONT}>
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
          name={Navkeys.IMAGE}
          options={{headerShown: false}}
          component={image}
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
}
export default navigate;
