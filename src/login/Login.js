import React, {Component} from 'react';
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import styles from './loginStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navkeys from '../constant/Navkeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postApi} from '../api/apicall';
import {login} from '../api/user';

// const userInfo = { email: 'vel21@gmail.com', password: 'Vel@21' }

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    isemail: false,
    ispassword: false,
    isback: false,
    hasFocus: false,
    hasFocus1: false,
  };

  // handleEmail = emailInput => {
  //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (reg.test(emailInput) === false) {
  //         this.setState({ email: emailInput });
  //         this.setState({emailBorder: 1});

  //     } else {
  //         this.setState({ email: emailInput });
  //         this.setState({emailBorder: 0});

  //     }
  // };

  // handlePassword = passwordInput => {
  //     this.setState({ password: passwordInput });
  // };
  setFocus(hasFocus) {
    this.setState({hasFocus});
  }
  setFocus1(hasFocus1) {
    this.setState({hasFocus1});
  }
  onChangeemail = email => {
    if (email !== 'eve.holt@reqres.in') {
      this.setState({isemail: true});
    } else {
      this.setState({isemail: false});
    }
    this.setState({email});
  };
  onChangepassword = password => {
    if (password !== 'cityslicka') {
      this.setState({ispassword: true});
    } else {
      this.setState({ispassword: false});
    }
    this.setState({password});
  };
  // onLogin() {
  //     const { email, password } = this.state;
  //     this.props.navigation.navigate(Navkeys.NEXTPAGE)
  // }
  // _Login = async () => {
  //     //const {email, password} = this.state;
  //     if (userInfo.email === this.state.email && userInfo.password === this.state.password) {
  //         //Alert.alert('Logged in ');
  //         await AsyncStorage.setItem('isLoggedIn', '1');
  //         this.props.navigation.navigate(Navkeys.NEXTPAGE);
  //     }
  //     else {
  //         Alert.alert('email and password is incorrect');
  //     }
  //     // Alert.alert('Credentials', `${username} + ${password}`);
  // }
  _Login = async () => {
    let params = {
      email: this.state.email,
      password: this.state.password,
    };
    let data = await login(params);
    console.log(data);
    Alert.alert('loggined successfully');
    this.props.navigation.navigate(Navkeys.NEXTPAGE);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Calib CRM</Text>

        <TouchableOpacity
          onPress={() => {
            {
              this.props.navigation.navigate('GOOGLE');
            }
          }}>
          <Text style={styles.google}>Continue With Google</Text>
          <Image
            source={require('../../src/constant/g.png')}
            style={{
              marginTop: hp(-6.2),
              marginBottom: hp(5.48),
              marginLeft: hp(3.85),
              width: 28,
              height: 18,
              borderRadius: 2,
              padding: 22.5,
              backgroundColor: 'rgb(255,255,255)',
            }}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -10,
            marginBottom: 7,
          }}>
          <View
            style={{
              paddingStart: 50,
              marginLeft: 28,
              flexDirection: 'row',
              width: 150,
              height: 1.5,
              backgroundColor: 'rgb(223,227,235)',
            }}
          />
          <View>
            <Text
              style={{
                paddingStart: 20,
                marginStart: -19,
                fontFamily: 'NunitoSans-Regular',
                width: 50,
                textAlign: 'center',
                color: 'rgb(110,116,124)',
              }}>
              OR
            </Text>
          </View>
          <View
            style={{
              paddingRight: 60,
              marginRight: 28,
              flexDirection: 'row',
              width: 136,
              height: 1.5,
              backgroundColor: 'rgb(223,227,235)',
            }}
          />
        </View>

        {/* <TextInput
                    value={this.state.email}
                    onChangeText={this.onchangeemail}
                    placeholder='Email'
                    style={[styles.input, this.state.isemail && {backgroundColor: 'rgb(255,255,255)', borderColor:'rgb(250,62,62)' }]}
                /> 
                 {this.state.isemail && <Text style={{ paddingLeft:27,fontSize: 12, color: '#fa3e3e', width: 320, height: 16 }}>Enter valid email id</Text>}  */}
        <FilledTextField
          label="Email"
          value={this.state.email}
          onChangeText={this.onChangeemail}
          onFocus={this.setFocus.bind(this, true)}
          tintColor={this.state.isemail ? 'rgb(250,62,62)' : 'rgb(110,116,124)'}
          lineWidth={0}
          activeLineWidth={0}
          tintSize={12}
          baseColor={'rgb(110, 116, 124)'}
          textColor={'rgb (32, 42, 54)'}
          contentInset={{input: hp(-0.3)}}
          inputContainerStyle={[
            styles.input,
            this.state.hasFocus ? styles.focusedTextInput : styles.input,
            this.state.isemail && {
              backgroundColor: 'rgb(255,255,255)',
              borderColor: 'rgb(250,62,62)',
            },
          ]}
        />
        {this.state.isemail && (
          <Text
            style={{
              paddingLeft: 27,
              fontSize: 12,
              color: '#fa3e3e',
              width: 320,
              height: 16,
            }}>
            Enter valid email id
          </Text>
        )}
        <FilledTextField
          label="Password"
          value={this.state.password}
          onChangeText={this.onChangepassword}
          onFocus={this.setFocus1.bind(this, true)}
          secureTextEntry={true}
          tintColor={
            this.state.ispassword ? 'rgb(250,62,62)' : 'rgb(110,116,124)'
          }
          tintSize={12}
          lineWidth={0}
          activeLineWidth={0}
          baseColor={'rgb(110, 116, 124)'}
          textColor={'rgb (32, 42, 54)'}
          contentInset={{input: hp(-0.3)}}
          inputContainerStyle={[
            styles.input,
            this.state.hasFocus1 ? styles.focusedTextInput : styles.input,
            this.state.ispassword && {
              backgroundColor: 'rgb(255,255,255)',
              borderColor: 'rgb(250,62,62)',
            },
          ]}
        />
        {/* <TextInput
                    value={this.state.password}
                    onChangeText={this.onChangepassword}
                    placeholder='Password'
                    secureTextEntry={true}
                    style={[styles.input1, this.state.ispassword && {backgroundColor: 'rgb(255,255,255)', borderColor:'rgb(250,62,62)' }]}
                /> */}
        <View>
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate('Eye');
              }
            }}>
            <Image
              style={{
                flexDirection: 'row',
                marginTop: hp(-5.5),
                marginBottom: hp(5.48),
                marginLeft: hp(41.5),
                width: 24,
                height: 24,
              }}
              source={require('../../src/constant/eye1.png')}
            />
          </TouchableOpacity>
        </View>
        {this.state.ispassword && (
          <Text
            style={{
              paddingLeft: 27,
              marginTop: hp(-4),
              fontSize: 12,
              color: '#fa3e3e',
              width: 320,
              height: 16,
            }}>
            Enter valid password
          </Text>
        )}

        <View style={{paddingLeft: 228, marginTop: -16, paddingBottom: 90}}>
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate(Navkeys.FORGOT);
              }
            }}>
            <Text
              style={{
                fontFamily: 'NunitoSans-SemiBold',
                paddingTop: -30,
                fontSize: 14,
                textAlignAlign: 'Right',
                color: '#0e7ebf',
              }}>
              {' '}
              Forgot Password?{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp(-11), paddingBottom: 20}}>
          <TouchableOpacity
            style={[
              {
                marginLeft: wp(7.466),
                marginRight: wp(7.2),
                height: 40,
                width: 320,
                backgroundColor: 'rgb(232,233,234)',
                textAlign: 'center',
                borderRadius: 4,
              },
              this.state.email &&
                this.state.password && {backgroundColor: 'rgb(251,112,0)'},
            ]}
            onPress={() => {
              this._Login();
            }}>
            <Text
              style={[
                {
                  alignItems: 'center',
                  textAlign: 'center',
                  fontFamily: 'NunitoSans-SemiBold',
                  fontSize: 16,
                  color: 'rgb(154,159,164)',
                  height: 72,
                  marginTop: 6.2,
                },
                this.state.email &&
                  this.state.password && {color: 'rgb(255,255,255)'},
              ]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.policyBlock}>
          <View style={{marginTop: hp(0), paddingLeft: 32}}>
            <Text
              style={{
                color: 'rgb(65,74,84)',
                fontFamily: 'NunitoSans-SemiBold',
                fontSize: 16,
              }}>
              Don't have an account?{' '}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                {
                  this.props.navigation.navigate(Navkeys.SIGNUP);
                }
              }}>
              <Text
                style={{
                  marginTop: hp(0),
                  paddingLeft: 5,
                  fontFamily: 'NunitoSans-SemiBold',
                  fontWeight: '600',
                  fontSize: 16,
                  color: 'rgb(50,145,200)',
                }}>
                Sign up
              </Text>
              <Image
                style={{
                  flexDirection: 'row',
                  marginTop: hp(-2.25),
                  marginBottom: hp(5.48),
                  marginLeft: hp(8.5),
                  width: 14,
                  height: 14,
                }}
                source={require('../../src/constant/launch24Px.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
