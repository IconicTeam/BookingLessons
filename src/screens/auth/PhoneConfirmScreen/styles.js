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
  textInputsContainer: {
    alignSelf: 'center',
    paddingHorizontal: PADDINGS.mdPadding + 10,
    // height: RFValue(50),
    justifyContent: 'space-between',
    marginTop: RFValue(PADDINGS.lgPadding),
    marginBottom: RFValue(PADDINGS.mdPadding),
  },
  ButtonViewStyle: {
    marginTop: RFValue(PADDINGS.mdPadding),
    marginBottom: RFValue(PADDINGS.mdPadding),
    paddingHorizontal: PADDINGS.mdPadding + 10,
  },
});
