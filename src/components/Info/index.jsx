import {StyleSheet, View, Text} from "react-native";

export function Info({total, completed}) {
  return (
    <View style={styles.container}>

      <View style={{...styles.info}}>
        <Text style={{...styles.infoText, ...styles.infoTextTotal}}>Tarefas Criadas</Text>
        <View style={styles.infoNumbers}>
          <Text style={{...styles.infoText, ...styles.infoNumbersText}}>{total|'0'}</Text>
        </View>
      </View>

      <View style={{...styles.info}}>
        <Text style={{...styles.infoText, ...styles.infoTextCompleted}}>Concluídas</Text>
        <View style={styles.infoNumbers}>
          <Text style={{...styles.infoText, ...styles.infoNumbersText}}>{completed|'0'} de {total}</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginTop: 52,
    marginBottom: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoTextTotal: {
    color: '#4EA8DE',
  },
  infoTextCompleted: {
    color: '#8284FA'
  },
  infoNumbers: {
    marginLeft: 8,
    backgroundColor: '#333333',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  infoNumbersText: {
    color: '#d9d9d9'
  }
})