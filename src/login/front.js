import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Navkeys from '../constant/Navkeys';
import SignUp from '../../src/signup/signup';

export default class front extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Calib CRM</Text>
          <Image
            style={styles.image}
            source={require('../../src/constant/cal.png')}
          />
          <Text style={styles.heading}>Heading</Text>
          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{' '}
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
            <Text
              style={{
                alignItems: 'center',
                textAlign: 'center',
                fontFamily: 'NunitoSans-SemiBold',
                fontSize: 16,
                color: 'rgb(255,255,255)',
                height: 72,
                marginTop: 8.5,
              }}>
              Log In
            </Text>
          </TouchableOpacity>

          {/* <Button 
          style={styles.button}
          onPress={()=> this.props.navigation.navigate('Login')}
          title='log in'
          color="rgb(251,112,0)"
          /> */}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.props.navigation.navigate(SignUp);
            }}>
            <Text
              style={{
                alignItems: 'center',
                marginTop: 8.5,
                fontFamily: 'NunitoSans-SemiBold',
                fontSize: 17,
                color: 'rgb(50,145,200)',
              }}>
              Create Account
            </Text>
            <Image
              style={{
                width: 24,
                height: 24,
                marginLeft: 265,
                marginVertical: -21,
              }}
              source={require('../../src/constant/launch24Px.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    flex: 6,
    backgroundColor: 'rgb(0,0,0)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 24,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    flexDirection: 'column',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'DMSans-Bold',
  },
  heading: {
    textAlign: 'center',
    marginTop: heightPercentageToDP(-3),
    color: 'white',
    flexDirection: 'column',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'NunitoSans-Bold',
  },
  text2: {
    padding: 28,
    marginTop: heightPercentageToDP(-5),
    paddingTop: 0,
    textAlign: 'center',
    color: 'rgb(154,159,164)',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  button: {
    width: 320,
    height: 48,
    borderWidth: 1,
    marginVertical: heightPercentageToDP(1),
    borderRadius: 4,
    backgroundColor: '#fb7000',
    borderColor: '#fb7000',
    alignItems: 'center',
  },
  button1: {
    width: 320,
    height: 48,
    borderWidth: 1,
    marginTop: heightPercentageToDP(-1),
    marginBottom: heightPercentageToDP(5),
    borderColor: 'rgb(50,145,200)',
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 199,
    height: 180,
  },
  rectangle: {
    width: 16,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgb(255,255,255)',
    marginRight: 5,
    marginLeft: 5,
  },
  minirectangle: {
    width: 8,
    height: 4,
    justifyContent: 'space-around',
    borderRadius: 2,
    backgroundColor: 'rgb(255,255,255)',
    opacity: 0.5,
  },
});
