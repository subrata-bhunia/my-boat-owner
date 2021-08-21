import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    I18nManager,
    TextInput
} from 'react-native';
import {
    Icon,
    Input,
    Card
} from 'react-native-elements';
import {Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';
import Header from '../../Components/Header';


const EditProfile=()=>{
    return(
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <Header imgBack={true} backBtn={true} name="Edit Profile" />
            <View style={s.SEC2}>
                <ImageBackground
                    style={{height:108,width:108,borderRadius:7,position:'absolute',top:-70,alignSelf:"center"}}
                    source={{uri:'https://source.unsplash.com/240x320/?face'}}
                    imageStyle={{resizeMode:"cover",borderRadius:7}} >
                        <TouchableOpacity style={{
                            height:30,
                            width:30,
                            borderRadius:4,
                            backgroundColor:"#fff",
                            alignItems:"center",
                            justifyContent:"center",
                            position:'absolute',
                            bottom:-7,
                            right:-10,
                            borderWidth:0.7,
                            borderColor:"rgba(0, 0, 0, 0.75)",
                            elevation:3
                            }}>
                        <Icon name="edit" type="feather" size={24} color={Colors.orange} />
                        </TouchableOpacity>
                </ImageBackground>
                <ScrollView>
                <View style={{marginTop:50,paddingHorizontal:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-around",width:"98%",alignSelf:"center"}}>
                        <Input
                            placeholder="First Name"
                            containerStyle={s.Input1}
                            inputContainerStyle={s.Input1}
                            placeholderTextColor={Colors.inputFieldEditProfile}
                            inputStyle={{color:Colors.inputFieldEditProfile}}
                            />
                        <Input
                            placeholder="Last Name"
                            containerStyle={s.Input1}
                            inputContainerStyle={s.Input1}
                            placeholderTextColor={Colors.inputFieldEditProfile}
                            inputStyle={{color:Colors.inputFieldEditProfile}}
                            />
                    </View>
                    <Input
                        placeholder="Email"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Mobile"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Business Name"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Business Location"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Choose City"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Birthday"
                        containerStyle={s.Input}
                        inputContainerStyle={s.Input}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                    <Input
                        placeholder="Gender"
                        containerStyle={s.Input}
                        inputContainerStyle={[s.Input]}
                        placeholderTextColor={Colors.inputFieldEditProfile}
                        inputStyle={{color:Colors.inputFieldEditProfile}}
                        />
                </View>
                </ScrollView>
            </View>
            <View>
                <TouchableOpacity style={s.btn1}>
                    <Text style={s.btn1Text}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const s=StyleSheet.create({
    SEC2:{
        backgroundColor:Colors.white,
        marginTop:-50,
        borderTopLeftRadius:30,
        borderTopEndRadius:30,
        flex:1
      },
      Text:{
          fontFamily:FontFamily.default
      },
      Input1:{
        borderBottomColor:Colors.inputFieldEditProfile,
        width:Sizes.width*0.42,
        marginLeft:-5
    },
    Input:{
        borderBottomColor:Colors.inputFieldEditProfile,
        marginTop:-10
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
        elevation:5
    },
    btn1Text:{
        fontSize:20,
        fontFamily:FontFamily.semi_bold,
        color:Colors.white
    }
})
export default EditProfile;