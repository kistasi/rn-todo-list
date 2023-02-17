import { StyleSheet, View, Text } from 'react-native';

const Task = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#2471A3',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  }
});

export default Task;
