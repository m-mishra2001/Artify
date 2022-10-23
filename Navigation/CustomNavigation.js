import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from "../Screens/Checkout"
import Setting from "../Screens/Setting";
import Faqs from "../Screens/Faqs";
import ChangePassword from "../Screens/ChangePassword";
import ContactForm from "../Screens/ContactForm";
import EditProfile from "../Screens/EditProfile";
import Details from "../Screens/Details";
import Home from "../Screens/Home";
import WishList from "../Screens/WishList"
import UserProfile from "../Screens/UserProfile";
import AddPost from "../Screens/AddPost"
import CreditPayment from "../Screens/CreditPayment"
const Stack=createNativeStackNavigator();

const SettingsScreen=()=>{
    return(
  <Stack.Navigator 
  screenOptions={{
    headerShown:false
  }}
  >

      <Stack.Screen name="Settings" component={Setting}/>
      <Stack.Screen name="Faqs" component={Faqs} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ContactForm" component={ContactForm} />
      <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator> 
    )
}

const HomeScreen=()=>{
    return(
        <Stack.Navigator 
  screenOptions={{
    headerShown:false
  }}
  >

      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Checkout" component={Checkout}/>
      <Stack.Screen name="CreditPayment" component={CreditPayment}/>
      </Stack.Navigator> 
    )
}

const UserProfileScreen=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{
          headerShown:false
        }}
        >
      
            <Stack.Screen name="UserProfile" component={UserProfile}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="ContactForm" component={ContactForm} />
            </Stack.Navigator> 
    )
}

const WishListScreen=()=>{
  return(
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
    
          <Stack.Screen name="WishList" component={WishList}/>
          <Stack.Screen name="Details" component={Details}/>
          
          </Stack.Navigator> 
  )
}

const AddPostScreen=()=>{
  return(
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
    
          <Stack.Screen name="AddPost" component={AddPost}/>
          
          
          </Stack.Navigator> 
  )
}
export {HomeScreen , UserProfileScreen,WishListScreen,AddPostScreen }
export default SettingsScreen


