import { StyleSheet, Text, View } from 'react-native';
import Loginform from './screens/Loginform';

export default function App() {
  return (
    <View style={styles.container}>
      <Loginform/>
    </View>
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
