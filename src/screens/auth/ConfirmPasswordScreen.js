import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, RADIUS} from '../../constants/Constants';
const {width, height} = Dimensions.get('screen');
export class ConfirmPasswordScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: width,
              height: height * 0.85,
              justifyContent: 'space-between',
            }}>
            <View style={styles.header}>
              <Text style={styles.textHeaderStyle}>ادخل كلمة المرور</Text>
            </View>
            <View style={styles.imageViewStyle}>
              <Image
                style={styles.imageStyle}
                source={require('../../assets/images/confirm.png')}
              />
            </View>
            <View style={styles.viewTextStyle}>
              <Text style={styles.textStyle}>من فضلك قم بادخال الرقم</Text>
              <Text style={styles.textStyle}>لاستلام كود التأكيد</Text>
            </View>
            <View style={styles.textInputViewStyle}>
              <TextInput
                secureTextEntry={true}
                style={styles.textInputStyle}
                placeholder="الرقم السري الجديد"
                placeholderTextColor={'#aaa'}
              />
            </View>
            <View style={styles.textInputViewStyle}>
              <TextInput
                secureTextEntry={true}
                style={styles.textInputStyle}
                placeholder="تأكيد الرقم السري "
                placeholderTextColor={'#aaa'}
              />
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonStyle}>
              <Text style={styles.textButtonStyle}>تأكيد</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff',
  },
  header: {
    margin: height * 0.015,
  },
  textHeaderStyle: {
    fontSize: FONTS.h1,
    color: '#000',
    fontWeight: 'bold',
  },
  imageViewStyle: {
    alignSelf: 'center',
  },
  imageStyle: {
    width: width * 0.8,
    height: height * 0.3,
    borderRadius: RADIUS.smRadius,
  },
  viewTextStyle: {
    alignSelf: 'center',
    width: width * 0.5,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: FONTS.h5,
    color: '#aaa',
  },
  textInputViewStyle: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: '#eee',
    alignSelf: 'center',
    borderRadius: RADIUS.smRadius,
    justifyContent: 'center',
  },
  textInputStyle: {
    paddingHorizontal: width * 0.04,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonStyle: {
    width: width * 0.5,
    height: height * 0.07,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.mdRadius,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textButtonStyle: {
    color: '#fff',
    fontSize: FONTS.h3,
    fontWeight: 'bold',
  },
});
export default ConfirmPasswordScreen;
