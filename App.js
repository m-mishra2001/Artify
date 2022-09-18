import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './components/Registration';
export default function App() {
  return (
    <View style={styles.container}>
     <Registration/>
      <StatusBar style="auto" />
    </View>
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
