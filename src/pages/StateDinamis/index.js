import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const count = () => {
    setNumber(number + 1);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={count} />
      <Button title="Reset" onPress={reset} color="red" />
    </>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </>
    );
  }
}

export default class StateDinamis extends Component {
  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <Text style={styles.textTitle}> Component Dinamis dengan State </Text>
          <Text style={styles.titleSection}>Function Component (Hook)</Text>
          <Counter />
          <Text style={styles.titleSection}>Class Component</Text>
          <CounterClass />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleSection: {
    marginVertical: 10,
  },
});
