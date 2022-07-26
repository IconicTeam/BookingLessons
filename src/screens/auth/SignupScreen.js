import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// get all components ==> components
import components from '../../components';
// get all constants
import {COLORS, ICONS, Icons, PADDINGS, RADIUS} from '../../constants';

// styles
import {buttonsStyles, generalStyles, textStyles} from '../../styles';

// native base
import {NativeBaseProvider, Avatar, ScrollView} from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// bottom sheet
import RBSheet from 'react-native-raw-bottom-sheet';

// images picker
import ImagePicker from 'react-native-image-crop-picker';

const SignupScreen = ({navigation}) => {
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
    setUserData({...userData, user_name: value});
  };

  // handle mobile change
  const onChangeUserMobile = value => {
    setUserData({...userData, user_mobile: value});
  };

  // handle subject change
  const onChangeUserSubject = value => {
    setUserData({...userData, user_subject: value});
  };

  // handle location change
  const onChangeUserLocation = value => {
    setUserData({...userData, user_lesson_location: value});
  };

  // handle password change
  const onChangeUserPassword = value => {
    setUserData({...userData, user_password: value});
  };

  // handle confirm password change
  const onChangeUserConfirmPassword = value => {
    setUserData({...userData, user_confirm_password: value});
  };

  // request camera permission
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
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
        setUserData({...userData, user_image: image.path});

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
        setUserData({...userData, user_image: image.path});

        // close action sheet
        RBSheetRef.current.close();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // delete user photo
  const deletePhoto = () => {
    setUserData({...userData, user_image: ''});

    // close action sheet
    RBSheetRef.current.close();
  };

  // return
  return (
    <components.Container>
      {/* general StatusBar */}
      <components.GeneralStatusBar />

      {/* main header */}
      <components.MainHeader
        navigation={navigation}
        title={'إنشاء حساب'}
        haveBackButton={true}
      />

      {/* body */}
      <components.Container>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {/* choose image section */}
          <components.Section
            type="center" // horizontal
            // resStyle={{backgroundColor: 'red'}}
          >
            <Avatar
              bg={COLORS.gray_overlay}
              size="xl"
              source={
                userData.user_image === ''
                  ? Icons.user_icon
                  : userData.user_image
              }>
              صورة
              <Avatar.Badge
                bg={COLORS.gray_overlay}
                style={[
                  generalStyles.badgeStyle,
                  {backgroundColor: COLORS.gray_overlay},
                ]}>
                <Pressable
                  style={buttonsStyles.badgeButtonStyle}
                  android_ripple={{color: COLORS.white_gray}}
                  onPress={() => RBSheetRef.current.open()}>
                  <Icon
                    name="camera"
                    color={COLORS.black}
                    size={ICONS.mdIcon}
                  />
                </Pressable>
              </Avatar.Badge>
            </Avatar>
          </components.Section>

          {/* inputs section */}
          <components.Section type="center">
            <components.MainTextInput
              placeholder="اسم حضرتكم"
              value={userData.user_name}
              onChangeText={onChangeUserName}
              autoCapitalize="words"
              keyboardType="default"
              blurOnSubmit={false}
              marginBottom={PADDINGS.mdPadding}
              maxLength={25}
              returnKeyType="next"
              secureTextEntry={false}
              onSubmitEditing={() => {
                secondTextInputRef.current.focus();
              }}
            />
            <components.MainTextInput
              inputRef={secondTextInputRef}
              placeholder="رقم الموبايل"
              value={userData.user_mobile}
              onChangeText={onChangeUserMobile}
              autoCapitalize="none"
              keyboardType="number-pad"
              blurOnSubmit={false}
              marginBottom={PADDINGS.mdPadding}
              maxLength={11}
              returnKeyType="next"
              secureTextEntry={false}
              onSubmitEditing={() => {
                thirdTextInputRef.current.focus();
              }}
            />
            <components.MainTextInput
              inputRef={thirdTextInputRef}
              placeholder="المادة"
              value={userData.user_subject}
              onChangeText={onChangeUserSubject}
              autoCapitalize="words"
              keyboardType="default"
              blurOnSubmit={false}
              marginBottom={PADDINGS.mdPadding}
              maxLength={25}
              returnKeyType="next"
              secureTextEntry={false}
              onSubmitEditing={() => {
                fourthTextInputRef.current.focus();
              }}
            />
            <components.MainTextInput
              inputRef={fourthTextInputRef}
              placeholder="عنوان الدرس"
              value={userData.user_lesson_location}
              onChangeText={onChangeUserLocation}
              autoCapitalize="none"
              keyboardType="default"
              blurOnSubmit={false}
              marginBottom={PADDINGS.mdPadding}
              // maxLength={50}
              returnKeyType="next"
              secureTextEntry={false}
              onSubmitEditing={() => {
                fifthTextInputRef.current.focus();
              }}
            />
            <components.MainTextInput
              inputRef={fifthTextInputRef}
              placeholder="كلمة المرور"
              value={userData.user_password}
              onChangeText={onChangeUserPassword}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              blurOnSubmit={false}
              marginBottom={PADDINGS.mdPadding}
              // maxLength={50}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() => {
                sixTextInputRef.current.focus();
              }}
              left={
                <components.SmallCircleButton onPress={() => alert('dsfs')}>
                  <Icon
                    name="eye-off"
                    size={ICONS.mdIcon}
                    color={COLORS.gray}
                  />
                </components.SmallCircleButton>
              }
            />
            <components.MainTextInput
              inputRef={sixTextInputRef}
              placeholder="تأكيد كلمة المرور"
              value={userData.user_confirm_password}
              onChangeText={onChangeUserConfirmPassword}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              blurOnSubmit={true}
              // marginBottom={PADDINGS.mdPadding}
              // maxLength={50}
              returnKeyType="done"
              secureTextEntry={true}
              // onSubmitEditing={() => {
              //   sixTextInputRef.current.focus();
              // }}
              left={
                <components.SmallCircleButton onPress={() => alert('dsfs')}>
                  <Icon
                    name="eye-off"
                    size={ICONS.mdIcon}
                    color={COLORS.gray}
                  />
                </components.SmallCircleButton>
              }
            />
          </components.Section>

          {/* signup button */}
          <components.Section type="center">
            <components.MainButton
              navigation={navigation}
              title="إنشاء حساب"
              width={'100%'}
              type="disabled" // for style
              disabled={true} // for disable and enable the button
            />
          </components.Section>

          {/* go to login screen */}
          <components.Section type="center">
            <Text style={textStyles.smTextStyle}>
              {'لديك حساب بالفعل؟ '}
              <Text
                style={[
                  textStyles.smTextStyle,
                  textStyles.primaryTextStyle,
                  textStyles.boldTextStyle,
                ]}>
                {'تسجيل دخول'}
              </Text>
            </Text>
          </components.Section>
        </ScrollView>

        {/* bottom sheet */}
        <RBSheet
          ref={RBSheetRef}
          // height={SIZES.bottomSheetHeight}
          animationType="fade"
          closeOnDragDown
          closeOnPressMask
          closeOnPressBack
          openDuration={700}
          closeDuration={700}
          dragFromTopOnly
          customStyles={{
            draggableIcon: {
              backgroundColor: COLORS.gray,
            },
            container: {
              borderTopLeftRadius: RADIUS.xxlRadius,
              borderTopRightRadius: RADIUS.xxlRadius,
              backgroundColor: COLORS.white,
              elevation: 1,
              zIndex: 5,
            },
          }}>
          {/* <View style={styles.RBSheetContentContainer}>
            <View style={styles.RBSheetTitleView}>
              <Text style={{...styles.RBSheetTitle, color: COLORS.text2}}>
                تحميل صورة
              </Text>
              <Text
                style={[styles.RBSheetSubTitle, {color: COLORS.gray}]}>
                قم باختيار الصورة الشخصية
              </Text>
            </View>
            <View style={styles.RBSheetBtnsView}>
              <TouchableOpacity
                activeOpacity={0.4}
                style={{
                  ...styles.RBSheetBtn,
                  backgroundColor: COLORS.primary,
                }}
                onPress={this.takePhoto}>
                <Text
                  style={{
                    ...styles.RBSheetBtnText,
                    color: COLORS.background,
                  }}>
                  التقاط صورة
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                style={{
                  ...styles.RBSheetBtn,
                  backgroundColor: COLORS.primary,
                  marginTop: PADDINGS.smallPadding,
                }}
                onPress={this.selectFromGallery}>
                <Text
                  style={{
                    ...styles.RBSheetBtnText,
                    color: COLORS.background,
                  }}>
                  اختيار من المعرض
                </Text>
              </TouchableOpacity>
              {user_image !== '' && (
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={{
                    ...styles.RBSheetBtn,
                    backgroundColor: COLORS.primary,
                    marginTop: PADDINGS.smallPadding,
                  }}
                  onPress={this.deletePhoto}>
                  <Text
                    style={{
                      ...styles.RBSheetBtnText,
                      color: COLORS.background,
                    }}>
                    مسح الصورة
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => this.RBSheetRef.current.close()}
                style={{
                  ...styles.RBSheetBtn,
                  backgroundColor: COLORS.primary,
                  marginTop: PADDINGS.smallPadding,
                }}>
                <Text
                  style={{
                    ...styles.RBSheetBtnText,
                    color: COLORS.background,
                  }}>
                  إلغاء
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <components.Section>
            <components.MainButton
              navigation={navigation}
              title="التقاط صورة"
              width={'100%'}
              // type="disabled"
              onPress={takePhoto}
            />
          </components.Section>
        </RBSheet>
      </components.Container>
    </components.Container>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
