import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './forgotStyles'
import forgotString from '../constant/forgotString'
export default class forgot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{forgotString.CALIB_CRM}</Text>
        <Text style={styles.forgot}>{forgotString.FORGOT_PASSWORD}</Text>
        <Text style={styles.text1}>
          {forgotString.RESET_STRING}
        </Text>
        <Text style={styles.text2}>{forgotString.WITH_GUIDANCE}</Text>
        <TextInput style={styles.input} placeholder={forgotString.EMAIL} />
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text3}>{forgotString.REQUEST_RESET_LINK}</Text>
        </TouchableOpacity>
        <Text style={styles.text4}>{forgotString.BACK_TO}</Text>
        <TouchableOpacity>
          <Text style={styles.text5}>{forgotString.LOG_IN }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
