import {Alert, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {Header} from "../../components/Header";
import {CreateTask} from "../../components/CreateTask";
import {Info} from "../../components/Info";
import {Tasks} from "../../components/Tasks";

export function Home() {

  const [tasks, setTasks] = useState([])

  const totalTasks = tasks.length
  let completedTasks = (tasks.filter(task => task.checked)).length

  useEffect(() => {
    AsyncStorage.getItem('tasks').then((storedTasks) => {
      storedTasks && setTasks(JSON.parse(storedTasks))
    })
  }, [])

  async function setStorage(data) {
    try {
      const jsonData = JSON.stringify(data)
      await AsyncStorage.setItem('tasks', jsonData)
    } catch (e) {
      Alert.alert("Ops!", 'Não foi possível salvar os dados no dispositivo.')
    }
  }

  async function handleCreateTask(description) {
    if (description.trim().length > 0) {
      const uid = (new Date()).getTime()
      const newTask = {
        id: uid,
        description: description,
        checked: false
      }
      setTasks(prevState => {
        const newTaskList = [...prevState, newTask]
        setStorage(newTaskList)
        return newTaskList
      })
    } else {
      Alert.alert("Ops", "Você precisa digitar um nome ou descrição para criar uma tarefa.")
    }
  }

  function handleDeleteTask(id) {
    const newTaskList = tasks.filter(task => task.id !== id)
    setStorage(newTaskList).then()
    setTasks(newTaskList)
  }

  function handleDeleteCompleted() {
    const newTaskList = tasks.filter(task => !task.checked)
    setStorage(newTaskList).then()
    setTasks(newTaskList)
  }

  function handleToggleTask(id) {
    const newTaskList = []
    tasks.map(task => {
      if (task.id !== id) {
        newTaskList.push({id: task.id, description: task.description, checked: task.checked})
      } else {
        newTaskList.push({id: task.id, description: task.description, checked: !task.checked})
      }
      setStorage(newTaskList).then()
      setTasks(newTaskList)
    })
  }

  const taskFunctions = {
    handleToggle: handleToggleTask,
    handleDelete: handleDeleteTask
  }

  return (
    <View style={styles.home}>
      <Header/>
      <CreateTask
        onCreateTask={handleCreateTask}
        onDeleteCompleted={handleDeleteCompleted}
        completedTasks={completedTasks}
      />
      <Info total={totalTasks} completed={completedTasks}/>
      <Tasks taskList={tasks} functions={taskFunctions}/>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
  }
})