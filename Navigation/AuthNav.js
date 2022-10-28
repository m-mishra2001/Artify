
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../components/Registration"
import BottomTab from "./BottomTab";
const Stack=createNativeStackNavigator();
const AuthNav=()=>{
    return(
        <Stack.Navigator 
  screenOptions={{
    headerShown:false

  }}
  intialRouteName={Registration}
  >

      <Stack.Screen name="Registration" component={Registration}/>
      <Stack.Screen name="Home" component={BottomTab}/>
      {/* <Stack.Screen name="Faqs" component={Faqs} /> */}
     

      </Stack.Navigator> 

    )
}
export default AuthNav