import * as React from "react"
import {
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    Alert,
    ScrollView,
    StyleSheet,
    Keyboard,
    Pressable,
} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS, ICONS, PADDINGS } from "../src/constants";
export default class OneTimePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Verify_code1: '',
            Verify_code2: '',
            Verify_code3: '',
            Verify_code4: '',
            pressIn: true
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.refs.Verify_code1ref.focus();
        }, 50);
        this.refs.Verify_code2ref.setNativeProps({
            editable: false,
        });
        this.refs.Verify_code3ref.setNativeProps({
            editable: false,
        });
        this.refs.Verify_code4ref.setNativeProps({
            editable: false,
        });
    };
    completetextinput() {
        let pin1 = this.state.Verify_code1;
        let pin2 = this.state.Verify_code2;
        let pin3 = this.state.Verify_code3;
        let pin4 = this.state.Verify_code4;
        let press = this.state.pressIn;
        if (
            pin1.length == 1 &&
            pin2.length == 1 &&
            pin3.length == 1 &&
            pin4.length == 1
        ) {
            press = false;
        } else {
            press = true;
        }

        this.setState({
            pressIn: press,
        });
    }
    render() {
        return (
            <View style={styles.viewcontiner}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        paddingHorizontal: PADDINGS.padding,
                    }}
                    keyboardShouldPersistTaps={'always'}
                >
                    <View style={styles.view2}>
                        <TouchableOpacity style={styles.touchableopicty1}>
                            <Icon
                                name="arrow-right"
                                size={20}
                            />
                        </TouchableOpacity>
                        <Text
                            style=
                            {{
                                fontSize: 20,
                                color: COLORS.black,
                                marginLeft: 15,
                                fontFamily: 'Tajawal',
                            }}>
                            أدخل الكود
                        </Text>
                    </View>
                    <View style={styles.view3}>
                        <Image
                            source=
                            {{
                                uri: 'https://www.cellcom.eu/phpthumb/cache/uploads/sms_toepassingen/Wachtwoord-via-sms-1/w400h2400zc0q100/Wachtwoord-via-sms-1.png'
                            }}
                            style=
                            {{
                                width: 300,
                                height: 300,
                                resizeMode: "contain",
                                
                            }}
                        />
                    </View>
                    <View style={styles.view3}>
                        <Text style={{ fontSize: 25, fontWeight: "600", color: COLORS.black,fontFamily: 'Tajawal', }}>
                            من فضلك قم بإدخال
                        </Text>
                        <Text style={{ fontSize: 25, fontWeight: "600", color: COLORS.black, marginTop: 10,fontFamily: 'Tajawal', }}>
                            الكود المرسل إليك المكون من 4 أرقام
                        </Text>
                    </View>
                    <View style={styles.view4}>
                        <TextInput
                            maxLength={1}
                            ref={'Verify_code1ref'}
                            keyboardType="number-pad"
                            value={this.state.Verify_code1}
                            onChangeText={async value => {
                                if (value.length == 1) {
                                    await this.setState({ Verify_code1: value[0] });
                                    this.refs.Verify_code2ref.setNativeProps({
                                        editable: true,
                                    });
                                    setTimeout(() => {
                                        this.refs.Verify_code2ref.focus();
                                    }, 0);
                                } else if (value.length == 4) {
                                    this.refs.Verify_code2ref.setNativeProps({
                                        editable: true,
                                    });
                                    this.refs.Verify_code3ref.setNativeProps({
                                        editable: true,
                                    });
                                    this.refs.Verify_code4ref.setNativeProps({
                                        editable: true,
                                    });
                                    setTimeout(() => {
                                        this.refs.Verify_code4ref.focus();
                                    }, 0);
                                    await this.setState({
                                        Verify_code1: value[0],
                                        Verify_code2: value[1],
                                        Verify_code3: value[2],
                                        Verify_code4: value[3],
                                    });
                                } else if (value.length == 0) {
                                    this.refs.Verify_code2ref.setNativeProps({
                                        editable: false,
                                    });
                                    await this.setState({ Verify_code1: '' });
                                }
                                this.completetextinput();
                            }}
                            style={styles.textInput}>
                        </TextInput>
                        <TextInput
                            maxLength={1}
                            ref={'Verify_code2ref'}
                            keyboardType="number-pad"
                            value={this.state.Verify_code2}
                            onChangeText={async value => {
                                await this.setState({ Verify_code2: value });
                                if (value != '') {
                                    this.refs.Verify_code3ref.setNativeProps({
                                        editable: true,
                                    });
                                    setTimeout(() => {
                                        this.refs.Verify_code3ref.focus();
                                    }, 0);
                                } else {
                                    this.refs.Verify_code3ref.setNativeProps({
                                        editable: false,
                                    });
                                    this.refs.Verify_code1ref.focus();
                                }
                                this.completetextinput();
                            }}
                            style={styles.textInput}>
                        </TextInput>
                        <TextInput
                            maxLength={1}
                            ref={'Verify_code3ref'}
                            keyboardType="number-pad"
                            value={this.state.Verify_code3}
                            onChangeText={async value => {
                                await this.setState({
                                    Verify_code3: value,
                                });
                                if (value != '') {
                                    this.refs.Verify_code4ref.setNativeProps({
                                        editable: true,
                                    });
                                    setTimeout(() => {
                                        this.refs.Verify_code4ref.focus();
                                    }, 0);
                                } else {
                                    this.refs.Verify_code4ref.setNativeProps({
                                        editable: false,
                                    });
                                    this.refs.Verify_code2ref.focus();
                                }
                                this.completetextinput();
                            }}
                            style={styles.textInput}>
                        </TextInput>
                        <TextInput
                            maxLength={1}
                            ref={'Verify_code4ref'}
                            keyboardType="number-pad"
                            value={this.state.Verify_code4}
                            onChangeText={async value => {
                                await this.setState({ Verify_code4: value });
                                if (value.length == 0) {
                                    this.refs.Verify_code3ref.focus();
                                }
                                this.completetextinput();
                            }}
                            style={styles.textInput}>
                        </TextInput>
                    </View>
                    <View style={styles.view5}>
                        <Text style={{
                            fontSize: 20,
                            color: '#000',
                            fontFamily: 'Tajawal',
                            marginRight: 3,
                        }}>ألم تستلم الرمز؟ </Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 20,
                                color: COLORS.primary,
                                fontFamily: 'Tajawal',
                            }}>أعد إرسال الرمز</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        disabled={this.state.pressIn ? true : false}
                        style={[styles.touchableopicty2, { backgroundColor: this.state.pressIn ? COLORS.gray : COLORS.primary, }]}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: "600",
                                color: COLORS.white
                            }}
                        >تأكيد
                        </Text>
                    </TouchableOpacity>
                </ScrollView >
            </View >
        )
    }
}
const styles = StyleSheet.create({
    viewcontiner: {
        backgroundColor: COLORS.background,
        flex: 1

    },
    view2: {
        flexDirection: "row",
        width: "90%",
        height: 30,
        alignItems: "center",
        marginVertical: 30,
    },
    view3: {
        alignItems: "center",
        justifyContent: "center"
    },
    view4: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30
    },
    touchableopicty1: {
        width: 40,
        height: 40,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        elevation: 3,
        borderRadius: 5,
        marginLeft: 10
    },
    textInput: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        textAlign: 'center',
    },
    touchableopicty2: {
        width: 150,
        height: 60,
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"

    },
    view5: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop:20
    },
})
