import React from "react";
import { View ,Text,StyleSheet, TouchableOpacity} from "react-native";

const Home=({navigation})=>{

    return(
        <View style={styles.container}>
<TouchableOpacity style={styles.links} onPress={()=>{
    navigation.navigate("Registration")
}}>
    <Text>Registration page</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.links} onPress={()=>{
    navigation.navigate("ChangePassword")
}}>
    <Text>Change Password</Text>
</TouchableOpacity>
        </View>
       
           
    )
}
export default Home;
const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:50
    },
    links:{
        width:200,
        height:40,
        marginTop:10,
        backgroundColor:"pink",
        alignItems:"center"
    }
})