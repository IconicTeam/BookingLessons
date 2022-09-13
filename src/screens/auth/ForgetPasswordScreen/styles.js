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
    marginBottom: RFValue(PADDINGS.smPadding),
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
    height: RFValue(130),
    justifyContent: 'space-between',
    marginTop: RFValue(PADDINGS.lgPadding),
    marginBottom: RFValue(PADDINGS.xlPadding),
  },
  ButtonViewStyle: {
    marginTop: RFValue(PADDINGS.lgPadding),
    marginBottom: RFValue(PADDINGS.smPadding),
    paddingHorizontal: PADDINGS.mdPadding + 10,
  },
});
