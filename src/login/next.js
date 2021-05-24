// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   BackHandler,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Navkeys from '../constant/Navkeys';

// class next extends Component {
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   handleBackButton() {
//     BackHandler.exitApp();
//     return true;
//   }
//   _logout = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate(Navkeys.LOGIN);
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>WELOCOME CALIB CRM</Text>
//         <Text style={styles.text1}>YOU ARE LOGGINED SUCCESSFULLY</Text>
//         <TouchableOpacity
//           style={{
//             marginTop: hp(4),
//             marginLeft: wp(7.466),
//             marginRight: wp(7.2),
//             height: 40,
//             width: 320,
//             backgroundColor: 'rgb(251,112,0)',
//             textAlign: 'center',
//             borderRadius: 4,
//           }}
//           onPress={() => {
//             this._logout();
//           }}>
//           <Text
//             style={{
//               alignItems: 'center',
//               textAlign: 'center',
//               fontFamily: 'NunitoSans-SemiBold',
//               fontSize: 16,
//               color: 'rgb(255,255,255)',
//               height: 72,
//               marginTop: 6.2,
//             }}>
//             Log out
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255,255,255)',
//   },
//   text: {
//     marginTop: hp(35),
//     textAlign: 'center',
//     color: 'rgb(0,85,146)',
//     fontWeight: 'bold',
//     fontSize: 32,
//   },
//   text1: {
//     marginTop: hp(3),
//     textAlign: 'center',
//     color: 'rgb(0,85,146)',
//     fontWeight: 'bold',
//     fontSize: 32,
//   },
// });

// export default next;
import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import * as UserActions from '../redux/action/action';

export class InvestorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: 0,
      list: [],
    };
  }
  componentDidMount() {
    this.getInvestorList();
  }
  viewItem = ({item}) => {
    return (
      
      <View
        style={{
          height: 120,
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 10,
          borderColor: 'black',
          borderWidth: 1,
        }}>
        <Text>{item.first_name}</Text>
        <Text>{item.last_name}</Text>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={{uri: item.avatar}}
        />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View>
          <FlatList
            data={this.state.list}
            renderItem={this.viewItem}
            onEndReachedThreshold={1}
            onEndReached={
              this.doMore}
          />
        </View>
      </SafeAreaView>
    );
  }

  /**
   * Get investor list from api
   */
  getInvestorList = () => {
    const page = this.state.page;
    console.log('page', page);
    this.props.investorList(
      page,
      failurefunc => {
        Alert.alert(failurefunc);
      },

      succfun => {
        console.log('list of data', succfun.data);
        if (this.state.page == 1) {
          this.setState({
            totalPages: succfun.total_pages,
          });
        }
        this.setState({
          list: [...this.state.list, ...succfun.data],
        });
      },
    );
    console.log('list of data', this.state.list);
  };

  /**
   * Do pagination for investor list
   */
  doMore = () => {
    console.log('thangavel');
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        if (this.state.page <= this.state.totalPages) {
          this.getInvestorList();
        }
      },
    );
  };
}

export const mapDispatchToProps = dispatch => ({
  investorList: (page, failurefunc, succfun) =>
    dispatch(UserActions.investorList(page, failurefunc, succfun)),
});

export default connect(null, mapDispatchToProps)(InvestorList);

