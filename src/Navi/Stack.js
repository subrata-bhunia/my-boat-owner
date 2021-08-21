import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Main/Home';
import Login from '../Screens/Auth/LogIn';
import SignUp from '../Screens/Auth/SignUp';
import AddBoat from '../Screens/Main/AddBoat';
import TabNav from './BottomNav';
import Chats from '../Screens/Main/Chat';
import MyWallet from '../Screens/Main/MyWallet';
import MyWithdraw from '../Screens/Main/MyWithdraw';
import Settings from '../Screens/Main/Settings';
import Ratings from '../Screens/Main/Ratings';
import DetailsRatings from '../Screens/Main/Ratings_des';
import Noti_Setting from '../Screens/Main/Notification_Settings';
import Change_Language from '../Screens/Main/Change_Language';
import Change_Password from '../Screens/Auth/Change_Password';
import NotificationsPage from '../Screens/Main/Notifications';
import Notifications_Details from '../Screens/Main/Noti_Details';
import Terms_Conditions from '../Screens/Main/Terms_Conditions';
import EditProfile from '../Screens/Main/EditProfile';
import SelectedDate from '../Screens/Main/SelectedDate';
// import MyTabs from './BottomNav';

const Stack= createStackNavigator();


const Stacks=()=>{
    return(
        <Stack.Navigator
         initialRouteName="Login"
         headerMode="none"
        >
            <Stack.Screen name="Home" component={TabNav} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="AddBoat" component={AddBoat} />
            <Stack.Screen name="MyWallet" component={MyWallet} />
            <Stack.Screen name="MyWithdraw" component={MyWithdraw} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Ratings" component={Ratings} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="DetailsRating" component={DetailsRatings} />
            <Stack.Screen name="Noti_Setting" component={Noti_Setting} />
            <Stack.Screen name="Change_Language" component={Change_Language} />
            <Stack.Screen name="Change_Password" component={Change_Password} />
            <Stack.Screen name="Notifications" component={NotificationsPage} />
            <Stack.Screen name="Notifications_Details" component={Notifications_Details} />
            <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
            <Stack.Screen name="Edit_Profile" component={EditProfile} />
            <Stack.Screen name="SelectedDate" component={SelectedDate} />

        </Stack.Navigator>
    )
}


export default Stacks;