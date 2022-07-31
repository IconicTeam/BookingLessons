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
    };
  }

  render() {
    return (
      <components.Container>
        {/* general StatusBar */}
        <components.GeneralStatusBar />

        {/* header */}
        <components.MainHeader title={'تسجيل الدخول'} haveBackButton={false} />

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
              marginTop={10}
              autoCapitalize="none"
              keyboardType="phone-pad"
              maxLength={this.state.user_mobile.startsWith('+2') ? 13 : 11}
              value={this.state.user_mobile}
              onChangeText={value => {
                this.setState({
                  user_mobile: value,
                });
              }}
            />

            <components.MainTextInput
              placeholder={'الرقم السرى'}
              marginTop={15}
              value={this.state.user_password}
              onChangeText={value => {
                this.setState({
                  user_password: value,
                });
              }}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              blurOnSubmit={true}
              secureTextEntry={true}
              left={
                <components.SmallCircleButton onPress={() => alert()}>
                  <Icon
                    name="eye-off"
                    size={ICONS.mdIcon}
                    color={COLORS.gray}
                  />
                </components.SmallCircleButton>
              }
            />
            <TouchableOpacity>
              <Text
                style={[
                  textStyles.smTextStyle,
                  textStyles.primaryTextStyle,
                  textStyles.boldTextStyle,
                  {
                    textAlign: 'right',
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
              // onPress={}
            />
            <View style={{alignItems: 'center', marginVertical: 20}}>
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
                  size={ICONS.lgIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="google" color={COLORS.error} size={ICONS.lgIcon} />
              </TouchableOpacity>
            </View>
          </components.Section>

          <components.Section>
            <View
              style={{
                alignItems: 'center',
                marginTop: 50,
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
