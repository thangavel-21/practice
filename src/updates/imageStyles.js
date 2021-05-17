import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
    justifyContent:'center',
    alignItems:'center'

  },
  text: {
    marginTop:hp(2),
    textAlign: 'center',
    color: 'rgb(0,85,146)',
    flexDirection: 'column',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'DMSans-Bold',

  },
  input: {
    marginTop:hp(2),
    width: 300,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  touch:{
    marginTop:hp(2),
    height: 45,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
  touch1:{
    marginTop:hp(2),
    height: 40,
    width: 100,
    marginLeft:wp(-55),
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor:'rgb(251,112,0)'
  },
  touch2:{
    marginTop:hp(-5.5),
    height: 40,
    width: 100,
    marginLeft:wp(55),
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor:'rgb(251,112,0)'
  },
 text2:{
  marginTop:hp(2),
  color:'rgb(110,116,124)',
  marginTop:10,
  paddingLeft:6
 },
 addPictureIcon: {
  height: 30,
  width: 30,
  backgroundColor:'blue',
  borderRadius: 50,
  position: 'absolute',
  left: 65,
  top: 75,
  justifyContent: 'center',
  alignItems: 'center',
  alignItems: 'center',
  },
  text3:{
    marginTop:hp(2),
    color:'rgb(255,255,255)',
    marginTop:10,
    paddingLeft:25
   },
  
})
