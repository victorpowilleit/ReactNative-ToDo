import {View, Image, Text, StyleSheet} from "react-native";
import image from "../../assets/Clipboard.png"

export function Empty(){
  return(
    <View style={styles.Empty}>
      <Image style={styles.Image} source={image}/>
      <Text style={styles.TextA}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.TextB}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Empty:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  Image:{
    height: 56,
    margin: 16,
  },
  TextA:{
    fontWeight:'bold',
    color: '#808080',
    fontSize: 16,
    lineHeight: 22.4,
  },
  TextB:{
    color: '#808080',
    fontSize: 16,
    lineHeight: 22.4,
  }
})