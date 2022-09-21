import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  ScrollView,
  StyleSheet,
  Keyboard,
  Pressable,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import components from '../../components';
import { textStyles } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OTPInput from '@hirbod/react-native-otp-input';
import { COLORS, FONTS, Images, PADDINGS, RADIUS } from '../../constants';
const { width, height } = Dimensions.get('screen');
export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
  return (
    <>
      <components.Container>
        <components.GeneralStatusBar />
        <components.MainHeader
          // navigation={this.props.navigation}
          title={"قائمة الحجوزات"}
          haveBackButton={true}
        />
        <ScrollView>
          <View style={styles.mainView}>
            <TouchableOpacity
            activeOpacity={0.4}
            style={styles.button}>
              <Image source={Images.students}
               style={styles.image}
              />
              <Text style={textStyles.lgTextStyle}>الصف الاول</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image source={Images.students}
               style={styles.image}
              />
              <Text style={textStyles.lgTextStyle}>الصف الثاني</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
             <Image source={Images.students}
               style={styles.image}
              />
              <Text style={textStyles.lgTextStyle}>الصف الثالث</Text>
            </TouchableOpacity>
          </View>
          
          
        </ScrollView>
      </components.Container>
    </>
  );
  }
}




const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
    padding:PADDINGS.mdPadding
  },
  button: {
    width: "47%",
    height: RFValue(200),
    backgroundColor:"#f4f4f4",
    marginBottom:20,
    borderRadius: RADIUS.mdRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation:2

  },
  image:{
    width: RFValue(120),
    height: RFValue(120),
    marginBottom:5,
    borderRadius:RADIUS.mdRadius,
    resizeMode: 'contain',
  }
});
