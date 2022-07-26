import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import components from '../../../components';
import {ICONS, COLORS, PADDINGS, Images} from '../../../constants';
import {styles} from './styles';
import {buttonsStyles, generalStyles, textStyles} from '../../../styles';

function ForgetPasswordScreen({navigation}) {
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

  const [disableTextInput1, setDisableTextInput1] = useState(true);
  const [disableTextInput2, setDisableTextInput2] = useState(true);
  const [disabled, setDisabled] = useState(true);

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

  const [done, setDone] = useState(false);

  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
    setDone(false);
  };

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

    if (errors == 0) {
      setDone(true);
    }
    setSignupLoading(false);
  };

  // save password (integerate with backend "axios")
  const saveNewPassword = () => {};

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
      setDisableTextInput2(false);
      return true;
    }
  };

  const handleDisabled = () => {
    if (disableTextInput1 === false && disableTextInput2 === false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <components.MainHeader
        title={'ادخل كلمة المرور'}
        haveBackButton={true}
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Image
          style={styles.image}
          resizeMode="contain"
          source={Images.confirm}
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
                setDisableTextInput1(false);
              }
              if (userData.user_confirm_password == value) {
                console.log(userData.user_confirm_password);
                setConfirmPassError('');
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
                setDisableTextInput2(false);
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
                  paddingTop: PADDINGS.xsPadding,
                  // marginBottom: PADDINGS.xlPadding,
                  alignSelf: 'flex-start',
                },
              ]}>
              {confirmPassError}
            </Text>
          )}
        </View>
        <View style={[styles.ButtonViewStyle]}>
          <components.MainButton
            disabled={handleDisabled()}
            title={'تغيير كلمة المرور'}
            loading={signupLoading}
            loadingSize="large"
            loadingColor={COLORS.white}
            onPress={submitUserData}
          />
        </View>
      </ScrollView>

      {done && (
        <components.DoneModal
          onPress={goToLoginScreen}
          title={'تم تغيير كلمة المرور بنجاج🎉'}
          description={'من فضلك اضغط على الزر بالاسفل لتسجيل الدخول مرة اخرى'}
          btnText={'سجل دخول الان'}
        />
      )}
    </View>
  );
}

export default ForgetPasswordScreen;
