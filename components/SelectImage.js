import React, {useState, useEffect } from 'react';
import { Text, View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SelectImage = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [Image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStaus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStaus === 'granted');
    })();
  },[]);

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    });

    console.log(result);
    if(!result.cancelled){
      setImage(result.uri);
    }
  };

  if(hasGalleryPermission === false){
    return <Text>No Access to internal storage</Text>
  }

  return (
    <View style = {{flex:1,justifyContent:'center'}}>
      <Button title='Pick Image' onPress={() => pickImage()} style={{marginTop:30}} />
      {Image && <Image source={{uri:Image}} style = {{flex:1/2}} /> }
    </View>
  )

};

export default SelectImage;

// return (
//   <View>
//   <View>
//     <TouchableOpacity style = {{flexDirection:'row',marginLeft:'22%',width:'100%',marginTop:'2%'}}>
//       <FontAwesome name="folder-open" size={50} color="#363488" />
//       <View style = {{backgroundColor:'#363488',width:'40%',height:50,borderRadius:20,marginLeft:'4%'}}>
//         <Text style = {{color:'white',marginTop:'8%',marginLeft:'6%'}}>Upload from Gallery</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
//   <View>
//   <TouchableOpacity style = {{flexDirection:'row',marginLeft:'22%',width:'100%',marginTop:'3%'}}>
//       <Entypo name="camera" size={50} color="#363488" />
//       <View style = {{backgroundColor:'#363488',width:'40%',height:45,borderRadius:20,marginLeft:'5%'}}>
//         <Text style = {{color:'white',marginTop:'8%',marginLeft:'30%'}}>Camera</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
//   </View>
// )

// };
