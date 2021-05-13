import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navkeys from '../constant/Navkeys';

class next extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    BackHandler.exitApp();
    return true;
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate(Navkeys.LOGIN);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>WELOCOME CALIB CRM</Text>
        <Text style={styles.text1}>YOU ARE LOGGINED SUCCESSFULLY</Text>
        <TouchableOpacity
          style={{
            marginTop: hp(4),
            marginLeft: wp(7.466),
            marginRight: wp(7.2),
            height: 40,
            width: 320,
            backgroundColor: 'rgb(251,112,0)',
            textAlign: 'center',
            borderRadius: 4,
          }}
          onPress={() => {
            this._logout();
          }}>
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              fontFamily: 'NunitoSans-SemiBold',
              fontSize: 16,
              color: 'rgb(255,255,255)',
              height: 72,
              marginTop: 6.2,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  text: {
    marginTop: hp(35),
    textAlign: 'center',
    color: 'rgb(0,85,146)',
    fontWeight: 'bold',
    fontSize: 32,
  },
  text1: {
    marginTop: hp(3),
    textAlign: 'center',
    color: 'rgb(0,85,146)',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default next;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/login/Login';
// import front from './src/login/front';
// import next from './src/login/next';
// import Navkeys from './src/constant/Navkeys';
// import signup from './src/signup/signup';
// import forgot from './src/forgot/forgot';
// import { ActivityIndicator, View } from 'react-native';

// const Stack = createStackNavigator();

// const MyStack = () => {

//   return (

//     <NavigationContainer>
//       <Stack.Navigator>

//          <Stack.Screen
//           name={Navkeys.FRONT}
//           options={{ headerShown: false }}
//           component={front}
//         />
//         <Stack.Screen
//           name={Navkeys.LOGIN}
//           options={{ headerShown: false }}
//           component={Login}
//         />
//          <Stack.Screen
//           name={Navkeys.FORGOT}
//           options={{ headerShown: false }}
//           component={forgot}
//         />
//         <Stack.Screen
//           name={Navkeys.NEXTPAGE}
//           options={{ headerShown: false }}
//           component={next}
//         />
//         <Stack.Screen
//           name={Navkeys.SIGNUP}
//           options={{ headerShown: false }}
//           component={signup}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;
