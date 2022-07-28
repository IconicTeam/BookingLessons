import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {COLORS, FONTS, PADDINGS, RADIUS} from '../constants';

import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('screen');

export const generalStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerStyle: {
    width: width,
    padding: PADDINGS.mdPadding,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5,
  },
  sectionStyle: {
    width: '100%',
    paddingVertical: PADDINGS.mdPadding,
    paddingHorizontal: PADDINGS.mdPadding + 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: {
    width: RFValue(100) >= 100 ? RFValue(100) : 80,
    height: RFValue(100) >= 100 ? RFValue(100) : 80,
    // minWidth: 80,
    // minHeight: 80,
  },
  badgeStyle: {
    width: RFValue(40),
    height: RFValue(40),
    position: 'absolute',
    left: -PADDINGS.smPadding,
    borderColor: COLORS.background,
    overflow: 'hidden',
  },
  textInputContainerStyle: {
    width: '100%',
    // minHeight: 40,
    height: RFValue(45) >= 45 ? RFValue(45) : 40,
    borderRadius: RADIUS.smRadius,
    backgroundColor: COLORS.gray_overlay,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: PADDINGS.smPadding,
    color: COLORS.black,
    fontSize: FONTS.h5,
    textAlign: 'right',
  },
  textInputRightStyle: {
    marginLeft: PADDINGS.smPadding,
  },
  textInputLeftStyle: {
    marginRight: PADDINGS.smPadding,
  },

textInput_otp: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: COLORS.gray_overlay,
    borderRadius: 7,
    textAlign: 'center',
}
});

export const buttonsStyles = StyleSheet.create({
  mainButtonStyle: {
    minWidth: '50%',
    // minHeight: 40,
    height: RFValue(45) >= 45 ? RFValue(45) : 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.smRadius,
    paddingHorizontal: PADDINGS.lgPadding,
  },
  primaryButtonStyle: {
    backgroundColor: COLORS.primary,
  },
  disabledButtonStyle: {
    backgroundColor: COLORS.disabled,
  },
  secondaryButtonStyle: {
    padding: PADDINGS.xsPadding,
  },
  backButtonContainerStyle: {
    // minWidth: 35,
    // minHeight: 35,
    width: RFValue(40) >= 40 ? RFValue(40) : 35,
    height: RFValue(40) >= 40 ? RFValue(40) : 35,
    borderRadius: RADIUS.radius,
    overflow: 'hidden',
    marginRight: PADDINGS.mdPadding,
  },
  backButtonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeButtonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smCircleStyle: {
    // minWidth: 35,
    // minHeight: 35,
    width: RFValue(40) >= 40 ? RFValue(40) : 35,
    height: RFValue(40) >= 40 ? RFValue(40) : 35,
    borderRadius: RADIUS.radius,
    overflow: 'hidden',
  },
  smCircleButtonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textStyles = StyleSheet.create({
  xsTextStyle: {
    fontSize: FONTS.h6,
    color: COLORS.black,
  },
  smTextStyle: {
    fontSize: FONTS.h5,
    color: COLORS.black,
  },
  mdTextStyle: {
    fontSize: FONTS.h4,
    color: COLORS.black,
  },
  lgTextStyle: {
    fontSize: FONTS.h3,
    color: COLORS.black,
  },
  xlTextStyle: {
    fontSize: FONTS.h2,
    color: COLORS.black,
  },
  xxlTextStyle: {
    fontSize: FONTS.h1,
    color: COLORS.black,
  },
  whiteTextStyle: {
    color: COLORS.white,
  },
  grayTextStyle: {
    color: COLORS.gray,
  },
  primaryTextStyle: {
    color: COLORS.primary,
  },
  boldTextStyle: {
    fontWeight: '600',
  },
});
