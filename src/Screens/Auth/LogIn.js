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
    Input
} from 'react-native-elements';
import { back_img, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';

const WelComeNote=()=>{
    return(
        <View style={styles.WelComeNote}>
            <Text style={styles.myboat}>
                My Boat
            </Text>
            <Text style={styles.Wlcome}>
                Welcome
            </Text>
        </View>
    )
}


const Login=()=>{
    const nav=useNavigation();
    return(
        <View style={{flex:1}}>
            <ImageBackground
             style={styles.ImageBackground}
             source={back_img}
             imageStyle={styles.ImageBackground_Img}
             >
                 <View style={styles.SEC2}>
                     <WelComeNote />
                     <View>
                         <Text style={styles.Login}>
                             Login
                         </Text>
                         <Input
                            placeholder="Login"
                            containerStyle={styles.Input}
                            inputContainerStyle={styles.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                         <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Input
                                placeholder="Password"
                                containerStyle={styles.Input}
                                inputContainerStyle={styles.Input}
                                placeholderTextColor={Colors.white}
                                inputStyle={{color:Colors.white}}
                                />
                            <TouchableOpacity style={{marginLeft:-100,marginTop:-13}}>
                                <Text style={styles.FGPASS}>
                                    Forgot Password ?
                                </Text>
                            </TouchableOpacity>
                         </View>
                     </View>
                     <View>
                        <View style={{alignItems:"center"}}>
                             <TouchableOpacity style={styles.Btn1} onPress={()=>nav.navigate("Home")}>
                                 <Text style={styles.Btn1Text}>
                                     Login
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={styles.Btn1} onPress={()=>nav.navigate("SignUp")}>
                                 <Text style={styles.Btn1Text} >
                                     SignUp
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={{marginTop:25}}>
                                 <Text style={styles.contact_admin}>
                                     Contact admin ?
                                 </Text>
                             </TouchableOpacity>
                         </View>
                     </View>
                 </View>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    ImageBackground:{
        height:"100%",
        width:Sizes.width,
        backgroundColor:Colors.black
    },
    ImageBackground_Img:{
        opacity:0.5,
        // height:Sizes.height+100
    },
    myboat:{
        fontFamily:FontFamily.default,
        color:Colors.white
    },
    Wlcome:{
        fontFamily:FontFamily.bold,
        fontSize:42,
        color:Colors.white
    },
    SEC2:{
        position:"absolute",
        top:"40%",
        paddingHorizontal:20
    },
    Login:{
        fontFamily:FontFamily.semi_bold,
        fontSize:28,
        color:Colors.white
    },
    Input:{
        borderBottomColor:Colors.white,
        width:Sizes.width*0.85,
        color:Colors.white
    },
    FGPASS:{
        fontFamily:FontFamily.semi_bold,
        color:Colors.white,
        fontSize:12,
        lineHeight:15
    },
    Btn1:{
        height:48,
        width:"95%",
        backgroundColor:Colors.orange,
        margin:5,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12,
        elevation:3,
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    Btn1Text:{
        fontSize:20,
        fontFamily:FontFamily.semi_bold,
        color:Colors.white
    },
    contact_admin:{
        fontFamily:FontFamily.default,
        textDecorationStyle:"solid",
        color:Colors.white,
        textDecorationColor:Colors.white,
        textDecorationLine:"underline"
    },
    SEC3:{
        flexDirection:"row",
        // justifyContent:"space-aroun",
        alignItems:"center"
    },
    OR:{
        height:30,
        width:30,
        borderRadius:30,
        backgroundColor:Colors.white,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:5
    },
    Text1:{
        fontSize:16,
        fontFamily:FontFamily.semi_bold,
        color:Colors.white
    },
    LoginIcon:{
        height:50,
        width:50,
        borderRadius:25,
        borderColor:Colors.white,
        borderWidth:1.5,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:3,
    }
})

export default Login;