import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import components from '../../components';
import {PADDINGS, ICONS, COLORS} from '../../constants';
import {styles} from './styles';
import {textStyles, buttonsStyles, generalStyles} from '../../styles';
function ChangePasswordScreen(props) {
  const [userData, setUserData] = useState({
    user_id: '1',
    user_token: 'authToken',
    user_name: '',
    user_mobile: '',
    user_subject: '',
    user_lesson_location: '',
    user_old_Password: '',
    user_password: '',
    user_confirm_password: '',
    user_image: '',
  });

  // inputs refs
  const firstTextInputRef = useRef();
  const secondTextInputRef = useRef();
  const thirdTextInputRef = useRef();

  // errors
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  // passowrd show
  const [oldpassSecureTextEntry, setOldPassSecureTextEntry] = useState(true);
  const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);
  const [confirmPassSecureTextEntry, setConfirmPassSecureTextEntry] =
    useState(true);

  // show pass functions
  const handleVisibleOldPass = () =>
    setOldPassSecureTextEntry(!oldpassSecureTextEntry);
  const handleVisiblePass = () => setPassSecureTextEntry(!passSecureTextEntry);
  const handleVisibleConfirmPass = () =>
    setConfirmPassSecureTextEntry(!confirmPassSecureTextEntry);

  // handle password change
  const onChangeUserOldPassword = value => {
    setUserData({...userData, user_old_password: value});
  };

  const onChangeUserPassword = value => {
    setUserData({...userData, user_password: value});
  };

  // handle confirm password change
  const onChangeUserConfirmPassword = value => {
    setUserData({...userData, user_confirm_password: value});
  };

  // on change inputs
  const onChangeOldPassword = value => {
    return value.trim().length >= 6;
  };

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

    //old password
    if (userData.user_old_Password.trim().length < 6) {
      setOldPasswordError('يجب ادخال كلمة السر القديمة بشكل صحيح !');
      errors++;
    } else {
      setOldPasswordError('');
    }

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

  const onEndEditingOldPass = value => {
    // old Password
    if (value.trim().length < 6 && value.trim().length != 0) {
      setOldPasswordError('يجب ادخال كلمة السر القديمة بشكل صحيح !');
      return false;
    } else {
      setOldPasswordError('');
      return true;
    }
  };
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
      <components.MainHeader title={'تغيير كلمة المرور'} haveBackButton />

      <View style={styles.textInputsContainer}>
        <View>
          <components.MainTextInput
            placeholder={'كلمة المرور القديمة'}
            inputRef={firstTextInputRef}
            // value={userData.user_old_Password}
            onChangeText={value => {
              onChangeUserOldPassword(value);
              if (onChangeOldPassword(value)) {
                setOldPasswordError('');
              }
            }}
            autoCapitalize="none"
            keyboardType={
              oldpassSecureTextEntry ? 'name-phone-pad' : 'visible-password'
            }
            blurOnSubmit={true}
            returnKeyType="next"
            onSubmitEditing={() => {
              firstTextInputRef.current.focus();
            }}
            secureTextEntry={oldpassSecureTextEntry}
            left={
              <components.SmallCircleButton onPress={handleVisibleOldPass}>
                <Icon
                  name={oldpassSecureTextEntry ? 'eye-off' : 'eye'}
                  size={ICONS.mdIcon}
                  color={oldpassSecureTextEntry ? COLORS.gray : COLORS.primary}
                />
              </components.SmallCircleButton>
            }
            onEndEditing={e => onEndEditingOldPass(e.nativeEvent.text)}
          />
          {oldPasswordError && (
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
              {oldPasswordError}
            </Text>
          )}
        </View>
        <View>
          <components.MainTextInput
            placeholder={'كلمة المرور الجديدة'}
            inputRef={secondTextInputRef}
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
              secondTextInputRef.current.focus();
            }}
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
        </View>

        <View>
          <components.MainTextInput
            placeholder={'تأكيد كلمة المرور الجديدة'}
            inputRef={thirdTextInputRef}
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
            returnKeyType="done"
            secureTextEntry={confirmPassSecureTextEntry}
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
      </View>

      <View style={styles.buttonContainer}>
        <components.MainButton
          title={'تغيير كلمة المرور'}
          loading={signupLoading}
          loadingSize="large"
          loadingColor={COLORS.white}
          onPress={submitUserData}
        />
      </View>
    </View>
  );
}

export default ChangePasswordScreen;
