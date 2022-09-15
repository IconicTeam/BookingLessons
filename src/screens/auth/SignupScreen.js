import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// get all components ==> components
import components from '../../components';

// get all constants
import { COLORS, ICONS, Icons, PADDINGS, RADIUS } from '../../constants';

// styles
import { buttonsStyles, generalStyles, textStyles } from '../../styles';

// native base
import { NativeBaseProvider, Avatar } from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// bottom sheet
import RBSheet from 'react-native-raw-bottom-sheet';

// images picker
import ImagePicker from 'react-native-image-crop-picker';

import { RFValue } from 'react-native-responsive-fontsize';

const SignupScreen = ({ navigation }) => {
  // state...
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

  // errors
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  // RBSheet height
  const [bottomSheetHeight, setBottomSheetHeight] = useState();
  const [ready, setReady] = useState(false);

  // botton loading
  const [openCameraLoading, setOpaenCameraLoading] = useState(false);
  const [chooseFromGalleryLoading, setChooseFromGalleryLoading] =
    useState(false);
  // signup loading
  const [signupLoading, setSignupLoading] = useState(false);

  // passowrd show
  const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);
  const [confirmPassSecureTextEntry, setConfirmPassSecureTextEntry] =
    useState(true);

  // refs...
  // inputs refs
  const secondTextInputRef = useRef();
  const thirdTextInputRef = useRef();
  const fourthTextInputRef = useRef();
  const fifthTextInputRef = useRef();
  const sixTextInputRef = useRef();

  // bottom sheet ref
  const RBSheetRef = useRef();

  // handle name change
  const onChangeUserName = value => {
    setUserData({ ...userData, user_name: value });
  };

  // handle mobile change
  const onChangeUserMobile = value => {
    setUserData({ ...userData, user_mobile: value });
  };

  // handle subject change
  const onChangeUserSubject = value => {
    setUserData({ ...userData, user_subject: value });
  };

  // handle location change
  const onChangeUserLocation = value => {
    setUserData({ ...userData, user_lesson_location: value });
  };

  // handle password change
  const onChangeUserPassword = value => {
    setUserData({ ...userData, user_password: value });
  };

  // handle confirm password change
  const onChangeUserConfirmPassword = value => {
    setUserData({ ...userData, user_confirm_password: value });
  };

  // request camera permission
  const requestCameraPermission = async type => {
    // loading
    if (type == 'takePhoto') {
      setOpaenCameraLoading(true);
    } else {
      setChooseFromGalleryLoading(true);
    }

    // permission
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]).then(result => {
      if (
        result['android.permission.CAMERA'] &&
        result['android.permission.READ_EXTERNAL_STORAGE'] === 'granted'
      ) {
        if (type == 'takePhoto') {
          takePhoto();
        } else {
          selectFromGallery();
        }
      } else if (
        result['android.permission.CAMERA'] ||
        result['android.permission.READ_EXTERNAL_STORAGE'] === 'never_ask_again'
      ) {
        console.log(
          'Please Go into Settings and Allow permissions to continue',
        );
      }
    });

    // stop loading
    setOpaenCameraLoading(false);
    setChooseFromGalleryLoading(false);
  };

  // Take a photo
  const takePhoto = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 300,
      cropping: true,
      mediaType: 'photo',
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      cropperStatusBarColor: COLORS.black,
      cropperActiveWidgetColor: COLORS.primary,
      cropperToolbarTitle: 'تعديل الصىورة',
      cropperToolbarColor: COLORS.background,
      cropperToolbarWidgetColor: COLORS.black,
    })
      .then(image => {
        // console.log(image);
        setUserData({ ...userData, user_image: image.path });

        // close action sheet
        RBSheetRef.current.close();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // select photo from gallery
  const selectFromGallery = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 300,
      cropping: true,
      mediaType: 'photo',
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      cropperStatusBarColor: COLORS.black,
      cropperActiveWidgetColor: COLORS.primary,
      cropperToolbarTitle: 'تعديل الصىورة',
      cropperToolbarColor: COLORS.background,
      cropperToolbarWidgetColor: COLORS.black,
    })
      .then(image => {
        // console.log(image);
        setUserData({ ...userData, user_image: image.path });

        // close action sheet
        RBSheetRef.current.close();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // delete user photo
  const deletePhoto = () => {
    setUserData({ ...userData, user_image: '' });

    // close action sheet
    RBSheetRef.current.close();
  };

  // show pass functions
  const handleVisiblePass = () => setPassSecureTextEntry(!passSecureTextEntry);
  const handleVisibleConfirmPass = () =>
    setConfirmPassSecureTextEntry(!confirmPassSecureTextEntry);

  // submit form
  const submitUserData = () => {
    setSignupLoading(true);
    let errors = 0;

    // name
    if (userData.user_name.trim().length == 0) {
      setNameError('الاسم مطلوب!');
      errors++;
    } else if (userData.user_name.trim().length < 3) {
      setNameError('برجاء ادخال اسم صالح!');
      errors++;
    } else {
      setNameError('');
    }

    // mobile
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    if (reg.test(userData.user_mobile.trim()) == false) {
      setMobileError('برجاء ادخال رقم صالح!');
      errors++;
    } else {
      setMobileError('');
    }

    // subject
    if (userData.user_subject.trim().length == 0) {
      setSubjectError('المادة مطلوبة!');
      errors++;
    } else {
      setSubjectError('');
    }

    // location
    if (userData.user_lesson_location.trim().length == 0) {
      setLocationError('مكان الدرس مطلوب!');
      errors++;
    } else {
      setLocationError('');
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

    // signup
    if (errors == 0) {
      signup(userData);
    }

    setSignupLoading(false);
  };

  // signup
  const signup = data => {
    alert(JSON.stringify(data));
  };

  const onEndEditingName = value => {
    // name
    if (value.trim().length < 3 && value.trim().length != 0) {
      setNameError('برجاء ادخال اسم صالح!');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

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

  const onEndEditingSubject = value => {
    // subject
    if (value.trim().length == 0 && value.trim().length != 0) {
      setSubjectError('المادة مطلوبة!');
      return false;
    } else {
      setSubjectError('');
      return true;
    }
  };

  const onEndEditingLocation = value => {
    // location
    if (value.trim().length == 0) {
      setLocationError('مكان الدرس مطلوب!');
      return false;
    } else {
      setLocationError('');
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

  // on change inputs
  const onChangeName = value => {
    return value.trim().length >= 3;
  };

  const onChangeMobile = value => {
    let reg = /^(\+201|01){1}[0-2,5][0-9]{8}$/;
    return reg.test(value.trim());
  };

  const onChangesSubject = value => {
    return value.trim().length > 0;
  };

  const onChangeLocation = value => {
    return value.trim().length > 0;
  };

  const onChangePassword = value => {
    return value.trim().length >= 6;
  };

  const onChangeConfirmPassword = value => {
    return value.trim() == userData.user_password.trim();
  };

  // return
  return (
    <components.Container>
      {/* main header */}
      <components.MainHeader
        navigation={navigation}
        title={'إنشاء حساب'}
        haveBackButton={true}
      />

      {/* body */}
      {/* <components.Container> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {/* choose image section */}
        <components.Section
          type="center" // horizontal
        >
          <Avatar
            bg={COLORS.gray_overlay}
            size="xl"
            style={generalStyles.avatarStyle}
            source={
              userData.user_image === ''
                ? Icons.user_icon
                : { uri: userData.user_image }
            }>
            صورة
            <Avatar.Badge
              bg={COLORS.gray_overlay}
              style={[
                generalStyles.badgeStyle,
                { backgroundColor: COLORS.gray_overlay },
              ]}>
              <Pressable
                style={buttonsStyles.badgeButtonStyle}
                android_ripple={{ color: COLORS.white_gray }}
                onPress={() => RBSheetRef.current.open()}>
                <Icon name="camera" color={COLORS.black} size={ICONS.mdIcon} />
              </Pressable>
            </Avatar.Badge>
          </Avatar>
        </components.Section>

        {/* inputs section */}
        <components.Section type="center">
          <components.MainTextInput
            placeholder="اسم حضرتكم"
            value={userData.user_name}
            onChangeText={value => {
              onChangeUserName(value);
              if (onChangeName(value)) {
                setNameError('');
              }
            }}
            autoCapitalize="words"
            keyboardType="default"
            blurOnSubmit={false}
            // marginTop={PADDINGS.mdPadding}
            maxLength={25}
            returnKeyType="next"
            secureTextEntry={false}
            onSubmitEditing={() => {
              secondTextInputRef.current.focus();
            }}
            onEndEditing={e => onEndEditingName(e.nativeEvent.text)}
          />
          {nameError && (
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
              {nameError}
            </Text>
          )}
          <components.MainTextInput
            inputRef={secondTextInputRef}
            placeholder="رقم الموبايل"
            value={userData.user_mobile}
            onChangeText={value => {
              onChangeUserMobile(value);
              if (onChangeMobile(value)) {
                setMobileError('');
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
              thirdTextInputRef.current.focus();
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
          <components.MainTextInput
            inputRef={thirdTextInputRef}
            placeholder="المادة"
            value={userData.user_subject}
            onChangeText={value => {
              onChangeUserSubject(value);
              if (onChangesSubject(value)) {
                setSubjectError('');
              }
            }}
            autoCapitalize="words"
            keyboardType="default"
            blurOnSubmit={false}
            marginTop={PADDINGS.mdPadding}
            maxLength={25}
            returnKeyType="next"
            secureTextEntry={false}
            onSubmitEditing={() => {
              fourthTextInputRef.current.focus();
            }}
            onEndEditing={e => onEndEditingSubject(e.nativeEvent.text)}
          />
          {subjectError && (
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
              {subjectError}
            </Text>
          )}
          <components.MainTextInput
            inputRef={fourthTextInputRef}
            placeholder="عنوان الدرس"
            value={userData.user_lesson_location}
            onChangeText={value => {
              onChangeUserLocation(value);
              if (onChangeLocation(value)) {
                setLocationError('');
              }
            }}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            marginTop={PADDINGS.mdPadding}
            // maxLength={50}
            returnKeyType="next"
            secureTextEntry={false}
            onSubmitEditing={() => {
              fifthTextInputRef.current.focus();
            }}
            onEndEditing={e => onEndEditingLocation(e.nativeEvent.text)}
          />
          {locationError && (
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
              {locationError}
            </Text>
          )}
          <components.MainTextInput
            inputRef={fifthTextInputRef}
            placeholder="كلمة المرور"
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
            marginTop={PADDINGS.mdPadding}
            // maxLength={50}
            returnKeyType="next"
            secureTextEntry={passSecureTextEntry}
            onSubmitEditing={() => {
              sixTextInputRef.current.focus();
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
          <components.MainTextInput
            inputRef={sixTextInputRef}
            placeholder="تأكيد كلمة المرور"
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
            // maxLength={50}
            returnKeyType="done"
            secureTextEntry={confirmPassSecureTextEntry}
            // onSubmitEditing={() => {
            //   sixTextInputRef.current.focus();
            // }}
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
                  alignSelf: 'flex-start',
                },
              ]}>
              {confirmPassError}
            </Text>
          )}
        </components.Section>

        {/* signup button */}
        <components.Section type="center">
          <components.MainButton
            title="إنشاء حساب"
            width={'100%'}
            // type="disabled" // for style
            // disabled={true} // for disable and enable the button
            loading={signupLoading}
            loadingSize="large"
            loadingColor={COLORS.white}
            onPress={submitUserData}
          />
        </components.Section>

        {/* go to login screen */}
        <components.Section
          type="horizontal"
          resStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={textStyles.smTextStyle}>{'لديك حساب بالفعل؟ '}</Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={[
                textStyles.smTextStyle,
                textStyles.primaryTextStyle,
                textStyles.boldTextStyle,
              ]}>
              {'تسجيل دخول'}
            </Text>
          </TouchableOpacity>
        </components.Section>
      </ScrollView>

      {/* bottom sheet */}
      <RBSheet
        ref={RBSheetRef}
        height={
          userData.user_image
            ? RFValue(45) >= 40
              ? RFValue(45) * 4 + 8 * PADDINGS.mdPadding + RFValue(45) + 5
              : 40 * 4 + 8 * PADDINGS.mdPadding + RFValue(45) + 5
            : RFValue(45) >= 40
              ? RFValue(45) * 3 + 7 * PADDINGS.mdPadding + RFValue(45) + 5
              : 40 * 3 + 7 * PADDINGS.mdPadding + RFValue(45) + 5
        }
        animationType="slide"
        closeOnDragDown
        closeOnPressMask
        closeOnPressBack
        openDuration={1200}
        closeDuration={800}
        dragFromTopOnly
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: COLORS.gray,
          },
          container: {
            // minHeight: 300,
            borderTopLeftRadius: RADIUS.xxlRadius,
            borderTopRightRadius: RADIUS.xxlRadius,
            backgroundColor: COLORS.white,
            elevation: 15,
            zIndex: 5,
          },
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <components.Section resStyle={{ paddingTop: PADDINGS.xsPadding }}>
            {/* bottom sheet Title */}
            <components.Section
              type="center"
              resStyle={{
                paddingVertical: 0,
                paddingBottom: PADDINGS.mdPadding,
              }}>
              <Text style={[textStyles.lgTextStyle, textStyles.boldTextStyle]}>
                تحميل صورة
              </Text>
              <Text style={[textStyles.mdTextStyle, textStyles.grayTextStyle]}>
                قم باختيار الصورة الشخصية
              </Text>
            </components.Section>

            {/* bottom sheet bodey */}
            <components.MainButton
              title="التقاط صورة"
              width={'100%'}
              // type="disabled"
              onPress={() => requestCameraPermission('takePhoto')}
              resStyle={{ marginBottom: PADDINGS.mdPadding }}
              loading={openCameraLoading}
              loadingColor={COLORS.white}
              loadingSize="large"
            />
            <components.MainButton
              title="اختيار من المعرض"
              width={'100%'}
              // type="disabled"
              onPress={() => requestCameraPermission('selectFromGallery')}
              resStyle={{ marginBottom: PADDINGS.mdPadding }}
              loading={chooseFromGalleryLoading}
              loadingColor={COLORS.white}
              loadingSize="large"
            />
            {userData.user_image !== '' && (
              <components.MainButton
                title="مسح الصورة"
                width={'100%'}
                // type="disabled"
                onPress={deletePhoto}
                resStyle={{ marginBottom: PADDINGS.mdPadding }}
              />
            )}
            <components.MainButton
              title="إلغاء"
              width={'100%'}
              // type="disabled"
              onPress={() => RBSheetRef.current.close()}
            />
          </components.Section>
        </ScrollView>
      </RBSheet>
      {/* </components.Container> */}
    </components.Container>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
