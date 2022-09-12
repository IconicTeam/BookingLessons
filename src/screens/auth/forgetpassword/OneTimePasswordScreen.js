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

import {RFValue} from 'react-native-responsive-fontsize';

import components from '../../../components';
import {generalStyles, textStyles} from '../../../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  COLORS,
  FONTS,
  ICONS,
  Images,
  PADDINGS,
  RADIUS,
} from '../../../constants';

export default class OneTimePasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Verify_code1: '',
      Verify_code2: '',
      Verify_code3: '',
      Verify_code4: '',
      pressIn: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.refs.Verify_code1ref.focus();
    }, 50);
    this.refs.Verify_code2ref.setNativeProps({
      editable: false,
    });
    this.refs.Verify_code3ref.setNativeProps({
      editable: false,
    });
    this.refs.Verify_code4ref.setNativeProps({
      editable: false,
    });
  };
  completetextinput() {
    let pin1 = this.state.Verify_code1;
    let pin2 = this.state.Verify_code2;
    let pin3 = this.state.Verify_code3;
    let pin4 = this.state.Verify_code4;
    let press = this.state.pressIn;
    if (
      pin1.length == 1 &&
      pin2.length == 1 &&
      pin3.length == 1 &&
      pin4.length == 1
    ) {
      press = false;
    } else {
      press = true;
    }

    this.setState({
      pressIn: press,
    });
  }
  render() {
    return (
      <components.Container>
        {/* main header */}
        <components.MainHeader title={'أدخل الكود'} haveBackButton={true} />
        <View style={styles.view3}>
          <Image
            source={Images.otp}
            style={{
              width: RFValue(250),
              height: RFValue(200),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.view3}>
          <Text style={textStyles.smTextStyle}>من فضلك قم بإدخال</Text>
          <Text style={textStyles.smTextStyle}>
            الكود المرسل إليك المكون من 4 أرقام
          </Text>
        </View>
        <View style={styles.view4}>
          <TextInput
            maxLength={1}
            ref={'Verify_code1ref'}
            keyboardType="number-pad"
            value={this.state.Verify_code1}
            onChangeText={async value => {
              if (value.length == 1) {
                await this.setState({Verify_code1: value[0]});
                this.refs.Verify_code2ref.setNativeProps({
                  editable: true,
                });
                setTimeout(() => {
                  this.refs.Verify_code2ref.focus();
                }, 0);
              } else if (value.length == 4) {
                this.refs.Verify_code2ref.setNativeProps({
                  editable: true,
                });
                this.refs.Verify_code3ref.setNativeProps({
                  editable: true,
                });
                this.refs.Verify_code4ref.setNativeProps({
                  editable: true,
                });
                setTimeout(() => {
                  this.refs.Verify_code4ref.focus();
                }, 0);
                await this.setState({
                  Verify_code1: value[0],
                  Verify_code2: value[1],
                  Verify_code3: value[2],
                  Verify_code4: value[3],
                });
              } else if (value.length == 0) {
                this.refs.Verify_code2ref.setNativeProps({
                  editable: false,
                });
                await this.setState({Verify_code1: ''});
              }
              this.completetextinput();
            }}
            style={generalStyles.textInput_otp}></TextInput>
          <TextInput
            maxLength={1}
            ref={'Verify_code2ref'}
            keyboardType="number-pad"
            value={this.state.Verify_code2}
            onChangeText={async value => {
              await this.setState({Verify_code2: value});
              if (value != '') {
                this.refs.Verify_code3ref.setNativeProps({
                  editable: true,
                });
                setTimeout(() => {
                  this.refs.Verify_code3ref.focus();
                }, 0);
              } else {
                this.refs.Verify_code3ref.setNativeProps({
                  editable: false,
                });
                this.refs.Verify_code1ref.focus();
              }
              this.completetextinput();
            }}
            style={generalStyles.textInput_otp}></TextInput>
          <TextInput
            maxLength={1}
            ref={'Verify_code3ref'}
            keyboardType="number-pad"
            value={this.state.Verify_code3}
            onChangeText={async value => {
              await this.setState({
                Verify_code3: value,
              });
              if (value != '') {
                this.refs.Verify_code4ref.setNativeProps({
                  editable: true,
                });
                setTimeout(() => {
                  this.refs.Verify_code4ref.focus();
                }, 0);
              } else {
                this.refs.Verify_code4ref.setNativeProps({
                  editable: false,
                });
                this.refs.Verify_code2ref.focus();
              }
              this.completetextinput();
            }}
            style={generalStyles.textInput_otp}></TextInput>
          <TextInput
            maxLength={1}
            ref={'Verify_code4ref'}
            keyboardType="number-pad"
            value={this.state.Verify_code4}
            onChangeText={async value => {
              await this.setState({Verify_code4: value});
              if (value.length == 0) {
                this.refs.Verify_code3ref.focus();
              }
              this.completetextinput();
            }}
            style={generalStyles.textInput_otp}></TextInput>
        </View>
        <View style={styles.view5}>
          <Text style={textStyles.smTextStyle}>ألم تستلم الرمز؟ </Text>
          <TouchableOpacity>
            <Text style={[textStyles.smTextStyle, {color: COLORS.primary}]}>
              أعد إرسال الرمز
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={this.state.pressIn ? true : false}
          style={[
            styles.touchableopicty2,
            {
              backgroundColor: this.state.pressIn
                ? COLORS.disabled
                : COLORS.primary,
            },
          ]}>
          <Text style={[textStyles.lgTextStyle, {color: COLORS.white}]}>
            تأكيد
          </Text>
        </TouchableOpacity>
      </components.Container>
    );
  }
}
const styles = StyleSheet.create({
  view3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
  },
  touchableopicty2: {
    width: RFValue(150),
    height: RFValue(60),
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: RADIUS.mdRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
});
