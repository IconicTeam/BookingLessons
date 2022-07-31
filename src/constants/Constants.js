import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  primary: '#374ef3',
  primary_overlay: '#dcdff3',
  background: '#ffffff', // '#f4f4f4',
  black: '#222222',
  white: '#ffffff',
  gray: 'gray',
  error: '#f86e87',
  warning: '#fdac71',
  success: '#6adaa4',
  white_gray: '#aaaaaa',
  overlay: '#00000010',
  textinput_selection: '#374ef350',
  gray_overlay: '#eeeeee',
  disabled: '#888888',
};

export const PADDINGS = {
  xsPadding: RFValue(5),
  smPadding: RFValue(10),
  mdPadding: RFValue(15),
  lgPadding: RFValue(20),
  xlPadding: RFValue(25),
};

export const RADIUS = {
  // general radius
  radius: 400,
  // more radius...
  xsRadius: 5,
  smRadius: 10,
  mdRadius: 15,
  lgRadius: 25,
  xlRadius: 30,
  xxlRadius: 35,
};

export const ICONS = {
  xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
  smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
  mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
  lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
  xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
};

export const FONTS = {
  h1: RFValue(35) >= 35 ? RFValue(35) : 30,
  h2: RFValue(30) >= 30 ? RFValue(30) : 25,
  h3: RFValue(25) >= 25 ? RFValue(25) : 20,
  h4: RFValue(20) >= 20 ? RFValue(20) : 17,
  h5: RFValue(15) >= 15 ? RFValue(15) : 14,
  h6: RFValue(11) >= 11 ? RFValue(10) : 11,
};
