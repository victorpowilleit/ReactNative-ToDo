import {StyleSheet, ScrollView, View} from "react-native";
import {Task} from "../Task";
import {Empty} from "../Empty";

export function Tasks({taskList, functions}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {taskList.length>0?
      taskList.map(task =>
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            checked={task.checked}
            functions={functions}
          />
        ):<Empty/> }
        < View style={styles.spacer}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  spacer: {
    height: 100
  }
})