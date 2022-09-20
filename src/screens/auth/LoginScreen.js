import * as React from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import components from '../../components';
// get all constants
import {COLORS, ICONS, Icons, Images, PADDINGS} from '../../constants';

// styles
import {buttonsStyles, generalStyles, textStyles} from '../../styles';

// native base
import {NativeBaseProvider, Avatar, ScrollView} from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_mobile: '',
      user_password: '',
      passwordError: '',
      mobileError: '',
      visible_password: true,
    };
  }

  onChangeMobile = value => {
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    return reg.test(value.trim());
  };

  onChangePassword = value => {
    return value.trim() >= 6;
  };

  // password
  check_Pass(value) {
    if (value.trim().length < 6 && value.trim().length != 0) {
      this.setState({
        passwordError: 'يجب تكون كلمة السر أكبر من أو تساوى 6 أحرف!',
      });
      return false;
    } else {
      this.setState({
        passwordError: '',
      });
      return true;
    }
  }

  // mobile
  check_mobile(value) {
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (reg.test(value.trim()) == false && value.trim().length != 0) {
      this.setState({
        mobileError: 'برجاء ادخال رقم صالح!',
      });
      return false;
    } else {
      this.setState({
        mobileError: '',
      });
      return true;
    }
  }

  login = () => {
    if (
      this.check_mobile(this.state.user_mobile) &&
      this.check_Pass(this.state.user_password)
    ) {
      alert('success');
      this.props.navigation.navigate('BottomTabs');
    } else {
      alert('failed');
    }
  };

  render() {
    return (
      <components.Container>
        {/* general StatusBar */}
        <components.GeneralStatusBar />

        {/* header */}
        <components.MainHeader
          title={'تسجيل الدخول'}
          haveBackButton={false}
          navigation={this.props.navigation}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={{alignItems: 'center'}}>
            <Image
              source={Images.login}
              style={{
                width: RFValue(250),
                height: RFValue(220),
              }}
            />
          </View>

          {/* inputs section */}
          <components.Section>
            <components.MainTextInput
              placeholder={'رقم التلفون'}
              marginTop={PADDINGS.smPadding}
              autoCapitalize="none"
              keyboardType="phone-pad"
              maxLength={this.state.user_mobile.startsWith('+2') ? 13 : 11}
              value={this.state.user_mobile}
              onChangeText={value => {
                this.setState({
                  user_mobile: value,
                });
                if (this.onChangeMobile(value)) {
                  this.setState({mobileError: ''});
                }
              }}
              onEndEditing={e => this.check_mobile(e.nativeEvent.text)}
            />
            {this.state.mobileError && (
              <Text
                style={[
                  textStyles.smTextStyle,
                  {
                    color: COLORS.error,
                    marginLeft: PADDINGS.xsPadding,
                    paddingTop: PADDINGS.xsPadding,
                    alignSelf: 'flex-start',
                  },
                ]}>
                {this.state.mobileError}
              </Text>
            )}

            <components.MainTextInput
              placeholder={'الرقم السرى'}
              marginTop={PADDINGS.mdPadding}
              value={this.state.user_password}
              onChangeText={value => {
                this.setState({
                  user_password: value,
                });
                if (this.onChangePassword(value)) {
                  this.setState({passwordError: ''});
                }
              }}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              blurOnSubmit={false}
              secureTextEntry={this.state.visible_password}
              left={
                <components.SmallCircleButton
                  onPress={() =>
                    this.setState({
                      visible_password: !this.state.visible_password,
                    })
                  }>
                  <Icon
                    name={this.state.visible_password ? 'eye-off' : 'eye'}
                    size={ICONS.mdIcon}
                    color={
                      this.state.visible_password ? COLORS.gray : COLORS.primary
                    }
                  />
                </components.SmallCircleButton>
              }
              onEndEditing={e => this.check_Pass(e.nativeEvent.text)}
            />

            {this.state.passwordError && (
              <Text
                style={[
                  textStyles.smTextStyle,
                  {
                    color: COLORS.error,
                    marginLeft: PADDINGS.xsPadding,
                    paddingTop: PADDINGS.xsPadding,
                    alignSelf: 'flex-start',
                  },
                ]}>
                {this.state.passwordError}
              </Text>
            )}

            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              activeOpacity={0.4}
              onPress={() =>
                this.props.navigation.navigate('PhoneConfirmScreen')
              }>
              <Text
                style={[
                  textStyles.smTextStyle,
                  textStyles.primaryTextStyle,
                  textStyles.boldTextStyle,
                  {
                    marginRight: PADDINGS.xsPadding,
                    marginTop: PADDINGS.xsPadding,
                  },
                ]}>
                هل نسيت الرقم السرى؟
              </Text>
            </TouchableOpacity>
          </components.Section>

          <components.Section>
            <components.MainButton
              title="تسجيل الدخول"
              width={'100%'}
              // type="disabled"
              onPress={() => {
                this.login();
              }}
              disabled={
                true
                  ? this.state.user_mobile == '' ||
                    this.state.user_password == ''
                  : this.state.user_mobile != '' ||
                    this.state.user_password != ''
              }
            />
            {/* <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text style={textStyles.smTextStyle}>او باستخدام</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '30%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}>
                <Icon
                  name="facebook"
                  color={COLORS.primary}
                  size={RFValue(ICONS.mdIcon)}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="google"
                  color={COLORS.error}
                  size={RFValue(ICONS.mdIcon)}
                />
              </TouchableOpacity>
            </View> */}
          </components.Section>

          <components.Section>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={textStyles.smTextStyle}>هل لديك حساب بالفعل؟</Text>
              <TouchableOpacity
                activeOpacity={0.4}
                style={{
                  alignItems: 'center',
                }}
                onPress={() => this.props.navigation.navigate('SignupScreen')}>
                <Text
                  style={[
                    textStyles.smTextStyle,
                    textStyles.boldTextStyle,
                    {color: COLORS.primary},
                  ]}>
                  {' '}
                  إنشاء حساب
                </Text>
              </TouchableOpacity>
            </View>
          </components.Section>
        </ScrollView>
      </components.Container>
    );
  }
}

const styles = StyleSheet.create({});
