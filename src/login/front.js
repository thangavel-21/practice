import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Navkeys from '../constant/Navkeys';
import SignUp from '../../src/signup/signup';
import frontString from '../constant/frontString'
import styles from './frontStyles';

export default class front extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>{frontString.CALIB_CRM}</Text>
          <Image
            style={styles.image}
            source={require('../../src/constant/cal.png')}
          />
          <Text style={styles.heading}>{frontString.HEADING}</Text>
          <Text style={styles.text2}>
            {frontString.DEFAULT_STRING}
          </Text>
          <View style={styles.row}>
            <View style={styles.minirectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.minirectangle}></View>
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate(Navkeys.LOGIN);
            }}>
            <Text style={styles.login}>{frontString.LOG_IN}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.props.navigation.navigate(SignUp);
            }}>
            <Text
              style={styles.create}>
              {frontString.CREATE_ACCOUNT}
            </Text>
            <Image
              style={styles.img}
              source={require('../../src/constant/launch24Px.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

