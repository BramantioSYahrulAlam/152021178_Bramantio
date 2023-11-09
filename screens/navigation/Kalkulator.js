import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import BottomBar from '../BottomBar';
import BackButton from '../../components/backButton';

export default function Kalkulator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const clearInputs = () => {
    setInput1('');
    setInput2('');
    setResult('');
  };

  const performOperation = operator => {
    const value1 = parseFloat(input1) || 0;
    const value2 = parseFloat(input2) || 0;

    let resultValue = 0;

    switch (operator) {
      case '+':
        resultValue = value1 + value2;
        break;
      case '-':
        resultValue = value1 - value2;
        break;
      case '*':
        resultValue = value1 * value2;
        break;
      case '/':
        if (value2 !== 0) {
          resultValue = value1 / value2;
        }
        break;
      default:
        break;
    }

    setResult(resultValue.toString());
  };

  return (
    <View style={styles.bg}>
      <BackButton />
      <Text style={styles.font}>Kalkulator Sederhana</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input1}
          onChangeText={text => setInput1(text)}
        />
        <TextInput
          style={styles.input}
          value={input2}
          onChangeText={text => setInput2(text)}
        />
        <Text style={styles.resultText}>Hasilnya Adalah:</Text>
        <TextInput
          style={styles.input}
          value={result}
          onChangeText={text => setResult(text)}
        />
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            title="x"
            onPress={() => performOperation('*')}
            color="#7ca387"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="-"
            onPress={() => performOperation('-')}
            color="#7ca387"
          />
        </View>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            title="+"
            onPress={() => performOperation('+')}
            color="#7ca387"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="/"
            onPress={() => performOperation('/')}
            color="#7ca387"
          />
        </View>
      </View>

      <View style={styles.buttonContainer2}>
        <Button title="Clear" onPress={clearInputs} color="#7ca387" />
      </View>

      <View style={styles.space}></View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  buttonContainer: {
    backgroundColor: 'green',
    margin: 20,
    marginVertical: 11,
    borderRadius: 50,
    width: 100,
  },
  buttonContainer2: {
    backgroundColor: 'green',
    margin: 20,
    marginVertical: 11,
    borderRadius: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bg: {
    backgroundColor: '#d5ded7',
  },
  font: {
    fontSize: 25,
    fontStyle: 'Bold',
    textAlign: 'center',
  },

  space: {
    marginVertical: 77,
  },
});
