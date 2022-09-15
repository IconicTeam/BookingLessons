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
  inputRef,
  blurOnSubmit,
  maxLength,
  returnKeyType,
  secureTextEntry,
  keyboardType,
  right,
  left,
  marginTop,
  autoCapitalize,
  onEndEditing,
}) => {
  return (
    <View
      style={[generalStyles.textInputContainerStyle, {marginTop: marginTop}]}>
      {right}
      <TextInput
        ref={inputRef}
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
        autoCapitalize={autoCapitalize}
        placeholderTextColor={COLORS.gray}
        onEndEditing={onEndEditing}
      />
      {left}
    </View>
  );
};

export default MainTextInput;
