import {StyleSheet, View, Image, Dimensions} from "react-native";
import Logo from '../../assets/Logo.png'
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight

export function Header(){
  return(
    <View style={styles.header}>
      <Image style={styles.logo} source={Logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: statusBarHeight + 200,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
    width: Dimensions.get('window').width,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 62,
  },
  logo:{
    height: 48,
  }
})