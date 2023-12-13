import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
     <StatusBar style="auto" />
     <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='AllPlace' component={AllPlaces}/>
  <Stack.Screen name='AddPlaces' component={AddPlace}/>
</Stack.Navigator>
     </NavigationContainer>
    </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
