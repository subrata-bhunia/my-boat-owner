import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image
} from 'react-native';
import {
    Icon,
    Input,
    Card
} from 'react-native-elements';
import Header from '../../Components/Header';
import { back_img3, boat_img1, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';

const Settings=()=>{
    const navigation=useNavigation()
    const gotoNoti_Settings=()=>{
        navigation.navigate("Noti_Setting");
    }
    const gotoChange_Language=()=>{
        navigation.navigate("Change_Language")
    }
    const gotoChange_Password=()=>{
        navigation.navigate("Change_Password")
    }
    const gotoTerms_Conditions=()=>{
        navigation.navigate("Terms_Conditions")
    }
    const gotoEditProfile=()=>{
        navigation.navigate("Edit_Profile")
    }
    return(
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <Header
             backBtn={true}
             name="Settings" />
             <View style={sb.SEC2}>
                 <ScrollView style={{marginTop:30}} showsVerticalScrollIndicator={false}>
                     {/* Account */}
                     <Text style={{paddingHorizontal:30,paddingBottom:5,color:Colors.orange,fontFamily:FontFamily.semi_bold}}>Account</Text>
                     {/* 1 */}
                     <TouchableOpacity style={{marginBottom:1}} onPress={()=>gotoNoti_Settings()}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Notification Settings
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/*  2*/}
                     <TouchableOpacity style={{marginBottom:1}} onPress={()=>gotoEditProfile()}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Edit Profile
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/*  3*/}
                     <TouchableOpacity style={{marginBottom:1}} onPress={()=>gotoChange_Password()}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Change Password
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/*  4*/}
                     <TouchableOpacity style={{marginBottom:1}} onPress={()=>gotoChange_Language()}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Change Language
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* Support */}
                    <Text style={{paddingHorizontal:30,paddingBottom:5,paddingTop:15,color:Colors.orange,fontFamily:FontFamily.semi_bold}}>Support</Text>
                     {/* 1 */}
                     <TouchableOpacity style={{marginBottom:1}} onPress={()=>gotoTerms_Conditions()}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Terms & Conditions
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 2 */}
                     <TouchableOpacity style={{marginBottom:1}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Privacy Policy
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 3 */}
                     <TouchableOpacity style={{marginBottom:1}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                About Us
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 4 */}
                     <TouchableOpacity style={{marginBottom:1}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Contact Us
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 5 */}
                     <TouchableOpacity style={{marginBottom:1}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Share App
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 6 */}
                     <TouchableOpacity style={{marginBottom:1}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Rate App
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* 7 */}
                     <TouchableOpacity style={{marginBottom:15}}>
                        <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                Logout
                                </Text>
                            </View>
                            <Icon name="arrow-right" type="evilicon"  />
                            </View>
                        </Card>
                    </TouchableOpacity>
                    {/* END */}
                 </ScrollView>
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
})
export default Settings;