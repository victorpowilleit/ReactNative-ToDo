import { StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import {Home} from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/*<StatusBar barStyle="light-content" />*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height
  },
});
