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
import Outgoing from '../../Data/Outgoing';
import Upcoming from '../../Data/Upcoming'

const Home = () => {
    const [btn1Style,setBtn1Style]=useState({
        backColor:Colors.orange,
        textCOlor:Colors.white
    })
    const [btn2Style,setBtn2Style]=useState({
        backColor:Colors.white,
        textCOlor:Colors.black
    });
    const OutgoingData = Outgoing ;
    const UpcomingData = Upcoming ;
    const [data,setData]=useState(OutgoingData);
    // --------------------------------------- //
    const OutgoingBtn=()=>{
        setBtn2Style({
            backColor:Colors.white,
            textCOlor:Colors.black
        })
        setBtn1Style({
            backColor:Colors.orange,
            textCOlor:Colors.white
        })
        setData(OutgoingData)
    };
    // -------------------------------------- //
    const UpcomingBtn =()=>{
        setBtn1Style({
            backColor:Colors.white,
            textCOlor:Colors.black
        })
        setBtn2Style({
            backColor:Colors.orange,
            textCOlor:Colors.white
        })
        setData(UpcomingData)
    };
    const CardView=({item,ind})=>{
        return(
            <View>
                
                    <Card containerStyle={s.Card}>
                    <TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                         source={{uri:'https://source.unsplash.com/400x400/?boat'}}
                         style={{
                             height:90,
                             width:90,
                             borderRadius:12,
                             marginLeft:-6
                         }}
                         />
                         <View style={{flexDirection:"row",marginLeft:8,justifyContent:"space-between",}}>
                             <View style={{width:Sizes.width/2.2}}>
                                 <Text style={s.name}>
                                     {item.name}
                                 </Text>
                                 <Text style={s.type}>
                                     {item.type}
                                 </Text>
                                 <Text style={s.id}>
                                     {item.id}
                                 </Text>
                                 <Text style={s.type}>
                                     {item.time}
                                 </Text>
                             </View>
                             <View style={{justifyContent:"space-around"}}>
                                 <Text style={[s.type,{textAlign:"right"}]}>
                                     {item.status_time}
                                 </Text>
                                 <Text style={s.price}>
                                     {item.price}
                                 </Text>
                                 <Text style={s.status}>
                                     {item.status}
                                 </Text>
                             </View>
                         </View>
                        </View>
                        </TouchableOpacity>
                    </Card>
                
            </View>
        )
    }
    return(
        <View style={{backgroundColor:Colors.white,flex:1}}>
            <Header
             imgBack={true}
             notiBtn={true}
             searchBtn={true}
             name="Home"
             />
             {/* Buttons */}
             <View style={{position:"absolute",alignItems:"center",width:"100%",top:100}}>
             <View style={s.btn_1}>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn1Style.backColor}]}
                  onPress={()=>OutgoingBtn()}
                  activeOpacity={0.8}
                  >
                     <Text style={[s.btn1Text,{color:btn1Style.textCOlor}]}>
                         Outgoing
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn2Style.backColor}]}
                  onPress={()=>UpcomingBtn()}
                  activeOpacity={0.8}
                  >
                     <Text style={[s.btn1Text,{color:btn2Style.textCOlor}]}>
                         Upcoming
                     </Text>
                 </TouchableOpacity>
             </View>
             </View>
             {/* View */}
             <View style={s.SEC2}>
            <View>
                <FlatList
                   data={data}
                   renderItem={CardView}
                   keyExtractor={(i,ind)=>ind}
                   style={{
                       marginTop:30
                   }}
                   contentContainerStyle={{ 
                    //    paddingBottom: 20,
                    //    height:"100%"
                    }}
                    // ListFooterComponentStyle={{height:200}}
                    contentInsetAdjustmentBehavior="automatic"
                   />
                </View>
             </View>
        </View>
    )
}
const s= StyleSheet.create({
  SEC2:{
      backgroundColor:Colors.white,
      borderTopLeftRadius:30,
      borderTopEndRadius:30,
      marginTop:-40,
    //   marginBottom:40,
      flex:1
  },
  btn1:{
    height:35,
    width:165,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:7,
    elevation:5,
    margin:7
},
  btn1Text:{
    fontSize:12,
    fontFamily:FontFamily.semi_bold,
  },
  btn_1:{
      flexDirection:"row",
      justifyContent:"space-around",
  },
  Card:{
      borderRadius:20,
      elevation:3,
      marginHorizontal:10,
      marginTop:0,
      marginBottom:15
  },
  name:{
      fontFamily:FontFamily.semi_bold,
      fontSize:16,
      marginBottom:3
  },
  type:{
      fontFamily:FontFamily.default,
      fontSize:12,
      marginBottom:3,
    //   opacity:0.5
    color:Colors.gray1
  },
  id:{
      fontFamily:FontFamily.semi_bold,
      fontSize:13,
      marginBottom:3
  },
  price:{
      marginBottom:10,
      fontFamily:FontFamily.semi_bold,
      fontSize:15,
      color:Colors.price,
      textAlign:"right"
  },
  status:{
      color:Colors.orange,
      fontFamily:FontFamily.default,
      fontWeight:"500",
      fontSize:14,
      textAlign:"right"
  }
})
export default Home;
