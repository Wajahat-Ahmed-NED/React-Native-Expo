import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Loginform from './screens/Loginform';
import CameraApp from './screens/Camera';
import Gallery from './screens/Gallery';
import Map from './screens/map';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginform">
        <Stack.Screen name="Loginform" component={Loginform} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
        {/* <Stack.Screen name="Camera" component={CameraApp} /> */}
      </Stack.Navigator>
    </NavigationContainer>

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
