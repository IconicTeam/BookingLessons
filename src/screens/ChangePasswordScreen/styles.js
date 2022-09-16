import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, PADDINGS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  textInputsContainer: {
    margin: PADDINGS.mdPadding + 10,
    height: RFValue(210),
    justifyContent: 'space-between',
    marginVertical: PADDINGS.xlPadding,
  },
  buttonContainer: {
    margin: PADDINGS.mdPadding + 10,
  },
});
