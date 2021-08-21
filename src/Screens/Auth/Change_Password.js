import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { 
    Icon,
    
} from 'react-native-elements';
import { back_img, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';
import Header from '../../Components/Header';
import {Input} from 'galio-framework'


const Change_Password=()=>{
    return(
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <Header backBtn={true} name="Change Password" />
            <View style={sb.SEC2}>
                <View style={{marginTop:30,paddingHorizontal:20}}>
                <Input
                 placeholder="Old Password" 
                 secureTextEntry={true} 
                 placeholderTextColor={Colors.gray}
                 viewPass
                 password
                 caretHidden
                //  borderless
                 style={{
                     borderWidth:0,
                     borderBottomWidth:1
                 }}
                 iconColor={Colors.gray}
                 />
                <Input
                 placeholder="New Password" 
                 secureTextEntry={true} 
                 placeholderTextColor={Colors.gray}
                 viewPass
                 password
                 caretHidden
                //  borderless
                 style={{
                     borderWidth:0,
                     borderBottomWidth:1
                 }}
                 iconColor={Colors.gray}
                 />
                <Input
                 placeholder="Confirm Password" 
                 secureTextEntry={true} 
                 placeholderTextColor={Colors.gray}
                 viewPass
                 password
                 caretHidden
                //  borderless
                 style={{
                     borderWidth:0,
                     borderBottomWidth:1
                 }}
                 iconColor={Colors.gray}
                 />
                </View>
            </View>
            <View>
                <TouchableOpacity style={sb.btn1}>
                    <Text style={sb.btn1Text}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const sb =StyleSheet.create({
    SEC2:{
        backgroundColor:Colors.white,
        marginTop:-120,
        borderTopLeftRadius:30,
        borderTopEndRadius:30,
        flex:1
    },
    btn1:{
        height:48,
        width:"95%",
        backgroundColor:Colors.orange,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12,
        marginVertical:10,
        elevation:5,
        position:"absolute",
        bottom:0
        
    },
    btn1Text:{
        fontSize:20,
        fontFamily:FontFamily.semi_bold,
        color:Colors.white
    }
})

export default Change_Password;