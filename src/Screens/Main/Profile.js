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
    I18nManager
} from 'react-native';
import {
    Icon,
    Input,
    Card,
    Rating,
    AirbnbRating
} from 'react-native-elements';
import { s } from '../../Components/Header';
import { back_img4, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';

const CustomHeader=({name})=>{
    const nav=useNavigation();
    const gotoSettings=()=>{
        nav.navigate("Settings")
    }
    const gotoEditProfile=()=>{
        nav.navigate("Edit_Profile")
    }
    return(
        <ImageBackground
        style={[s.ImageBackground,{height:300}]}
        source={back_img4}
        imageStyle={[s.ImageBackground_Img,{opacity:0.8}]}
        >
            <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",marginTop:30,alignSelf:"center",backgroundColor:"transparent",alignItems:"center"}}>
                <TouchableOpacity onPress={()=>gotoEditProfile()}>
                    <Icon name="edit" type="feather" size={24} color={Colors.white} />
                </TouchableOpacity>
                <Text style={{fontFamily:FontFamily.semi_bold,color:Colors.white}}>
                    {name}
                </Text>
                <TouchableOpacity onPress={()=>gotoSettings()}>
                    <Icon name="md-settings-outline" type="ionicon" size={25} color={Colors.white} />
                </TouchableOpacity>
            </View> 
        </ImageBackground>
    )
}

const Profile=()=>{
    const navigation=useNavigation();
    const gotoWithdraw=()=>{
        navigation.navigate("MyWithdraw");
    }
    const gotoWallet=()=>{
        navigation.navigate("MyWallet");
    }
    const gotoRatings=()=>{
        navigation.navigate("Ratings")
    }
    return(
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <CustomHeader name="Profile" />
            <View style={sb.SEC2}>
                <Image
                 source={{uri:"https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg"}}
                 style={{
                     height:150,
                     width:150,
                     borderRadius:20,
                     alignSelf:"center",
                     marginTop:-100
                 }} />
                 <View style={{alignSelf:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontFamily:FontFamily.semi_bold}}>
                        Jhon Patrick
                    </Text>
                    <Text style={[sb.Text,{fontSize:14}]}>
                    Business Name
                    </Text>
                    <Text style={[sb.Text,{fontSize:13,fontStyle:"italic",color:"#333",opacity:0.4}]}>
                    Kuwait city
                    </Text>
                    <Text style={[sb.Text,{fontSize:14}]}>
                    #5985462101
                    </Text>
                 </View>
                 <ScrollView showsVerticalScrollIndicator={false}>
                     {/* TWO BTNS  */}
                     <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
                         <TouchableOpacity style={{
                             height:81,
                             width:160,
                             backgroundColor:'rgba(249, 105, 9, 0.76)',
                             borderRadius:10,
                             alignItems:"center",
                             justifyContent:"center"
                         }}
                         onPress={()=>gotoWallet()}>
                             <Text style={{fontFamily:FontFamily.semi_bold,color:Colors.white,fontSize:17}}>
                             KWD 1996
                             </Text>
                             <Text style={{fontFamily:FontFamily.default,color:Colors.white,fontSize:14}}>
                             My Wallet
                             </Text>
                         </TouchableOpacity>
                         {/*  */}
                         <TouchableOpacity style={{
                             height:81,
                             width:160,
                             backgroundColor:'rgba(249, 105, 9, 0.76)',
                             borderRadius:10,
                             alignItems:"center",
                             justifyContent:"center"
                         }}
                         onPress={()=>gotoRatings()}>
                             <View style={{flexDirection:"row",alignItems:"center"}}>
                                 <Text style={[sb.Text,{color:Colors.white}]}>[235]</Text>
                                 <AirbnbRating
                                  showRating={false} 
                                  size={14} 
                                  count={5}
                                  defaultRating={4}
                                  isDisabled
                                  selectedColor="#FFCC39"
                                  starContainerStyle={{
                                      elevation:5
                                  }}
                                 />

                             </View>
                             <Text style={[sb.Text,{fontSize:14,color:Colors.white}]}>
                             Review
                             </Text>
                         </TouchableOpacity>
                     </View>
                     {/* THREE OPT  */}
                     <View>
                         {/* 1 option */}
                        <TouchableOpacity>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        Manage Your Boats
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/* 2 */}
                        <TouchableOpacity onPress={()=>gotoWithdraw()}>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        My Withdraw
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/* 3 */}
                        <TouchableOpacity style={{marginBottom:15}}>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        History
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/*  */}
                     </View>
                     {/* DETAILS */}
                     <View style={{paddingHorizontal:10,marginBottom:20}}>
                         <Text style={[sb.Text,{lineHeight:28,fontSize:14,opacity:0.6,color:Colors.black}]}>
                         info@gmail.com
                         </Text>
                         <Text style={[sb.Text,{lineHeight:28,fontSize:14,opacity:0.6,color:Colors.black}]}>
                         65657568564551
                         </Text>
                         <Text style={[sb.Text,{lineHeight:28,fontSize:14,opacity:0.6,color:Colors.black}]}>
                         New hs, Colony, USA
                         </Text>
                     </View>
                 </ScrollView>
            </View>
        </View>
    )
}
const sb=StyleSheet.create({
    SEC2:{
        backgroundColor:Colors.white,
        marginTop:-50,
        borderTopLeftRadius:30,
        borderTopEndRadius:30,
        flex:1
      },
      Text:{
          fontFamily:FontFamily.default
      }
})
export default Profile;