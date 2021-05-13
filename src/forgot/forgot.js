import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class forgot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Calib CRM</Text>
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Text style={styles.text1}>
          Relax, we'll email you a password reset link{' '}
        </Text>
        <Text style={styles.text2}>with guidance.</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text3}>Request Reset Link</Text>
        </TouchableOpacity>
        <Text style={styles.text4}>Back to</Text>
        <TouchableOpacity>
          <Text style={styles.text5}>Log In</Text>
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
    marginTop: hp(9.85),
    marginLeft: wp(28.8),
    marginRight: wp(28.53),
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontWeight: '700',
    fontSize: 32,
    color: 'rgb(0,85,146)',
  },
  forgot: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(65,74,84)',
    marginTop: hp(2.955),
    marginRight: wp(25.33),
    marginLeft: wp(30.4),
  },
  text1: {
    flexDirection: 'row',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'NunitoSans-Regular',
    marginTop: hp(0.985),
    marginLeft: wp(15.2),
    marginRight: wp(14.93),
  },
  text2: {
    flexDirection: 'row',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'NunitoSans-Regular',
    paddingLeft: 140,
    color: 'rgb(65,74,84)',
  },
  input: {
    width: 320,
    height: 58,
    borderColor: 'rgb(223,227,235)',
    backgroundColor: 'rgb(255,255,255)',
    marginTop: hp(2.955),
    marginRight: wp(7.2),
    marginLeft: wp(7.466),
    borderRadius: 2,
    borderWidth: 1.5,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
  touch: {
    height: 48,
    width: 320,
    borderColor: 'black',
    backgroundColor: 'rgb(251,112,0)',
    marginTop: hp(1.97),
    marginLeft: wp(7.466),
    marginRight: wp(7.2),
    borderRadius: 4,
  },
  text3: {
    color: 'rgb(255,255,255)',
    fontFamily: 'NunitoSans-SemiBold',
    textAlign: 'center',
    marginTop: 14,
  },
  text4: {
    marginTop: hp(5.41),
    marginRight: wp(50),
    marginLeft: wp(33.33),
    color: 'rgb(65,74,84)',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
  text5: {
    color: 'rgb(50,145,200)',
    fontFamily: 'NunitoSans',
    fontSize: 16,
    marginTop: hp(-2.8),
    marginLeft: wp(49.6),
    marginRight: wp(38.13),
  },
});
