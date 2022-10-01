import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './components/Registration';
import Home from './components/Home'
import { NavigationContainer, Stack } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import ChangePassword from './components/ChangePassword';
 function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
    
      <Stack.Navigator intialRouteName="Home">
      <Stack.Screen name="Home" component={Home }/>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"F3F8FE",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
