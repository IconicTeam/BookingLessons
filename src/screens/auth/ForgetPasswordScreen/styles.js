import {StyleSheet} from 'react-native';
import {
  COLORS,
  PADDINGS,
  FONTS,
  ICONS,
  RADIUS,
} from '../../../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    alignSelf: 'center',
    width: RFValue(300),
    height: RFValue(200),
    marginVertical: RFValue(PADDINGS.mdPadding),
  },
  hintTitle: {
    fontSize: RFValue(FONTS.h5),
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: RFValue(PADDINGS.xlPadding),
  },
  textInputsContainer: {
    alignSelf: 'center',
    paddingHorizontal: PADDINGS.mdPadding + 10,
    // height: RFValue(130),
    justifyContent: 'space-between',
    marginTop: RFValue(PADDINGS.lgPadding),
    marginBottom: RFValue(PADDINGS.mdPadding),
    // backgroundColor: '#f00',
  },
  ButtonViewStyle: {
    marginTop: RFValue(PADDINGS.mdPadding),
    marginBottom: RFValue(PADDINGS.mdPadding),
    paddingHorizontal: PADDINGS.mdPadding + 10,
    // backgroundColor: '#f00',
  },
});
