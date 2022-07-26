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
import Container from '../../../components/general/Container';
import {generalStyles, textStyles} from '../../../styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OTPInput from '@hirbod/react-native-otp-input';
import {
  COLORS,
  FONTS,
  ICONS,
  Images,
  PADDINGS,
  RADIUS,
} from '../../../constants';

export default class OneTimePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Verify_code1: '',
      Verify_code2: '',
      Verify_code3: '',
      Verify_code4: '',
      pressIn: true,
      otp: '',
    };
  }

  check_code(otp, code) {
    if (otp == code) {
      this.props.navigation.navigate('ForgetPasswordScreen');
    } else {
      alert('الكود الذى كتبته غير صحيح، من فضلك اعد ادخال الكود مره اخري');
    }
    this.setState({
      otp: code,
      otp: '',
      pressIn: true,
    });
  }

  render() {
    const {code} = this.props.route.params;

    return (
      <>
        <components.Container>
          <components.GeneralStatusBar />
          <components.MainHeader
            navigation={this.props.navigation}
            title={'أدخل الكود'}
            haveBackButton={true}
          />
          <ScrollView>
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
              <OTPInput
                style={{
                  width: '90%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
                pinCount={4}
                code={this.state.otp}
                codeInputFieldStyle={styles.inputstyle}
                onCodeChanged={value => {
                  this.setState({
                    otp: value,
                  });
                  if (value.length == 4) {
                    this.setState({pressIn: false});
                  } else {
                    this.setState({pressIn: true});
                  }
                }}
              />
            </View>
            <View style={styles.view5}>
              <Text style={textStyles.smTextStyle}>ألم تستلم الرمز؟ </Text>
              <TouchableOpacity>
                <Text style={[textStyles.smTextStyle, {color: COLORS.primary}]}>
                  أعد إرسال الرمز
                </Text>
              </TouchableOpacity>
            </View>

            <components.Section type="center">
              <components.MainButton
                width={'100%'}
                title={'تأكيد'}
                disabled={this.state.pressIn ? true : false}
                backgroundColor={
                  this.state.pressIn ? COLORS.disabled : COLORS.primary
                }
                onPress={() => this.check_code(this.state.otp, code)}
              />
            </components.Section>
          </ScrollView>
        </components.Container>
      </>
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
    padding: PADDINGS.smPadding,
  },
  view5: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  inputstyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#eee',
    color: '#000',
    borderRadius: 5,
    textAlign: 'center',
  },
});
