import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert,NativeModules } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as ImagePicker from 'react-native-image-picker';
import styles from './imageStyles';
import RNRestart from 'react-native-restart';
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import * as UserActions from '../redux/action/action';
import imageString from '../constant/imageString'

class image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      isAddress: false,
      isShowCalender: false,
      isDob: false,
      isPhone: false,
      saveData: {
        userName: '',
        phoneNumber: '',
        dob: 'Date Of Birth',
        address: '',
        fileUri: 'Choose Photo',
      },
    };
  }
  /**
  * check and updates the state actionsobject userName
  */
  onChangeUser = userName => {
    if (!userName) {
      this.setState({isUser: true});
    } else {
      this.setState({isUser: false});
    }
    this.setState({
      saveData: {...this.state.saveData, userName: userName},
    });
  };
   /**
  * check and updates the state actionsobject Address
  */
  onChangeAddress = address => {
    if (!address) {
      this.setState({isAddress: true});
    } else {
      this.setState({isAddress: false});
    }
    this.setState({
      saveData: {...this.state.saveData, address: address},
    });
  };
 /**
  * check and updates the state actionsobject Phone Number
  */
  onChangePhone = phoneNumber => {
    const numberLength = phoneNumber.length.toString();
    if (!phoneNumber || numberLength < 10 || numberLength > 10) {
      this.setState({isPhone: true});
    } else {
      this.setState({isPhone: false});
    }
    this.setState({
      saveData: {...this.state.saveData, phoneNumber: phoneNumber},
    });
  };

 /**
  * check and updates the state of User Date Of Birth
  */
  openCalender = () => {
    this.setState({
      isShowCalender: true,
    });
  };
  handleConfirm = date => {
    function convert(date) {
      let date1 = new Date(date),
        mnth = ('0' + (date1.getMonth() + 1)).slice(-2),
        day = ('0' + date1.getDate()).slice(-2);
      return [day, mnth, date1.getFullYear()].join('-');
    }
    this.setState({
      saveData: {...this.state.saveData, dob: convert(date)},
    });
    if (!dob) {
      this.setState({isDob: true});
    } else {
      this.setState({isDob: false});
    }
    console.log(this.state.dob.toString());
  };

  onCancel = () => {
    this.setState({
      isShowCalender: false,
    });
    console.log('user cancel date picker');
  };
  /**
  * check and updates the state of User Image 
  */
  handleChoosePhoto = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          saveData: {...this.state.saveData, fileUri: response.uri},
        }); //update state to update Image
      }
    });
  };
  /**
  * Restart An Application
  */
  onButtonClick = () => {
   // RNRestart.Restart();
   NativeModules.DevSettings.reload();
  };
 /**
   * On user Save
   */
  onSave() {
    if (
      this.state.saveData.userName &&
      this.state.saveData.phoneNumber &&
      this.state.saveData.dob &&
      this.state.saveData.address &&
      this.state.saveData.fileUri
    ) {
      const userObj = {
        fileUri: this.state.saveData.fileUri,
        username: this.state.saveData.userName,
        address: this.state.saveData.address,
        phoneNumber: this.state.saveData.phoneNumber,
        dob: this.state.saveData.dob,
      };
      console.log(userObj);
      this.props.setUserDetails(userObj);
      

     
    } else {
      Alert.alert('Enter valid fields');
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{imageString.UPLOAD_DETAILS}</Text>
        <TextInput
          value={this.state.saveData.userName}
          onChangeText={this.onChangeUser}
          placeholder={imageString.USERNAME}
          placeholderTextColor="rgb(110,116,124)"
          style={styles.input}
        />
        {this.state.isUser && (
          <Text
            style={styles.validUser}>
            {imageString.ENTER_USER_NAME}
          </Text>
        )}

        <TextInput
          value={this.state.saveData.phoneNumber}
          onChangeText={this.onChangePhone}
          placeholder={imageString.PHONENUMBER}
          placeholderTextColor="rgb(110,116,124)"
          keyboardType="phone-pad"
          style={styles.input}
        />
        {this.state.isPhone && (
          <Text
            style={styles.validPhone}>
            {imageString.ENTER_USER_NUMBER}
          </Text>
        )}
        <TextInput
          value={this.state.saveData.address}
          onChangeText={this.onChangeAddress}
          placeholder={imageString.ADDRESS}
          placeholderTextColor="rgb(110,116,124)"
          keyboardType="default"
          style={styles.input}
        />
        <ModalDropdown
          options={['Tamil', 'English', 'Malayalm', 'Telugu', 'Urudu']}
          defaultValue={'Choose Language'}
          style={styles.input}
          onSelect={this.onChangeLanguage}
          dropdownStyle={styles.dropDown}
          dropdownTextStyle={styles.dropDownText}
          textStyle={styles.textStyle}
        />
        <TouchableOpacity style={styles.touch} onPress={this.openCalender}>
          <Text style={styles.text2}>{this.state.saveData.dob.toString()}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={this.state.isShowCalender}
          mode="date"
          onConfirm={date => {
            this.handleConfirm(date);
          }}
          onCancel={this.onCancel}
        />

        <TouchableOpacity style={styles.touch} onPress={this.handleChoosePhoto}>
          <Text style={styles.text2}>{this.state.saveData.fileUri} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch1} onPress={this.onButtonClick}>
          <Text style={styles.text3}>{imageString.CANCEL} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch2} onPress={() => this.onSave()}>
          <Text style={styles.text3}>{imageString.SAVE}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  setUserDetails: userObj => dispatch(UserActions.setUserDetails(userObj)),
});

export default connect(null, mapDispatchToProps)(image);
