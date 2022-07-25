import {View, Text, Pressable} from 'react-native';
import React from 'react';

// general styles like "container", "header", ...
import {generalStyles, textStyles} from '../../styles';

import buttons from '../buttons'; // if we use (import components from '../../components';) ==> Require a cycle

const MainHeader = ({navigation, title, haveBackButton, anotherButtons}) => {
  return (
    <View style={generalStyles.headerStyle}>
      {haveBackButton && (
        <buttons.BackButton
        // onPress={() => navigation.goBack()}
        />
      )}
      <View style={{flex: 1}}>
        <Text style={textStyles.lgTextStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default MainHeader;
