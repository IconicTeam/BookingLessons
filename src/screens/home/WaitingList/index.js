import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import MainHeader from '../../../components/general/MainHeader';
import MainTextInput from '../../../components/general/MainTextInput';
import SmallCircleButton from '../../../components/buttons/SmallCircleButton';
import Icon from 'react-native-vector-icons/AntDesign';
import styles, {dropdownStyles} from './styles';
import {COLORS, FONTS, ICONS} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {textStyles} from '../../../styles';

// data of dropdown

const level = [
  {label: 'الصف الاول', value: '1'},
  {label: 'الصف الثاني', value: '2'},
  {label: 'الصف الثالث', value: '3'},
];
const group = [
  {label: 'المجموعة الاولي ', value: '1'},
  {label: 'المجموعة الثانية ', value: '2'},
  {label: ' المجموعة الثالثة', value: '3'},
];

// page main component
function Waiting(props) {
  // state of data
  const [students, setStudents] = useState([
    {
      studentName: 'عبدالرحمن محمد عياد',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'يوسف محمد عياد',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'عدي حاتم عتمان',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'عبدالرحمن هاني الشاذلي',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'معاذ محمد عياد',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'يوسف محمد عبدالمنعم',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'علي عصام ابو رميه',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
    {
      studentName: 'عمر محمد الدريني',
      studentNumber: '01026669167',
      studentPhoto: require('../../../assets/icons/user.png'),
    },
  ]);

  const [filteredStudents, setFilteredStudents] = useState([...students]);
  const [onChangeValue, setOnChangeValue] = useState(0);
  const [emtyArray, setEmtyArray] = useState(
    'الطالب غير موجود من فضلك تأكد من صحة الاسم',
  );

  // Functions
  function search(val) {
    if (val) {
      let filteredData = students.filter(({studentName}) =>
        studentName.trim().toUpperCase().includes(val.trim().toUpperCase()),
      );
      setFilteredStudents(filteredData);
    } else {
      setFilteredStudents(students);
    }
  }

  function deleteItem(index) {
    let newData = [...filteredStudents];
    let newItems = newData.filter(el => el !== newData[index]);
    setFilteredStudents(newItems);
  }

  //dropdown component
  const DropdownComponent = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const renderLabel1 = () => {
      if (value1 || isFocus1) {
        return (
          <Text style={[dropdownStyles.label, isFocus1 && {color: 'blue'}]}>
            الصفوف
          </Text>
        );
      }
      return null;
    };

    const renderLabel2 = () => {
      if (value2 || isFocus2) {
        return (
          <Text style={[dropdownStyles.label, isFocus2 && {color: 'blue'}]}>
            المجموعات
          </Text>
        );
      }
      return null;
    };

    //return of dropdown
    return (
      <View style={styles.dropdownView}>
        <View style={dropdownStyles.container}>
          {renderLabel1()}
          <Dropdown
            style={[
              dropdownStyles.dropdowns,
              {marginRight: RFValue(5)},
              isFocus1 && {borderColor: 'blue'},
            ]}
            placeholderStyle={dropdownStyles.placeholderStyle}
            selectedTextStyle={dropdownStyles.selectedTextStyle}
            inputSearchStyle={dropdownStyles.inputSearchStyle}
            iconStyle={dropdownStyles.iconStyle}
            data={level}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? 'اختر الصف ' : 'اختر'}
            searchPlaceholder="البحث"
            value={value1}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setValue1(item.value1);
              setIsFocus1(false);
              setIsDisabled(false);
            }}
          />
        </View>

        <View style={dropdownStyles.container}>
          {renderLabel2()}
          <Dropdown
            style={[
              dropdownStyles.dropdowns,
              isFocus2 && {borderColor: 'blue'},
            ]}
            placeholderStyle={dropdownStyles.placeholderStyle}
            selectedTextStyle={dropdownStyles.selectedTextStyle}
            inputSearchStyle={dropdownStyles.inputSearchStyle}
            iconStyle={dropdownStyles.iconStyle}
            data={group}
            search
            disable={isDisabled}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'اختر المجموعة' : 'اختر'}
            searchPlaceholder="البحث"
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value2);
              setIsFocus2(false);
            }}
          />
        </View>
      </View>
    );
  };
  //

  // renderitem of FlatList
  const handlerRenderItem = ({item, index}) => {
    return (
      <View style={styles.studentDataStyle}>
        <View style={styles.imageNameStyel}>
          <Image
            style={styles.studentImage}
            source={require('../../../assets/icons/user.png')}
          />
          <View style={styles.namePhoneWrapper}>
            <Text style={styles.studentName}>{item.studentName}</Text>
            <Text style={styles.studentPhone}>{item.studentNumber}</Text>
          </View>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            style={[styles.iconViewStyel, {backgroundColor: 'green'}]}>
            <Icon name="check" style={styles.acceptRejectIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteItem(index);
            }}
            style={[
              styles.iconViewStyel,
              {backgroundColor: 'red', marginLeft: RFValue(10)},
            ]}>
            <Icon name="close" style={styles.acceptRejectIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //return of all page

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainHeader title={'قائمة الانتظار'} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.textInputView}>
          <MainTextInput
            placeholder={'البحث'}
            onChangeText={val => {
              search(val);
              setOnChangeValue(val);
            }}
            right={
              <SmallCircleButton>
                <Icon name="search1" size={ICONS.mdIcon} color={COLORS.black} />
              </SmallCircleButton>
            }
          />
        </View>
        {DropdownComponent()}
        <View style={styles.allStudentTitle}>
          <Text style={styles.allStudentText}>جميع الطلاب</Text>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              style={[styles.iconViewStyel, {backgroundColor: 'green'}]}>
              <Icon name="check" style={styles.acceptRejectIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconViewStyel,
                {backgroundColor: 'red', marginLeft: RFValue(10)},
              ]}>
              <Icon
                onPress={() => {
                  setFilteredStudents([]);
                  setEmtyArray('لا يوجد طلاب');
                }}
                name="close"
                style={styles.acceptRejectIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {filteredStudents.length != 0 ? (
          <FlatList
            data={filteredStudents}
            renderItem={handlerRenderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                textStyles.smTextStyle,
                textStyles.grayTextStyle,
                {textAlign: 'center'},
              ]}>
              {emtyArray}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Waiting;
