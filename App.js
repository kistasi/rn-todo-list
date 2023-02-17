import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  Text
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();

    if (task !== '') {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>ToDoList</Text>

      <View>
        <StatusBar style="auto" />

        <ScrollView>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      <KeyboardAvoidingView style={styles.addNewTaskContainer}>
        <TextInput placeholder="Write task" style={styles.textInput} value={task} onChangeText={text => setTask(text)} />
        <Button title="Add" onPress={() => handleAddTask()} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
  },
  headerText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  addNewTaskContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
