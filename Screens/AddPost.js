import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import React from 'react';
import circle from '../assets/images/CirVec1.png';
import SelectList from 'react-native-dropdown-select-list';
import AvtarImg from '../assets/images/avtar.jpg';
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
// import SelectImage from '../components/SelectImage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreatePost = () => {
  const [selected, setSelected] = React.useState("");
  const Categories = [
    {key:'1',value:'Art'},
    {key:'2',value:'Clothing'},
    {key:'3',value:'Music'},
    {key:'4',value:'Best out of waste'},
    {key:'5',value:'Utensils'}

  ];
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>  
            <Image source={circle} style = {{ width:200, height:150 }} />        
            <View style = {{ alignItems: 'center', height:100, width:"100%", position:'absolute'}}>
              
              <Text style = {{ fontWeight:"bold" , fontSize : 30, lineHeight : 48, color: "#363488", top:70}}>
                Add Post
              </Text>
            </View>

            {/* <View style={styles.profileView}>
                <Avatar.Image size={30} source={AvtarImg} style={{marginLeft:20}}  />
   
                <Text style={styles.ProfileName}>Harish Gehlot</Text> 
            </View> */}

            {/* <SelectImage /> */}
            <View style={styles.footer}>
  
                <TextInput
                    label="Title Of Your Post"
                    name="name"
                    placeholder='Leather oriented shoes'
                    // onChangeText={(email) => setEmail(email)}
                    style={styles.loginInput}
                    underlineColor="transparent"
                />

                <TextInput
                    label="Description"
                    multiline={true}
                    name="name"
                    placeholder='Leather oriented shoes'
                    // onChangeText={(email) => setEmail(email)}
                    style={styles.loginInput}
                    underlineColor="transparent"
                />

              <TextInput
                    label="Price of Your Product"
                    multiline={true}
                    name="name"
                    placeholder='30$'
                    // onChangeText={(email) => setEmail(email)}
                    style={styles.loginInput}
                    underlineColor="transparent"
                />
             <SelectList 
                      // onSelect={() => alert(selected)}
                      setSelected={setSelected} 
                      data={Categories}  
                      placeholder = "Categories"
                      arrowicon={<FontAwesome name="chevron-down" size={15} color={'black'} style={{marginLeft:"auto"}} />} 
                      searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
                      search={false}
                      dropdownStyles={{borderColor:"white",backgroundColor:"#F5F5F5",width:"90%",marginLeft:"auto",marginRight:'auto'}}
                      dropdownTextStyles={{color:'#363488'}} 
                      boxStyles={{fontSize:40,height:65,borderColor:"white",backgroundColor:"#F5F5F5",width:"90%",marginLeft:'auto',marginRight:'auto',marginTop:"5%"}} //override default styles
                      // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
                      
              />
<View style={{height:200,width:"100%"}}>
<TouchableOpacity style = {{ width : "88%", height:50, backgroundColor:"#363488",borderRadius:10,marginTop:"10%",marginLeft:"6%"}}>
            <View>
              <Text style = {{ color:'white',fontSize: 19, textAlign:'center',marginTop:"3%"}}>Post it!!</Text>
            </View>
          </TouchableOpacity>
</View>
          

                 
            </View>
          
            </ScrollView>  
    </SafeAreaView>  
  );
};
export default CreatePost;

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        padding:0,
    },
    profileView:{
          marginTop:10,
          flexDirection:"row",
          width:"90%",
          position:"relative",
          marginLeft:"15%",
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
        height:"100%",
        marginTop:"5%",
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
})