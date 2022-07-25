import React, {useEffect} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// get all components ==> components
import components from '../../components';
// get all constants
import {COLORS, ICONS, Icons, PADDINGS} from '../../constants';

// styles
import {buttonsStyles, generalStyles} from '../../styles';

// native base
import {NativeBaseProvider, Avatar, ScrollView} from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupScreen = ({navigation}) => {
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
        <ScrollView>
          {/* choose image section */}
          <components.Section
            type="center" // horizontal
            // resStyle={{backgroundColor: 'red'}}
          >
            <Avatar
              bg={COLORS.primary_overlay}
              size="xl"
              source={Icons.user_icon}>
              صورة
              <Avatar.Badge
                bg={COLORS.primary_overlay}
                style={[
                  generalStyles.badgeStyle,
                  {backgroundColor: COLORS.primary_overlay},
                ]}>
                <Pressable
                  style={buttonsStyles.badgeButtonStyle}
                  android_ripple={{color: COLORS.white_gray}}
                  onPress={() => alert('open bottom sheet')}>
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
          <components.Section>
            <components.MainTextInput />
          </components.Section>
        </ScrollView>
      </components.Container>
    </components.Container>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
