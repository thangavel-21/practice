import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  heading: {
    fontSize: 32,
    width: 160,
    height: 42,
    fontFamily: 'DMSans-Bold',
    fontWeight: '700',
    color: '#005592',
    marginTop: hp(9.855),
    marginLeft: wp(28.8),
  },
  google: {
    padding: 12.5,
    borderColor: 'rgb(66,133,244)',
    backgroundColor: 'rgb(64,133,244)',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    borderRadius: 2,
    fontSize: 16,
    color: 'rgb(255,255,255)',
    height: 48,
    width: 320,
    marginTop: hp(5.911),
    marginLeft: wp(7.73),
    marginRight: wp(7.2),
  },
  googleImg:{
    marginTop: hp(-6.2),
    marginBottom: hp(5.48),
    marginLeft: hp(3.85),
    width: 28,
    height: 18,
    borderRadius: 2,
    padding: 22.5,
    backgroundColor: 'rgb(255,255,255)',
    resizeMode:"stretch"
  },
  view:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 7,
  },
  view1:{
    paddingStart: 50,
    marginLeft: 28,
    flexDirection: 'row',
    width: 150,
    height: 1.5,
    backgroundColor: 'rgb(223,227,235)',
  },
  or:{
    paddingStart: 20,
    marginStart: -19,
    fontFamily: 'NunitoSans-Regular',
    width: 50,
    textAlign: 'center',
    color: 'rgb(110,116,124)',
  },
  or1:{
    paddingRight: 60,
    marginRight: 28,
    flexDirection: 'row',
    width: 136,
    height: 1.5,
    backgroundColor: 'rgb(223,227,235)',
  },
  eye:{
    flexDirection: 'row',
    marginTop: hp(-5.5),
    marginBottom: hp(5.48),
    marginLeft: hp(41.5),
    width: 24,
    height: 24,
  },
  forgot:{
    paddingLeft: 228, 
    marginTop: -16, 
    paddingBottom: 90
  },
  forgot1:
  {
    fontFamily: 'NunitoSans-SemiBold',
    paddingTop: -30,
    fontSize: 14,
    color: 'rgb(14,126,191)',
  },
  signup:{
    marginTop: hp(0),
    paddingLeft: 5,
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgb(50,145,200)',
  },
  signupImg:{
    flexDirection: 'row',
    marginTop: hp(-2.25),
    marginBottom: hp(5.48),
    marginLeft: hp(8.5),
    width: 14,
    height: 14,
  },
  dont:{
    color: 'rgb(65,74,84)',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
  dontAlign:{
    marginTop: hp(0),
     paddingLeft: 32
  },
  login:{
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
    color: 'rgb(154,159,164)',
    height: 72,
    marginTop: 6.2,
  },
  login1:
  {
    marginLeft: wp(7.466),
    marginRight: wp(7.2),
    height: 40,
    width: 320,
    backgroundColor: 'rgb(232,233,234)',
    textAlign: 'center',
    borderRadius: 4,
  },
  loginAlign:
  {
    marginTop: hp(-11),
     paddingBottom: 20
  },


  input: {
    width: 320,
    height: 48,
    padding: 10,
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dfe3eb',
    backgroundColor: '#dfe3eb',
    marginTop: hp(2.955),
    marginLeft: wp(7.466),
  },
  input1: {
    width: 320,
    height: 48,
    padding: 10,
    fontFamily: 'NunitoSans-SemiBold',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dfe3eb',
    backgroundColor: '#dfe3eb',
    marginTop: hp(1.477),
    marginBottom: hp(-2.97),
    marginLeft: wp(7.466),
    marginRight: wp(7.2),
  },
  policyBlock: {
    flexDirection: 'row',
    fontFamily: 'NunitoSans',
    height: 40,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(-24.65),
    marginTop: wp(48),
  },
  focusedTextInput: {
    borderColor: 'rgb(223,227,235)',
    backgroundColor: 'white',
  },

  alignText: {
    justifyContent: 'flex-end',
    marginBottom: 5,
    fontSize: 16,
    color: '#414a54',
  },
});
