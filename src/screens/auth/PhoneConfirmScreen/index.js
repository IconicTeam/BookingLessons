import React, {useState, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import components from '../../../components';
import confirm from '../../../../src/constants/Images';
import {ICONS, COLORS, PADDINGS} from '../../../constants';
import {styles} from './styles';
import {buttonsStyles, generalStyles, textStyles} from '../../../styles';

function PhoneConfirmScreen({navigation}) {
  // inputs refs
  const FirstTextInputRef = useRef();

  // user data
  const [userData, setUserData] = useState({
    user_id: '1',
    user_token: 'authToken',
    user_name: '',
    user_mobile: '',
    user_subject: '',
    user_lesson_location: '',
    user_password: '',
    user_confirm_password: '',
    user_image: '',
  });

  const [disabled, setDisabled] = useState(true);

  // handle mobile change
  const onChangeUserMobile = value => {
    setUserData({...userData, user_mobile: value});
  };

  // on change inputs
  const onChangeMobile = value => {
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    return reg.test(value.trim());
  };

  // errors
  const [mobileError, setMobileError] = useState('');

  //Functions
  const onEndEditingMobile = value => {
    // mobile
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (reg.test(value.trim()) == false && value.trim().length != 0) {
      setMobileError('برجاء ادخال رقم صالح!');
      return false;
    } else {
      setMobileError('');
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <components.MainHeader
        title={'ادخل رقم الهاتف'}
        haveBackButton={true}
        navigation={navigation}
      />
      <ScrollView>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../assets/Images/phone.png')}
        />
        <View style={styles.textInputsContainer}>
          <components.MainTextInput
            inputRef={FirstTextInputRef}
            placeholder="رقم الموبايل"
            value={userData.user_mobile}
            onChangeText={value => {
              onChangeUserMobile(value);
              if (onChangeMobile(value)) {
                setMobileError('');
                setDisabled(false);
              }
            }}
            autoCapitalize="none"
            keyboardType="phone-pad"
            blurOnSubmit={false}
            marginTop={PADDINGS.mdPadding}
            maxLength={userData.user_mobile.startsWith('+2') ? 13 : 11}
            returnKeyType="next"
            secureTextEntry={false}
            onSubmitEditing={() => {
              FirstTextInputRef.current.focus();
            }}
            onEndEditing={e => onEndEditingMobile(e.nativeEvent.text)}
          />
          {mobileError && (
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
              {mobileError}
            </Text>
          )}
        </View>
        <View style={[styles.ButtonViewStyle]}>
          <components.MainButton
            disabled={disabled}
            title={'ارسال '}
            onPress={() => navigation.navigate('OneTimePasswordScreen')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default PhoneConfirmScreen;
