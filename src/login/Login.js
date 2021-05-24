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
} from 'rn-material-ui-textfield';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './loginStyle';
import Navkeys from '../constant/Navkeys';
import {login} from '../saga/loginsaga';
import loginString from '../constant/loginStrings';
import {connect} from 'react-redux';
import * as UserActions from '../redux/action/action';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
class Login extends Component {
  state = {
    email: '',
    password: '',
    isemail: false,
    ispassword: false,
    isback: false,
    hasFocus: false,
    hasFocus1: false,
  };
  // componentDidMount() {
  //   GoogleSignin.configure({
  //    webClientId:"107587682355-55oh4o0t9pcp9bf3lveff8u0l4hl21av.apps.googleusercontent.com",
  //   });
  // }

  
  setFocus(hasFocus) {
    this.setState({hasFocus});
  }
  setFocus1(hasFocus1) {
    this.setState({hasFocus1});
  }
  /**
   * check and updates the state object Email Id
   */

  onChangeemail = email => {
    if (!email) {
      this.setState({isemail: true});
    } else {
      this.setState({isemail: false});
    }
    this.setState({email});
  };
  /**
   * check and updates the state object Password
   */
  onChangepassword = password => {
    if (!password) {
      this.setState({ispassword: true});
    } else {
      this.setState({ispassword: false});
    }
    this.setState({password});
  };
  /**
   *  check the user field conditions User Email and Password
   */
  _Login = async () => {
    let params = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.userLoginApi(
      params,
      failurefunc => {
        Alert.alert(failurefunc);
      },
      succfun => {
        this.props.navigation.navigate(Navkeys.GPS);
      },
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{loginString.CALIB_CRM}</Text>

        <TouchableOpacity
          onPress={() => {
            {
              this.props.navigation.navigate('GOOGLE');
            }
          }}>
          <Text style={styles.google}>{loginString.CONTINUE_WITH_GOOGLE}</Text>
          <Image
            source={require('../../src/constant/g.png')}
            style={styles.googleImg}
          />
        </TouchableOpacity>

        <View style={styles.view}>
          <View style={styles.view1} />
          <View>
            <Text style={styles.or}>{loginString.OR}</Text>
          </View>
          <View style={styles.or1} />
        </View>

        <FilledTextField
          label={loginString.EMAIL}
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
            {loginString.ENTER_VALID_EMAIL}
          </Text>
        )}
        <FilledTextField
          label={loginString.PASSWORD}
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

        <View>
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate('Eye');
              }
            }}>
            <Image
              style={styles.eye}
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
            {loginString.ENTER_VALID_PASSWORD}
          </Text>
        )}

        <View style={styles.forgot}>
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate(Navkeys.FORGOT);
              }
            }}>
            <Text style={styles.forgot1}>{loginString.FORGOT_PASSWORD}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginAlign}>
          <TouchableOpacity
            style={[
              styles.login1,
              this.state.email &&
                this.state.password && {backgroundColor: 'rgb(251,112,0)'},
            ]}
            onPress={() => {
              this._Login();
            }}>
            <Text
              style={[
                styles.login,
                this.state.email &&
                  this.state.password && {color: 'rgb(255,255,255)'},
              ]}>
              {loginString.LOG_IN}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.policyBlock}>
          <View style={styles.dontAlign}>
            <Text style={styles.dont}>{loginString.DONT_HAVE_ACCOUNT}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                {
                  this.props.navigation.navigate(Navkeys.SIGNUP);
                }
              }}>
              <Text style={styles.signup}>{loginString.SIGN_UP}</Text>
              <Image
                style={styles.signupImg}
                source={require('../../src/constant/launch24Px.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  userLoginApi: (params, failurefunc, succfun) =>
    dispatch(UserActions.userLoginApi(params, failurefunc, succfun)),
});

export default connect(null, mapDispatchToProps)(Login);
