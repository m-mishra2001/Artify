import React from 'react'
import { Text,View,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import graphics from '../images/Vectorgraphics1(2).png'
import Profile from '../components/Profile';
const EditProfile=()=>{
    return(
<SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
        <Image source={graphics} style={{width:200,height:150,margin:0}}/>
       
        <View style={{alignItems:"center",height:100,margin:0,padding:0,width:"100%",position:"absolute"}} >
        
 <Text style={styles.headerText}>Edit Profile</Text>
   </View>

   
   <Profile/>
   <View style={styles.footer}>
  
        <TextInput
            label="Name"
            name="name"
            value="Muskan Mishra"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
            <TextInput
            label="Email"
            name="email"
            value="mishra2001muskan@gmail.com"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
            <TextInput
            label="Contact number"
            name="contactno"
            value="9826460576"
            keyboardType='numeric'
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

           <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            labelStyle={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
              
            }}
            style={styles.btn}
            
          >
           Edit Profile
          </Button>
    <View style={{marginTop:20,height:80}}>
  
   </View>
  
   </View>
   
       </ScrollView>
    </SafeAreaView>  
        )

}
const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F3F8FE",
        padding:0
    },
    headerText:{
        // fontFamily: 'Poppins',
        fontWeight:"bold",
        fontSize: 25,
        lineHeight: 48,
        color:"#363488",
        // left: 49,
         top: 70
    },
    profileView:{
      marginTop:10,
        flexDirection:"row",
        width:"90%",
        position:"relative",
        marginLeft:"auto",
        marginRight:"auto",
        height:"auto",
       
        
    },
    ProfileName:{
    fontWeight:"bold",
    fontSize:22,
    textAlign:"center",
    marginTop:"auto",
    marginBottom:"auto",
   marginLeft:20,
    marginRight:"auto",
    color:"#363488",
    },

    footer:{
    
        width: "100%",
        height:"auto",
        marginTop:"20%",
        backgroundColor: "white",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 5,
        paddingTop: 25,
        flex: 1,
        top:10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
         
     },
     loginInput: {
        margin: "6%",
        height:65,
        width: "88%",
        backgroundColor:"#F5F5F5",
        borderRadius: 8,
      },
      btn:{
        height:60,
        width:"88%",
        marginTop:10,
        borderRadius:8,
      }
     
})
export default EditProfile;