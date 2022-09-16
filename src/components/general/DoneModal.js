import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, Lotties, PADDINGS, RADIUS} from '../../constants';

import {RFValue} from 'react-native-responsive-fontsize';

import Lottie from 'lottie-react-native';

import {textStyles} from '../../styles';

import Buttons from '../buttons';

const {width, height} = Dimensions.get('screen');

const DoneModal = ({onPress, title, description, btnText}) => {
  return (
    <View style={[styles.container, {backgroundColor: COLORS.overlay}]}>
      <View style={[styles.modal, {backgroundColor: COLORS.white}]}>
        <Lottie
          source={Lotties.done}
          autoPlay
          loop={false}
          style={styles.lottie}
        />
        {title && (
          <Text
            style={[
              textStyles.mdTextStyle,
              textStyles.boldTextStyle,
              {textAlign: 'center'},
            ]}>
            {title}
          </Text>
        )}
        {description && (
          <Text
            style={[
              textStyles.smTextStyle,
              textStyles.grayTextStyle,
              {
                textAlign: 'center',
                marginTop: PADDINGS.xsPadding,
                marginBottom: PADDINGS.xlPadding,
              },
            ]}>
            {description}
          </Text>
        )}
        <Buttons.MainButton title={btnText} width="100%" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: PADDINGS.xlPadding - 1,
  },
  modal: {
    width: width > height ? RFValue(300) : '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.mdRadius,
    paddingHorizontal: PADDINGS.xlPadding,
    paddingBottom: PADDINGS.xlPadding,
    elevation: 70,
  },
  lottie: {
    width: RFValue(100),
    height: RFValue(100),
  },
});

export default DoneModal;
