import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet, Text} from 'react-native';
import styles from './signupstyle';
export default class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      password: '',
      Confirmpassword: '',
    };
  }

  onSignup() {
    const {FirstName, LastName, password, Confirmpassword} = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.FirstName}
          onChangeText={FirstName => this.setState({FirstName})}
          placeholder="FirstName"
          style={styles.input}
        />
        <TextInput
          value={this.state.LasttName}
          onChangeText={LasttName => this.setState({LastName})}
          placeholder="LastName"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.Confirmpasswordpassword}
          onChangeText={ConfirmPassword =>
            this.setState({ConfirmPasswordpassword})
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.buttton}>
          <Button
            title="Sign Up"
            color="#ef6c00"
            onPress={this.onSignup.bind(this)}
          />
        </View>
      </View>
    );
  }
}
