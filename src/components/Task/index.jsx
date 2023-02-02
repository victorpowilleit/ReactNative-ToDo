import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

export function Task({id, description, checked, functions}) {
  const {handleToggle, handleDelete} = functions
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.checkBtn}
        onPress={()=>{handleToggle(id)}}
      >
        {
          !checked ?
            <Feather name='circle' size={16} color='#4EA8DE'/> :
            <Feather name='check-circle' size={16} color='#5E60CE'/>
        }
        <Text style={checked?styles.textChecked:styles.text}>{description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.trashBtn}
        onPress={()=>{handleDelete(id)}}
      >
        <Feather name='trash' size={16} color='#808080'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#333333',
    marginBottom: 12,
  },
  checkBtn: {
    flexDirection: 'row',
  },
  trashBtn: {
    paddingLeft: 8,
  },
  text: {
    color: '#f2f2f2',
    marginLeft: 8,
  },
  textChecked:{
    color: '#808080',
    marginLeft: 8,
    textDecorationLine: 'line-through',
  }
})