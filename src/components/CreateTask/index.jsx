import {StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'
import {useState} from "react";

export function CreateTask({onCreateTask, onDeleteCompleted, completedTasks}) {
  const [taskDescription, setTaskDescription] = useState('')

  function handleTaskDescription(description) {
    setTaskDescription(description)
  }

  function clearDescription() {
    setTaskDescription('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        onChangeText={t => {
          handleTaskDescription(t)
        }}
        value={taskDescription}
      />

      <View style={styles.buttons}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{...styles.button, backgroundColor: '#1E6F9F'}}
          onPress={
            () => {
              onCreateTask(taskDescription);
              clearDescription()
            }
          }
        >
          <Text style={{...styles.buttonText, marginRight: 8}}>Criar</Text>
          <Feather name='plus-circle' size={16} color='#f2f2f2'/>
        </TouchableOpacity>

        {completedTasks > 0 &&
          <TouchableOpacity
            activeOpacity={0.7}
            style={{...styles.button, backgroundColor: '#9F1E3F', marginLeft: 16}}
            onPress={
              () => {
                onDeleteCompleted();
              }
            }
          >
            <Text style={styles.buttonText}>Excluir Concluídas</Text>
          </TouchableOpacity>
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    backgroundColor: 'transparent',
    marginTop: -62,
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#f2f2f2',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    height: 54,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 16,
  }
})