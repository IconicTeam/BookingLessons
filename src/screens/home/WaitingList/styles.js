import React from 'react'
import { StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { COLORS,FONTS,ICONS,PADDINGS } from '../../../constants'

// Style of Page
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:COLORS.background
    },
    innerContainer:{
      paddingHorizontal:PADDINGS.mdPadding + 10,
      paddingTop:PADDINGS.mdPadding
    },
    dropdownView:{
      flexDirection:"row",
      marginBottom:PADDINGS.mdPadding+10
    },
    dropdownStyle:{
      flex:1,
      height:RFValue(40),
      borderRadius:RFValue(5),
      backgroundColor:COLORS.gray_overlay,
      marginBottom:PADDINGS.mdPadding+10
    },
    textInputView:{
    marginBottom:PADDINGS.mdPadding+10
    },
    searchIcon:{
      fontSize:RFValue(25),
      color:COLORS.black,
    },
    textInputStyle:{
      flex:1,
      paddingHorizontal:RFValue(5),
      fontSize:RFValue(16)
      
    },
    allStudentTitle:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:PADDINGS.mdPadding+10
    },
    allStudentText:{
      fontSize:RFValue(FONTS.h5),
      color:COLORS.black,
      fontWeight:"bold",
    },
    iconWrapper:{
      flexDirection:"row"
    },
    iconViewStyel:{
      width:RFValue(36),
      height:RFValue(36),
      borderRadius:RFValue(18),
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red",
    },
    acceptRejectIcon:{
      fontSize:RFValue(ICONS.smIcon),
      color:COLORS.background
    },
    studentDataStyle:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:RFValue(5),
      borderBottomWidth:RFValue(.5),
      paddingBottom:RFValue(5),
      borderBottomColor:COLORS.gray_overlay
    },
    studentImage:{
      width:RFValue(60),
      height:RFValue(60),
      borderRadius:RFValue(30),
    },
    namePhoneWrapper:{
      marginLeft:RFValue(5)
    },
    imageNameStyel:{
      flexDirection:"row",
      alignItems:"center",
    },
    studentName:{
      fontSize:RFValue(FONTS.h6),
      color:COLORS.black,
      fontWeight:"bold"
    },
    studentPhone:{
      textAlign:"left",
      color:COLORS.gray
    },
    FlatListStyle:{
      paddingBottom:RFValue(250)
    }
})


// Style of dropdown only
export const dropdownStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  dropdowns: {
    height: RFValue(45) >= 45 ? RFValue(45) : 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: RFValue(8),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: RFValue(22),
    top: RFValue(-10),
    zIndex: 999,
    paddingHorizontal: RFValue(8),
    fontSize: RFValue(14),
  },
  placeholderStyle: {
    fontSize: RFValue(16),
  },
  selectedTextStyle: {
    fontSize: RFValue(16),
  },
  inputSearchStyle: {
    height: RFValue(40),
    fontSize: RFValue(16),
  },
});


export default styles