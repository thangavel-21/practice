import React from 'react';
import {View, Button} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import GetLocation from 'react-native-get-location';

export default class gps extends React.Component {
  location = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  render() {
    return (
      <View>
        <Button onPress={this.location} title="FIND ME" color="#841584" />
      </View>
    );
  }
}
