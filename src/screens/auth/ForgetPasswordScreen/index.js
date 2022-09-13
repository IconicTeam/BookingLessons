import React, {useState, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import components from '../../../components';
import confirm from '../../../../src/constants/Images';
import {ICONS, COLORS, PADDINGS} from '../../../constants';
import {styles} from './styles';
import {buttonsStyles, generalStyles, textStyles} from '../../../styles';

function ForgetPasswordScreen(props) {
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

  // inputs refs
  const firstTextInputRef = useRef();
  const secondTextInputRef = useRef();

  // errors
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  // passowrd show
  const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);
  const [confirmPassSecureTextEntry, setConfirmPassSecureTextEntry] =
    useState(true);

  // show pass functions
  const handleVisiblePass = () => setPassSecureTextEntry(!passSecureTextEntry);
  const handleVisibleConfirmPass = () =>
    setConfirmPassSecureTextEntry(!confirmPassSecureTextEntry);

  // handle password change
  const onChangeUserPassword = value => {
    setUserData({...userData, user_password: value});
  };

  // handle confirm password change
  const onChangeUserConfirmPassword = value => {
    setUserData({...userData, user_confirm_password: value});
  };

  // on change inputs
  const onChangePassword = value => {
    return value.trim().length >= 6;
  };

  const onChangeConfirmPassword = value => {
    return value.trim() == userData.user_password.trim();
  };

  // Change Password loading
  const [signupLoading, setSignupLoading] = useState(false);

  // submit form
  const submitUserData = () => {
    setSignupLoading(true);
    let errors = 0;

    // password
    if (userData.user_password.trim().length < 6) {
      setPasswordError('يجب تكون كلمة السر أكبر من أو تساوى 6 أحرف!');
      errors++;
    } else {
      setPasswordError('');
    }

    // confirm password
    if (
      userData.user_confirm_password.trim() != userData.user_password.trim() ||
      userData.user_confirm_password.trim().length == 0
    ) {
      setConfirmPassError('كلمة السر غير متطابقة!');
      errors++;
    } else {
      setConfirmPassError('');
    }
  };

  //Functions

  const onEndEditingPass = value => {
    // password
    if (value.trim().length < 6 && value.trim().length != 0) {
      setPasswordError('يجب تكون كلمة السر أكبر من أو تساوى 6 أحرف!');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const onEndEditingConfirmPass = value => {
    // confirm password
    if (
      value.trim() != userData.user_password.trim() &&
      value.trim().length != 0
    ) {
      setConfirmPassError('كلمة السر غير متطابقة!');
      return false;
    } else {
      setConfirmPassError('');
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <components.MainHeader
        title={'ادخل كلمة المرور'}
        haveBackButton={true}
        navigation={navigator}
      />
      <ScrollView>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../assets/Images/confirm.png')}
        />
        <Text style={styles.hintTitle}>من فضلك ادخل كلمة المرور الجديدة</Text>
        <View style={styles.textInputsContainer}>
          <components.MainTextInput
            inputRef={firstTextInputRef}
            value={userData.user_password}
            onChangeText={value => {
              onChangeUserPassword(value);
              if (onChangePassword(value)) {
                setPasswordError('');
              }
            }}
            autoCapitalize="none"
            keyboardType={
              passSecureTextEntry ? 'name-phone-pad' : 'visible-password'
            }
            blurOnSubmit={false}
            returnKeyType="next"
            secureTextEntry={passSecureTextEntry}
            onSubmitEditing={() => {
              firstTextInputRef.current.focus();
            }}
            placeholder="كلمة المرور الجديدة"
            left={
              <components.SmallCircleButton onPress={handleVisiblePass}>
                <Icon
                  name={passSecureTextEntry ? 'eye-off' : 'eye'}
                  size={ICONS.mdIcon}
                  color={passSecureTextEntry ? COLORS.gray : COLORS.primary}
                />
              </components.SmallCircleButton>
            }
            onEndEditing={e => onEndEditingPass(e.nativeEvent.text)}
          />
          {passwordError && (
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
              {passwordError}
            </Text>
          )}

          <components.MainTextInput
            inputRef={secondTextInputRef}
            value={userData.user_confirm_password}
            onChangeText={value => {
              onChangeUserConfirmPassword(value);
              if (onChangeConfirmPassword(value)) {
                setConfirmPassError('');
              }
            }}
            autoCapitalize="none"
            keyboardType={
              confirmPassSecureTextEntry ? 'name-phone-pad' : 'visible-password'
            }
            blurOnSubmit={true}
            marginTop={PADDINGS.mdPadding}
            returnKeyType="done"
            secureTextEntry={confirmPassSecureTextEntry}
            placeholder="تأكيد كلمة المرور الجديدة"
            left={
              <components.SmallCircleButton onPress={handleVisibleConfirmPass}>
                <Icon
                  name={confirmPassSecureTextEntry ? 'eye-off' : 'eye'}
                  size={ICONS.mdIcon}
                  color={
                    confirmPassSecureTextEntry ? COLORS.gray : COLORS.primary
                  }
                />
              </components.SmallCircleButton>
            }
            onEndEditing={e => onEndEditingConfirmPass(e.nativeEvent.text)}
          />
          {confirmPassError && (
            <Text
              style={[
                textStyles.smTextStyle,
                {
                  color: COLORS.error,
                  marginLeft: PADDINGS.xsPadding,
                  marginBottom: PADDINGS.xlPadding,
                  alignSelf: 'flex-start',
                },
              ]}>
              {confirmPassError}
            </Text>
          )}
        </View>
        <View style={[styles.ButtonViewStyle]}>
          <components.MainButton
            title={'تغيير كلمة المرور'}
            loading={signupLoading}
            loadingSize="large"
            loadingColor={COLORS.white}
            onPress={submitUserData}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ForgetPasswordScreen;
