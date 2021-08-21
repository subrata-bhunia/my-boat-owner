import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { 
    Icon,
    Input
} from 'react-native-elements';
import { back_img, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';


const SignUp=()=>{
    const Navigation = useNavigation();
    return(
        <View>
            <ImageBackground
             style={s.ImageBackground}
             source={back_img}
             imageStyle={s.ImageBackground_Img}
             >
                 <ScrollView>
                    <View style={s.Logo}>
                        <Text style={{fontFamily:FontFamily.semi_bold,textTransform:"uppercase",color:Colors.white}}>
                            Logo
                        </Text>
                    </View>
                    <Text style={s.Text1}>Boat Owner</Text>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-around",width:"98%",alignSelf:"center"}}>
                            <Input
                                placeholder="First Name"
                                containerStyle={s.Input1}
                                inputContainerStyle={s.Input1}
                                placeholderTextColor={Colors.white}
                                inputStyle={{color:Colors.white}}
                                />
                            <Input
                                placeholder="Last Name"
                                containerStyle={s.Input1}
                                inputContainerStyle={s.Input1}
                                placeholderTextColor={Colors.white}
                                inputStyle={{color:Colors.white}}
                                />
                        </View>
                        <Input
                            placeholder="Email"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Mobile"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Business Name"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Business Location"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Choose City"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Birthday"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Gender"
                            containerStyle={s.Input}
                            inputContainerStyle={[s.Input]}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Password"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Confirm Password"
                            containerStyle={s.Input}
                            inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                    </View>
                    <View>
                        <Text style={s.Text1}>
                            By sign up, you agree to our terms of service and privacy policy.
                        </Text>
                    </View>
                    <View style={{elevation:5}}>
                        <TouchableOpacity style={s.btn1} onPress={()=>Navigation.navigate("AddBoat")}>
                            <Text style={s.btn1Text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[s.Text1,{marginBottom:10}]}>
                            I have already account ?{" "}
                            <Text style={{
                                fontFamily:FontFamily.semi_bold,
                                color:Colors.white,
                                alignSelf:"center",
                                textDecorationLine:"underline"
                            }}
                                suppressHighlighting={true}
                                onPress={()=>Navigation.navigate("Login")}
                                >
                                 Login
                            </Text>
                        </Text>
                    </View>
                 </ScrollView>
             </ImageBackground>
        </View>
    )
}
const s = StyleSheet.create({
    ImageBackground:{
        height:"100%",
        width:Sizes.width,
        backgroundColor:Colors.black
    },
    ImageBackground_Img:{
        opacity:0.5
    },
    Logo:{
        height:70,
        width:70,
        borderRadius:20,
        backgroundColor:Colors.orange,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
    },
    Text1:{
        textAlign:"center",
        fontFamily:FontFamily.default,
        color:Colors.white,
        fontSize:16
    },
    Input1:{
        borderBottomColor:Colors.white,
        width:Sizes.width*0.46,
        marginLeft:-5
    },
    Input:{
        borderBottomColor:Colors.white,
        marginTop:-15
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
export default SignUp;