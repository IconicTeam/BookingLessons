import React from 'react';
import {View, Text, TextInput} from 'react-native';

// constants
import {COLORS} from '../../constants';

// all styles
import {generalStyles} from '../../styles';

const MainTextInput = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  ref,
  blurOnSubmit,
  maxLength,
  returnKeyType,
  secureTextEntry,
  keyboardType,
  right,
  left,
  marginBottom,
}) => {
  return (
    <View
      style={[
        generalStyles.textInputContainerStyle,
        {marginBottom: marginBottom},
      ]}>
      {right}
      <TextInput
        ref={ref}
        style={generalStyles.textInputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        selectionColor={COLORS.textinput_selection}
      />
      {left}
    </View>
  );
};

export default MainTextInput;
