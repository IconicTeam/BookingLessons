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
    marginBottom: RFValue(PADDINGS.xsPadding),
  },
  textInputsContainer: {
    alignSelf: 'center',
    paddingHorizontal: PADDINGS.mdPadding + 10,
    height: RFValue(50),
    justifyContent: 'space-between',
    marginTop: RFValue(PADDINGS.lgPadding),
    marginBottom: RFValue(PADDINGS.xlPadding),
  },
  ButtonViewStyle: {
    marginTop: RFValue(PADDINGS.xlPadding),
    marginBottom: RFValue(PADDINGS.smPadding),
    paddingHorizontal: PADDINGS.mdPadding + 10,
  },
});
