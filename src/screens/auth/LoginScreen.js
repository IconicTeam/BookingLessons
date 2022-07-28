import * as React from "react"
import {
    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import components from '../../components';
// get all constants
import { COLORS, ICONS, Icons, Images, PADDINGS } from '../../constants';

// styles
import { buttonsStyles, generalStyles, textStyles } from '../../styles';

// native base
import { NativeBaseProvider, Avatar, ScrollView } from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_mobile: '',
            user_password: '',

        }
    }


    render() {
        return (
            <components.Container>
                <ScrollView>
                    {/* general StatusBar */}
                    <components.GeneralStatusBar />
                    <components.MainHeader

                        title={"تسجيل الدخول"}
                        haveBackButton={false}

                    />

                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={Images.image2}
                            style={{
                                width: RFValue(250),
                                height: RFValue(220),


                            }}
                        />
                    </View>
                    {/* inputs section */}
                    <components.Section>
                        <components.MainTextInput
                            placeholder={"رقم التلفون"}
                            marginBottom={10}
                            autoCapitalize="none"
                            keyboardType="number-pad"
                            maxLength={11}
                            value={this.state.user_mobile}
                            onChangeText={(value) => {
                                this.setState({
                                    user_mobile: value
                                })
                            }}

                        />

                        <components.MainTextInput

                            placeholder={"الرقم السرى"}
                            marginBottom={5}
                            value={this.state.user_password}
                            onChangeText={(value) => {
                                this.setState({
                                    user_password: value
                                })
                            }}
                            autoCapitalize="none"
                            keyboardType="name-phone-pad"
                            blurOnSubmit={true}
                            secureTextEntry={true}
                            left={
                                <components.SmallCircleButton onPress={() => alert()}>
                                    <Icon
                                        name="eye-off"
                                        size={ICONS.mdIcon}
                                        color={COLORS.gray}
                                    />
                                </components.SmallCircleButton>
                            }
                        />
                        <TouchableOpacity >
                            <Text style={{ textAlign: "right", color: COLORS.primary }}>هل نسيت الرقم السرى؟</Text>
                        </TouchableOpacity>
                    </components.Section>


                    <components.Section>
                        <components.MainButton
                            title="تسجيل الدخول"
                            width={'100%'}
                        // type="disabled"
                        // onPress={}
                        />
                        <View style={{ alignItems: "center", marginVertical: 20 }}>
                            <Text style={textStyles.smTextStyle}>او باستخدام</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            width: "30%",
                            alignSelf: "center",
                            justifyContent: "space-between"
                        }}>
                            <TouchableOpacity style={{
                                alignItems: "center",

                            }}>
                                <Icon
                                    name="facebook"
                                    color={COLORS.primary}
                                    size={ICONS.lgIcon}


                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon
                                    name="google"
                                    color={COLORS.error}
                                    size={ICONS.lgIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </components.Section>




                    <components.Section>
                        <View style={{
                            alignItems: "center",
                            marginTop: 50,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            <Text style={textStyles.smTextStyle}>هل لديك حساب بالفعل ؟</Text>
                            <TouchableOpacity style={{
                                alignItems: "center",

                            }}>
                                <Text style={[textStyles.smTextStyle,
                                textStyles.boldTextStyle,
                                { color: COLORS.primary }]}> انشاء حساب</Text>

                            </TouchableOpacity>
                        </View>
                    </components.Section>
                </ScrollView>
            </components.Container >

        )
    }
}

const styles = StyleSheet.create({});